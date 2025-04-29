import {
  GoabBadge,
  GoabBlock,
  GoabNotification,
  GoabSideMenu,
  GoabSideMenuGroup,
  GoabSpacer
} from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { getVersionedUrlPath, ANGULAR_VERSIONS, REACT_VERSIONS } from "@components/version-language-switcher/version-language-constants.ts";
import { MAX_CONTENT_WIDTH } from "../../global-constants.ts";

export function Components() {
  const { language, version } = useContext(LanguageVersionContext);

  const prefixUrl = getVersionedUrlPath(version, language);

  const getUrl = (path: string) => {
    return prefixUrl.length > 0 ? `${prefixUrl}/${path}` : path;
  };


  const newComponentLabel = (componentName: string) => {
    const getBadgeLabel = () => {
      if (version === "new") return "New";
      return language === "angular"
        ? ANGULAR_VERSIONS.NEW.label.substring(0, 2).toUpperCase()
        : REACT_VERSIONS.NEW.label.substring(0, 2).toUpperCase();
    };
    return (
      <GoabBlock alignment="center">
        {componentName} <GoabBadge type={"important"} content={getBadgeLabel()}></GoabBadge>
      </GoabBlock>
    );
  };

  return (
    <>
      {version === "old" && (
        <GoabNotification type="important" maxContentWidth={MAX_CONTENT_WIDTH}>
          Support for the Long Term Support (LTS) version of the Design system will be available until September 2025. <a href="/get-started/developers/update">View the upgrade guide</a>
        </GoabNotification>
      )}
      {version === "new" && (
        <GoabNotification type="information" maxContentWidth={MAX_CONTENT_WIDTH}>
          Upgrading to the latest version of the design system?{" "}
          <a href="/get-started/developers/update">View the upgrade guide</a>
        </GoabNotification>
      )}
      <section className="content">
        <section className="side-menu">
          <GoabSideMenu>
            <GoabSpacer vSpacing="m"></GoabSpacer>
            <Link to="">All</Link>
            <GoabSideMenuGroup heading="Content layout">
              <Link to={getUrl("accordion")}>Accordion</Link>
              <Link to={getUrl("callout")}>Callout</Link>
              <Link to={getUrl("container")}>Container</Link>
              <Link to={getUrl("details")}>Details</Link>
              <Link to={getUrl("hero-banner")}>Hero banner</Link>
              <Link to={getUrl("list")}>List</Link>
              <Link to={getUrl("popover")}>Popover</Link>
              <Link to={getUrl("table")}>Table</Link>
              <Link to={getUrl("text")}>Text</Link>

            </GoabSideMenuGroup>
            <GoabSideMenuGroup heading="Feedback and alerts">
              <Link to={getUrl("badge")}>Badge</Link>
              <Link to={getUrl("filter-chip")}>Filter chip</Link>
              <Link to={getUrl("modal")}>Modal</Link>
              <Link to={getUrl("notification-banner")}>Notification banner</Link>
              <Link to={getUrl("progress-indicator")}>Progress indicator</Link>
              <Link to={getUrl("skeleton-loader")}>Skeleton loader</Link>
              <Link to={getUrl("tooltip")}>Tooltip</Link>
            </GoabSideMenuGroup>
            <GoabSideMenuGroup heading="Inputs and actions">
              <Link to={getUrl("button")}>Button</Link>
              <Link to={getUrl("button-group")}>Button group</Link>
              <Link to={getUrl("checkbox")}>Checkbox</Link>
              <Link to={getUrl("date-picker")}>Date picker</Link>
              <Link to={getUrl("dropdown")}>Dropdown</Link>
              <Link to={getUrl("file-uploader")}>File uploader</Link>
              <Link to={getUrl("icon-button")}>Icon button</Link>
              <Link to={getUrl("input")}>Input</Link>
              <Link to={getUrl("radio")}>Radio</Link>
              <Link to={getUrl("text-area")}>Text area</Link>
            </GoabSideMenuGroup>
            <GoabSideMenuGroup heading="Structure and navigation">
              <Link to={getUrl("drawer")}>{newComponentLabel("Drawer")}</Link>
              <Link to={getUrl("footer")}>Footer</Link>
              <Link to={getUrl("form-stepper")}>Form stepper</Link>
              <Link to={getUrl("header")}>Header</Link>
              <Link to={getUrl("microsite-header")}>Microsite header</Link>
              <Link to={getUrl("pagination")}>Pagination</Link>
              <Link to={getUrl("side-menu")}>Side menu</Link>
              <Link to={getUrl("tabs")}>Tabs</Link>
            </GoabSideMenuGroup>
            <GoabSideMenuGroup heading="Utilities">
              <Link to={getUrl("block")}>Block</Link>
              <Link to={getUrl("divider")}>Divider</Link>
              <Link to={getUrl("form-item")}>Form item</Link>
              <Link to={getUrl("grid")}>Grid</Link>
              <Link to={getUrl("icons")}>Icons</Link>
              <Link to={getUrl("spacer")}>Spacer</Link>
            </GoabSideMenuGroup>
          </GoabSideMenu>
        </section>

        <main className="main">
          <Outlet />
          <SupportInfo />
        </main>
      </section>
    </>
  );
}

export default Components;
