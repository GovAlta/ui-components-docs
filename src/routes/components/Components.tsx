import { GoabNotification, GoabSideMenu } from "@abgov/react-components";
import { Link, Outlet } from "react-router-dom";
import { SupportInfo } from "@components/support-info/SupportInfo.tsx";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { getVersionedUrlPath } from "@components/version-language-switcher/version-language-constants.ts";

export function Components() {
  const { language, version } = useContext(LanguageVersionContext);

  const prefixUrl = getVersionedUrlPath(version, language);

  const getUrl = (path: string) => {
    return prefixUrl.length > 0 ? `${prefixUrl}/${path}` : path;
  };

  return (
    <>
    {version === "old" && <GoabNotification type="important">
        You are not on the latest version of the design system. Upgrade to latest version
      </GoabNotification>}

      <section className="content">
        <section className="side-menu">
          <GoabSideMenu>
            <Link to="">All</Link>
            <Link to={getUrl("accordion")}>Accordion</Link>
            <Link to={getUrl("badge")}>Badge</Link>
            <Link to={getUrl("block")}>Block</Link>
            <Link to={getUrl("button")}>Button</Link>
            <Link to={getUrl("button-group")}>Button group</Link>
            <Link to={getUrl("callout")}>Callout</Link>
            <Link to={getUrl("checkbox")}>Checkbox</Link>
            <Link to={getUrl("chip")}>Chip</Link>
            <Link to={getUrl("container")}>Container</Link>
            <Link to={getUrl("date-picker")}>Date picker</Link>
            <Link to={getUrl("details")}>Details</Link>
            <Link to={getUrl("divider")}>Divider</Link>
            <Link to={getUrl("dropdown")}>Dropdown</Link>
            <Link to={getUrl("file-uploader")}>File uploader</Link>
            <Link to={getUrl("footer")}>Footer</Link>
            <Link to={getUrl("form-item")}>Form item</Link>
            <Link to={getUrl("form-stepper")}>Form stepper</Link>
            <Link to={getUrl("grid")}>Grid</Link>
            <Link to={getUrl("header")}>Header</Link>
            <Link to={getUrl("hero-banner")}>Hero banner</Link>
            <Link to={getUrl("icons")}>Icons</Link>
            <Link to={getUrl("icon-button")}>Icon button</Link>
            <Link to={getUrl("input")}>Input</Link>
            <Link to={getUrl("list")}>List</Link>
            <Link to={getUrl("microsite-header")}>Microsite header</Link>
            <Link to={getUrl("modal")}>Modal</Link>
            <Link to={getUrl("notification-banner")}>Notification banner</Link>
            <Link to={getUrl("pagination")}>Pagination</Link>
            <Link to={getUrl("popover")}>Popover</Link>
            <Link to={getUrl("progress-indicator")}>Progress indicator</Link>
            <Link to={getUrl("radio")}>Radio</Link>
            <Link to={getUrl("side-menu")}>Side menu</Link>
            <Link to={getUrl("skeleton-loader")}>Skeleton loading</Link>
            <Link to={getUrl("spacer")}>Spacer</Link>
            <Link to={getUrl("table")}>Table</Link>
            <Link to={getUrl("tabs")}>Tabs</Link>
            <Link to={getUrl("text-area")}>Text area</Link>
            <Link to={getUrl("tooltip")}>Tooltip</Link>
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
