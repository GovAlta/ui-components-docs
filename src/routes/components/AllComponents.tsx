import { useEffect, useState } from "react";
import { toSentenceCase, fetchAllIssueCounts, fetchComponentMetadataFromProject } from "../../utils";
import {
  GoabTable,
  GoabTableSortHeader,
  GoabTabs,
  GoabTab,
  GoabText,
  GoabFormItem,
  GoabInput,
  GoabBadge,
  GoabSkeleton
} from "@abgov/react-components";
import { ComponentCard, Props as RawComponentProps, ComponentStatus } from "@components/component-card/ComponentCard";

type ComponentProps = Omit<RawComponentProps, "status"> & {
  status: ComponentStatus;
  designSystemUrl?: string;
  designComponentFigmaUrl?: string;
  designContributionFigmaUrl?: string;
  openIssuesUrl?: string;
  metatags?: string[];
};

const AllComponents = () => {
  const [filter, setFilter] = useState<string>("");
  const [issueCounts, setIssueCounts] = useState<Record<string, number>>({});
  const [cards, setCards] = useState<ComponentProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const metadata = await fetchComponentMetadataFromProject();
      console.log("Fetched metadata from GitHub:", metadata);
      const sorted = metadata.sort((a, b) => {
        const statusOrder: ComponentStatus[] = ["Published", "In Progress", "Not Published"];
        const statusComparison =
          statusOrder.indexOf(a.status as ComponentStatus) - statusOrder.indexOf(b.status as ComponentStatus);
        if (statusComparison !== 0) return statusComparison;
        return a.name.localeCompare(b.name);
      });
      setCards(sorted);
    };
    fetchData();
  }, []);
  const [sortDirection, setSortDirection] = useState<{ [key: string]: number }>({
    status: -1,
    name: 1,
  });

  const filteredCards = cards.filter((card) => {
    const search = filter.toLowerCase();
    return (
      card.name.toLowerCase().includes(search) ||
      card.description.toLowerCase().includes(search) ||
      card.tags?.some((tag) => tag.toLowerCase().includes(search)) ||
      card.metatags?.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  const sortData = (detailOrSortBy: string | { sortBy: string }) => {
    // If a string is passed, use it directly; otherwise extract the sortBy property
    const sortBy = typeof detailOrSortBy === "string" ? detailOrSortBy : detailOrSortBy.sortBy;

    const newDirection = sortDirection[sortBy] === 1 ? -1 : 1;
    const sorted = [...cards].sort((a, b) => {
      if (sortBy === "status") {
        const statusOrder: ComponentStatus[] = ["Published", "In Progress", "Not Published"];
        const statusComparison =
          statusOrder.indexOf(a.status as ComponentStatus) - statusOrder.indexOf(b.status as ComponentStatus);
        if (statusComparison !== 0) return statusComparison * newDirection;
      }
      const key = sortBy as keyof ComponentProps;
      const aField = (a as any)[key];
      const bField = (b as any)[key];

      const aValue =
        sortBy === "name"
          ? a.name.toLowerCase()
          : Array.isArray(aField)
            ? (aField.length > 0 ? aField[0] : "")
            : (aField ?? "");
      const bValue =
        sortBy === "name"
          ? b.name.toLowerCase()
          : Array.isArray(bField)
            ? (bField.length > 0 ? bField[0] : "")
            : (bField ?? "");

      if (aValue > bValue) return newDirection;
      if (aValue < bValue) return -newDirection;
      return 0;
    });

    setCards(sorted);
    setSortDirection({ [sortBy]: newDirection });
  };

  // Helper to format the label query for REST URLs
  const getLabelQuery = (name: string) => {
    const formatted = toSentenceCase(name);
    return formatted.includes(" ") ? `"${formatted}"` : formatted;
  };

  // Helper to format the label query for GraphQL (escaping inner quotes)
  useEffect(() => {
    if (cards.length === 0) return;

    const loadIssueCounts = async () => {
      console.log("cards passed to fetchAllIssueCounts:", cards);
      const issueCounts = await fetchAllIssueCounts(cards);
      setIssueCounts(issueCounts);
    };

    loadIssueCounts();
  }, [cards]);

  const renderTable = () => (
    <GoabTable width="100%" onSort={sortData}>
      <thead>
      <tr>
        <th>
          <GoabTableSortHeader
            name="status"
            direction={sortDirection.status === -1 ? "asc" : "desc"}
          >
            Status
          </GoabTableSortHeader>
        </th>
        <th>
          <GoabTableSortHeader name="name">
            Name
          </GoabTableSortHeader>
        </th>
        <th>
          <GoabTableSortHeader name="tags">
            Category
          </GoabTableSortHeader>
        </th>
        <th style={{ width: "130px", minWidth: "130px" }}>Open issues</th>
      </tr>
      </thead>
      <tbody>
      {filteredCards.map((card) => (
        <tr key={card.name}>
          <td style={{ width: "100px" }}>
            <GoabBadge
              mt="2xs"
              type={card.status === "Published" ? "success" : card.status === "In Progress" ? "important" : "information"}
              content={card.status} />
          </td>
          <td>
            {card.status === "Published" ? (
              <a href={`/components/${card.name.toLowerCase().replace(/\s+/g, "-")}`}>
                {toSentenceCase(card.name)}
              </a>
            ) : (
              <span>{toSentenceCase(card.name)}</span>
            )}
          </td>
          <td>{card.tags?.[0] || ""}</td>
          <td style={{ minWidth: "135px", maxWidth: "170px" }}>
            <a
              href={`https://github.com/GovAlta/ui-components/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(getLabelQuery(card.name))}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
              {issueCounts[card.name] !== undefined && ` (${issueCounts[card.name]})`}
            </a>
          </td>
        </tr>
      ))}
      </tbody>
    </GoabTable>
  );

  return (
    <div>
      <GoabText size="heading-xl" mt="xl">
        Components
      </GoabText>
      <GoabText size="body-l" mt="m" mb="xl">
        Components are reusable parts of the user interface that have been made to support a variety of applications. You can use individual components in many different patterns and contexts.
      </GoabText>

      <GoabFormItem helpText="Search by keyword, category, or name" mb="xl">
        <GoabInput
          leadingIcon="search"
          name="filter"
          type="text"
          value={filter}
          width="100%"
          onChange={({ value }) => setFilter(value || "")}
        />
      </GoabFormItem>

      <GoabTabs initialTab={1}>
        <GoabTab heading="Cards">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
              gap: "var(--goa-space-xl)",
              width: "100%"
            }}
          >

            {cards.length === 0 &&
              <>
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
              </>
            }

            {filteredCards.map((card) => (
              <ComponentCard
                key={card.name}
                name={card.name}
                tags={card.tags}
                description={card.description}
                status={card.status}
                githubLink={card.openIssuesUrl || `https://github.com/GovAlta/ui-components/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(getLabelQuery(card.name))}`}
                openIssues={issueCounts[card.name]}
                isNew={card.isNew}
                designSystemUrl={card.designSystemUrl}
                designComponentFigmaUrl={card.designComponentFigmaUrl}
                designContributionFigmaUrl={card.designContributionFigmaUrl}
              />
            ))}
          </div>
        </GoabTab>
        <GoabTab heading="List">{renderTable()}</GoabTab>
      </GoabTabs>
    </div>
  );
};

export default AllComponents;
