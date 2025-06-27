import { useContext, useEffect, useState } from "react";
import { ComponentStatus } from "@components/component-card/ComponentCard";
import { toSentenceCase } from "../../utils";
import {
  GoabTable,
  GoabTableSortHeader,
  GoabTabs,
  GoabTab,
  GoabGrid,
  GoabText,
  GoabFormItem,
  GoabInput,
  GoabBadge
} from "@abgov/react-components";
import { ComponentCard, Props as ComponentProps } from "@components/component-card/ComponentCard";
import { GitHubDataContext } from "@contexts/GitHubDataContext.tsx";

const AllComponents = () => {
  const GitHubData = useContext(GitHubDataContext);
  console.log("GitHubData", GitHubData);

  const [filter, setFilter] = useState<string>("");
  const [issueCounts, setIssueCounts] = useState<Record<string, number>>({});
  const [cards, setCards] = useState<ComponentProps[]>(() => {
    const initialCards: ComponentProps[] =[];

    return initialCards.sort((a, b) => {
      const statusOrder: ComponentStatus[] = ["Published", "In Progress", "Not Published"];
      const statusComparison = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
      if (statusComparison !== 0) return statusComparison;
      return a.name.localeCompare(b.name);
    });
  });
  const [sortDirection, setSortDirection] = useState<{ [key: string]: number }>({
    status: -1,
    name: 1,
  });

  const filteredCards = cards.filter((card) => {
    const filterLowerCase = (filter || "").toLowerCase();
    const nameMatches = card.name.toLowerCase().includes(filterLowerCase);
    const tagsMatch = card.tags?.some((tag) => tag.toLowerCase().includes(filterLowerCase));
    return !filter || nameMatches || tagsMatch;
  });

  const sortData = (detailOrSortBy: string | { sortBy: string }) => {
    // If a string is passed, use it directly; otherwise extract the sortBy property
    const sortBy = typeof detailOrSortBy === "string" ? detailOrSortBy : detailOrSortBy.sortBy;

    const newDirection = sortDirection[sortBy] === 1 ? -1 : 1;
    const sorted = [...cards].sort((a, b) => {
      if (sortBy === "status") {
        const statusOrder: ComponentStatus[] = ["Published", "In Progress", "Not Published"];
        const statusComparison = statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
        if (statusComparison !== 0) return statusComparison * newDirection;
      }
      const key = sortBy as keyof ComponentProps;
      const aField = a[key];
      const bField = b[key];

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
    const loadIssueCounts = async () => {
      //const issueCounts = await fetchAllIssueCounts(cards);
      // setIssueCounts(issueCounts);
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
          <GoabTableSortHeader name="groups">
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
          <td>{card.groups.join(", ")}</td>
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
          onChange={({ value }) => setFilter(value || "")}        />
      </GoabFormItem>

      <GoabTabs initialTab={1}>
        <GoabTab heading="Cards">
          <GoabGrid minChildWidth="15rem" gap="xl">
            {filteredCards.map((card) => (
              <ComponentCard
                key={card.name}
                name={card.name}
                groups={card.groups}
                description={card.description}
                status={card.status}
                githubLink={`https://github.com/GovAlta/ui-components/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(getLabelQuery(card.name))}`}
                openIssues={issueCounts[card.name]}
                isNew={card.isNew}
              />
            ))}
          </GoabGrid>
        </GoabTab>
        <GoabTab heading="List">{renderTable()}</GoabTab>
      </GoabTabs>
    </div>
  );
};

export default AllComponents;
