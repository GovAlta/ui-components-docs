import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toSentenceCase, fetchAllIssueCounts, fetchExampleMetadataFromProject } from "../../utils";
import {
  GoabTable,
  GoabTableSortHeader,
  GoabTabs,
  GoabTab,
  GoabText,
  GoabFormItem,
  GoabInput,
  GoabBadge,
  GoabSkeleton, GoabBlock
} from "@abgov/react-components";
import { GoabCheckbox, GoabButton } from "@abgov/react-components";
import { useDebounce } from "use-debounce";
import {
  ExampleCard,
  ExampleCardProps as RawExampleProps,
  ComponentStatus
} from "@components/example-card/ExampleCard.tsx";

type ExampleProps = Omit<RawExampleProps, "status"> & {
  status: ComponentStatus;
  designComponentFigmaUrl?: string;
  designContributionFigmaUrl?: string;
  openIssuesUrl?: string;
  metatags?: string[];
  url?: string;
  slug?: string;
  groups?: string[];
};

export default function ExamplesOverviewPage() {
  const [filter, setFilter] = useState<string>("");
  const [debouncedFilter] = useDebounce(filter, 300);
  const [issueCounts, setIssueCounts] = useState<Record<string, number>>({});
  const [cards, setCards] = useState<ExampleProps[]>([]);

  const [showFilters, setShowFilters] = useState(false);
  const sizes = ["Interaction", "Task", "Page", "Service"];
  const userGoals = ["Ask a user for...", "Help a user to..."];
  const categories = [
    "Content layout",
    "Feedback and alerts",
    "Inputs and actions",
    "Public form",
    "Structure and navigation",
    "Technical"
  ];
  const [selectedFilters, setSelectedFilters] = useState<{
    size: string[];
    userGoal: string[];
    category: string[];
  }>({
    size: [],
    userGoal: [],
    category: []
  });

  function handleCheckboxChange(category: "size" | "userGoal" | "category", value: string, checked: boolean) {
    setSelectedFilters((prev) => {
      const prevSet = new Set(prev[category]);
      if (checked) {
        prevSet.add(value);
      } else {
        prevSet.delete(value);
      }
      return { ...prev, [category]: Array.from(prevSet) };
    });
  }

  const resetFilters = () => {
    setSelectedFilters({
      size: [],
      userGoal: [],
      category: []
    });
    setFilter("");
  };

  // Calculate if all or any filters are selected
  userGoals.every((p) => selectedFilters.userGoal.includes(p)) &&
  categories.every((t) => selectedFilters.category.includes(t));
  userGoals.some((p) => selectedFilters.userGoal.includes(p)) ||
  categories.some((t) => selectedFilters.category.includes(t));

  useEffect(() => {
    const fetchData = async () => {
      const metadata = await fetchExampleMetadataFromProject();
      const withSlugs = metadata.map((item) => ({
        ...item,
        slug: item.name
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
      }));
      const sorted = withSlugs.sort((a, b) => {
        const statusOrder: ComponentStatus[] = ["Available", "In Progress", "Not Published"];
        const statusComparison =
          statusOrder.indexOf(a.status as ComponentStatus) - statusOrder.indexOf(b.status as ComponentStatus);
        if (statusComparison !== 0) return statusComparison;
        return a.name.localeCompare(b.name);
      });
      setCards(sorted);

      const issueCounts = await fetchAllIssueCounts("Examples", sorted);
      setIssueCounts(issueCounts);
    };
    fetchData();
  }, [selectedFilters]);
  
  const [sortDirection, setSortDirection] = useState<{ [key: string]: number }>({
    status: -1,
    name: 1,
  });

  const filteredCards = (() => {
    const search = debouncedFilter.toLowerCase();

    const matchesSearch = (card: ExampleProps) =>
      card.name.toLowerCase().includes(search) ||
      card.description.toLowerCase().includes(search) ||
      card.tags?.some((tag) => tag.toLowerCase().includes(search)) ||
      card.metatags?.some((tag) => tag.toLowerCase().includes(search));

    const safeIncludes = (tags: string[] | undefined, value: string) => (tags ?? []).includes(value);

    const strictMatch = (card: ExampleProps) => {
      const tags = card.tags ?? [];

      const sizeMatch =
        selectedFilters.size.length === 0 ||
        selectedFilters.size.every((sz) => safeIncludes(tags, sz));

      const userGoalMatch =
        selectedFilters.userGoal.length === 0 ||
        selectedFilters.userGoal.every((goal) => safeIncludes(tags, goal));

      const categoryMatch =
        selectedFilters.category.length === 0 ||
        selectedFilters.category.every((cat) => safeIncludes(tags, cat));

      return sizeMatch && userGoalMatch && categoryMatch && matchesSearch(card);
    };

    const looseMatch = (card: ExampleProps) => {
      const tags = card.tags ?? [];

      const sizeMatch =
        selectedFilters.size.length > 0 &&
        selectedFilters.size.some((sz) => safeIncludes(tags, sz));

      const userGoalMatch =
        selectedFilters.userGoal.length > 0 &&
        selectedFilters.userGoal.some((goal) => safeIncludes(tags, goal));

      const categoryMatch =
        selectedFilters.category.length > 0 &&
        selectedFilters.category.some((cat) => safeIncludes(tags, cat));

      return (sizeMatch || userGoalMatch || categoryMatch) && matchesSearch(card);
    };

    const strictFiltered = cards.filter(strictMatch);
    const looseFiltered = cards.filter((card) => looseMatch(card) && !strictMatch(card));

    const result = [...strictFiltered, ...looseFiltered];

    const sortBy = Object.keys(sortDirection)[0];
    const newDirection = sortDirection[sortBy];

    const sortedFiltered = [...result].sort((a, b) => {
      if (sortBy === "status") {
        const statusOrder: ComponentStatus[] = ["Available", "In Progress", "Not Published"];
        const statusComparison =
          statusOrder.indexOf(a.status as ComponentStatus) - statusOrder.indexOf(b.status as ComponentStatus);
        if (statusComparison !== 0) return statusComparison * newDirection;
      }
      const key = sortBy as keyof ExampleProps;
      const aField = (a as any)[key];
      const bField = (b as any)[key];

      const aValue = sortBy === "name"
        ? a.name.toLowerCase()
        : Array.isArray(aField) ? (aField.length > 0 ? aField[0] : "") : (aField ?? "");
      const bValue = sortBy === "name"
        ? b.name.toLowerCase()
        : Array.isArray(bField) ? (bField.length > 0 ? bField[0] : "") : (bField ?? "");

      if (aValue > bValue) return newDirection;
      if (aValue < bValue) return -newDirection;
      return 0;
    });

    return sortedFiltered;
  })();

  const sortData = (detailOrSortBy: string | { sortBy: string }) => {
    const sortBy = typeof detailOrSortBy === "string" ? detailOrSortBy : detailOrSortBy.sortBy;
    const newDirection = sortDirection[sortBy] === 1 ? -1 : 1;
    setSortDirection({ [sortBy]: newDirection });
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
        <th style={{ minWidth: "130px" }}>Category</th>
        <th style={{ width: "140px", minWidth: "130px" }}>Github</th>
      </tr>
      </thead>
      <tbody>
      {cards.length === 0 ? (
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
      ) : filteredCards.length === 0 ? (
        <tr>
          <td colSpan={4}>
            <GoabBlock direction={"row"} mt={"2xl"} mb={"2xl"}>
              <GoabText size="body-l">
                No matching examples found.{" "}
              </GoabText>
              <GoabButton type="tertiary" onClick={resetFilters} ml={"s"}>Reset filters</GoabButton>
            </GoabBlock>
          </td>
        </tr>
      ) : (
        filteredCards.map((card, index) => (
          <tr key={card.name} style={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#F8F8F8" }}>
            <td style={{ width: "100px" }}>
              <GoabBadge
                mt="2xs"
                type={card.status === "Available" ? "success" : card.status === "In Progress" ? "important" : "light"}
                content={card.status} />
            </td>
            <td>
              {card.status === "Available" ? (
                <Link to={`/examples/${card.slug}`}>
                  {toSentenceCase(card.name)}
                </Link>
              ) : (
                <span>{toSentenceCase(card.name)}</span>
              )}
            </td>
            <td>
              {card.tags?.map((tag) => (
                <GoabBadge
                  key={tag}
                  type="information"
                  mt="2xs"
                  mb="2xs"
                  mr="2xs"
                  content={tag}
                />
              ))}
            </td>
            <td style={{ minWidth: "135px", maxWidth: "170px" }}>
              {card.url ? (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View issue
                </a>
              ) : (
                <a
                  href={`https://github.com/GovAlta/design-system-backlog/issues?q=${encodeURIComponent(card.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View issue
                </a>
              )}
            </td>
          </tr>
        ))
      )}
      </tbody>
    </GoabTable>
  );

  return (
    <div>
      <GoabText size="heading-xl" mt="xl">
        Examples
      </GoabText>
      <GoabText size="body-l" mt="m" mb="xl">
        Common patterns, pages, tasks, component configurations, flows, and more to use as a starting point when
        creating government digital services.
      </GoabText>
      <GoabFormItem helpText="Search by keyword, category, or name">
        <GoabInput
          leadingIcon="search"
          name="filter"
          type="text"
          value={filter}
          width="100%"
          onChange={({ value }) => setFilter(value || "")}
        />
      </GoabFormItem>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <GoabButton mt={"m"} mb={"m"} type={"tertiary"} onClick={() => setShowFilters((prev) => !prev)}>
          {showFilters ? "Hide filters" : "Filter"}
        </GoabButton>
      </div>

      {showFilters && (
        <div style={{ display: "flex", gap: "3rem", marginBottom: "1rem" }}>
          <GoabFormItem label="Size">
            {sizes.map((sz) => (
              <GoabCheckbox
                key={sz}
                name={sz}
                text={sz}
                checked={selectedFilters.size.includes(sz)}
                onChange={(detail) => {
                  handleCheckboxChange("size", sz, detail.checked);
                }}
              />
            ))}
          </GoabFormItem>

          <GoabFormItem label="User Goal">
            {userGoals.map((goal) => (
              <GoabCheckbox
                key={goal}
                name={goal}
                text={goal}
                checked={selectedFilters.userGoal.includes(goal)}
                onChange={(detail) => {
                  handleCheckboxChange("userGoal", goal, detail.checked);
                }}
              />
            ))}
          </GoabFormItem>

          <GoabFormItem label="Category">
            {categories.map((cat) => (
              <GoabCheckbox
                key={cat}
                name={cat}
                text={cat}
                checked={selectedFilters.category.includes(cat)}
                onChange={(detail) => {
                  handleCheckboxChange("category", cat, detail.checked);
                }}
              />
            ))}
          </GoabFormItem>
        </div>
      )}

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

            {cards.length === 0 ? (
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
            ) : filteredCards.length === 0 ? (

              <GoabBlock direction={"row"} mt={"2xl"} mb={"3xl"}>
                <GoabText size="body-l">
                  <div style={{ whiteSpace: "nowrap" }}>
                    No matching examples found.{" "}
                  </div>
              </GoabText>
                <GoabButton type="tertiary" onClick={resetFilters} ml={"s"}>Reset filters</GoabButton>
              </GoabBlock>

            ) : (
              filteredCards.map((card) => (
                <ExampleCard
                  key={card.name}
                  name={card.name}
                  tags={card.tags}
                  description={card.description}
                  status={card.status}
                  openIssues={issueCounts[card.name]}
                  isNew={card.isNew}
                  designComponentFigmaUrl={card.designComponentFigmaUrl}
                  designContributionFigmaUrl={card.designContributionFigmaUrl}
                  imageFolder="example-thumbnails"
                  githubLink={card.url}
                />
              ))
            )}
          </div>
        </GoabTab>
        <GoabTab heading="List">{renderTable()}</GoabTab>
      </GoabTabs>
    </div>
  );
}