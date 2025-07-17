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
  GoabSkeleton, GoabButton, GoabBlock
} from "@abgov/react-components";
import {
  ComponentCard,
  ComponentCardProps as RawComponentProps,
  ComponentStatus
} from "@components/component-card/ComponentCard";
import { useDebounce } from "use-debounce";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { ANGULAR_VERSIONS, REACT_VERSIONS } from "@components/version-language-switcher/version-language-constants.ts";
import { GoabBadgeType } from "@abgov/ui-components-common";
import { NEW_COMPONENTS } from "../../global-constants";

type ComponentProps = Omit<RawComponentProps, "status"> & {
  status: ComponentStatus;
  designComponentFigmaUrl?: string;
  designContributionFigmaUrl?: string;
  openIssuesUrl?: string;
  metatags?: string[];
  groups?: string[];
};

const getBadgeType = (status: ComponentStatus): GoabBadgeType => {
  if (status === "Available") return "success";
  if (status === "Legacy") return "information";
  if (status === "In Progress") return "important";
  return "light"; // Default or "Not Published"
};

//order the components based on the status rank
const getStatusRank = (status: ComponentStatus): number => {
  if (status === "Available" || status === "Legacy") return 0;
  if (status === "In Progress") return 1;
  return 2; // Not Published and others
};

const AllComponents = () => {
  const { version, language } = useContext(LanguageVersionContext);
  const [filter, setFilter] = useState<string>("");
  const [debouncedFilter] = useDebounce(filter, 300);
  const [issueCounts, setIssueCounts] = useState<Record<string, number>>({});
  const [cards, setCards] = useState<ComponentProps[]>([]);
  const resetFilters = () => {
    setFilter("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const metadata = await fetchComponentMetadataFromProject();
      const sorted = metadata.sort((a, b) => {
        const aRank = getStatusRank(a.status as ComponentStatus);
        const bRank = getStatusRank(b.status as ComponentStatus);
        if (aRank !== bRank) return aRank - bRank;
        return a.name.localeCompare(b.name);
      });
      setCards(sorted);
      const issueCounts = await fetchAllIssueCounts("Components", sorted);
      setIssueCounts(issueCounts);
    };
    fetchData();
  }, []);

  const [sortDirection, setSortDirection] = useState<{ [key: string]: number }>({
    status: -1,
    name: 1,
  });

  const filteredCards = (() => {
    const search = debouncedFilter.toLowerCase();
    const result = cards.filter((card) => {
      return (
        card.name.toLowerCase().includes(search) ||
        card.description.toLowerCase().includes(search) ||
        card.tags?.some((tag) => tag.toLowerCase().includes(search)) ||
        card.metatags?.some((tag) => tag.toLowerCase().includes(search))
      );
    });


    const sortBy = Object.keys(sortDirection)[0];
    const newDirection = sortDirection[sortBy];

    const sortedFiltered = [...result].sort((a, b) => {
      if (sortBy === "status") {
        const aRank = getStatusRank(a.status as ComponentStatus);
        const bRank = getStatusRank(b.status as ComponentStatus);

        if (aRank !== bRank) return (aRank - bRank) * newDirection;

        // If same status rank, sort by name
        return a.name.localeCompare(b.name) * newDirection;
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

    return sortedFiltered;
  })();

  const sortData = (detailOrSortBy: string | { sortBy: string }) => {
    // If a string is passed, use it directly; otherwise extract the sortBy property
    const sortBy = typeof detailOrSortBy === "string" ? detailOrSortBy : detailOrSortBy.sortBy;
    const newDirection = sortDirection[sortBy] === 1 ? -1 : 1;
    setSortDirection({ [sortBy]: newDirection });
  };

  // Helper to format the label query for REST URLs
  const getLabelQuery = (name: string) => {
    const formatted = toSentenceCase(name);
    return formatted.includes(" ") ? `"${formatted}"` : formatted;
  };

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
      {cards.length === 0 && (
        <>
          <tr>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
          </tr>
          <tr>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
          </tr>
          <tr>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
          </tr>
          <tr>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
          </tr>
          <tr>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
          </tr>
          <tr>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
          </tr>
          <tr>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
          </tr>
          <tr>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
            <td colSpan={1}><GoabSkeleton type="title" size="3" /></td>
          </tr>
        </>
      )}

      {cards.length > 0 && filteredCards.length === 0 && (
        <tr>
          <td colSpan={4}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <GoabText size="body-l" mt="l" mb="l">No matching components found.</GoabText>
              <GoabButton ml="l" type="tertiary" onClick={resetFilters}>Reset filters</GoabButton>
            </div>
          </td>
        </tr>
      )}

      {filteredCards.map((card, index) => (
        <tr key={card.name} style={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8f8f8" }}>
          <td style={{ width: "100px" }}>
            <GoabBadge
              mt="2xs"
              type={
                version === "old" && NEW_COMPONENTS.includes(card.name) 
                  ? "important" 
                  : getBadgeType(card.status)
              }
              content={
                version === "old" && NEW_COMPONENTS.includes(card.name)
                  ? "Available in " + 
                    (language === "angular"
                      ? ANGULAR_VERSIONS.NEW.label.substring(0, 2).toUpperCase()
                      : REACT_VERSIONS.NEW.label.substring(0, 2).toUpperCase())
                  : card.status
              }
            />
          </td>
          <td>
            {card.status === "Available" || card.status === "Legacy" ? (
              <a href={`/components/${card.name.toLowerCase().replace(/\s+/g, "-")}`}>
                {toSentenceCase(card.name)}
              </a>
            ) : (
              <span>{toSentenceCase(card.name)}</span>
            )}
          </td>
          <td>{card.groups?.[0] || ""}</td>
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
        Reusable parts of the user interface that have been made to support a variety of applications. You can use
        individual components in many different patterns and contexts.
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

            {cards.length === 0 && (
              <>
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
                <GoabSkeleton type="card" size="3" />
              </>
            )}

            {cards.length > 0 && filteredCards.length === 0 && (
              <GoabBlock direction={"row"} mt={"2xl"} mb={"3xl"}>
                <GoabText size="body-l">
                  <div style={{ whiteSpace: "nowrap" }}>
                    No matching examples found.{" "}
                  </div>
                </GoabText>
                <GoabButton type="tertiary" onClick={resetFilters} ml={"s"}>Reset filters</GoabButton>
              </GoabBlock>
            )}

            {filteredCards.map((card) => (
              <ComponentCard
                key={card.name}
                name={card.name}
                tags={card.tags}
                description={card.description}
                status={card.status}
                githubLink={card.openIssuesUrl || `https://github.com/GovAlta/ui-components/issues?q=is%3Aissue+is%3Aopen+label%3A${encodeURIComponent(getLabelQuery(card.name))}`}
                openIssues={issueCounts[card.name]}
                isNew={NEW_COMPONENTS.includes(card.name)}
                designComponentFigmaUrl={card.designComponentFigmaUrl}
                designContributionFigmaUrl={card.designContributionFigmaUrl}
                imageFolder="component-thumbnails"
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
