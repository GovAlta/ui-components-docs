import { GoabDropdown, GoabDropdownItem } from "@abgov/react-components";
import {
  ANGULAR_VERSIONS, getVersionedUrlPath,
  OLD_ANGULAR_URL_SEGMENT,
  OLD_REACT_URL_SEGMENT, REACT_VERSIONS
} from "./version-language-constants.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const VersionLanguageSwitcher = () => {
  const {language, version, setLanguage, setVersion} = useContext(LanguageVersionContext);
  const location = useLocation();
  const navigate = useNavigate();

  const updateURL = (key: "language" | "version", newValue: "old" | "new" | "react" | "angular") => {
    const isComponentRoute =
      location.pathname.startsWith("/components/") && location.pathname.split("/").length > 2;
    let newLanguageValue = language; // fallback value from localStorage
    let newVersionValue = version; // fallback value from localStorage

    if (key === "language") newLanguageValue = newValue;
    if (key === "version") newVersionValue = newValue;

    const combineSegment = getVersionedUrlPath(newVersionValue, newLanguageValue);
    if (isComponentRoute) {
      const pathSegments = location.pathname.split("/");
      const componentName = pathSegments[pathSegments.length -1];
      if (OLD_REACT_URL_SEGMENT === combineSegment || OLD_ANGULAR_URL_SEGMENT === combineSegment) {
        const newPath = `/components/${combineSegment}/${componentName}${location.hash}`;
        navigate(newPath, {replace: true});
      } else {
        const newPath = `/components/${componentName}${location.hash}`;
        navigate(newPath, {replace: true});
      }
    }
  }

  const updateLanguage = (newValue: "react" | "angular") => {
    setLanguage(newValue);
    updateURL("language", newValue);
  }

  const updateVersion = (newValue: "old" | "new") => {
    setVersion(newValue);
    updateURL("version", newValue);
  }

  return (
    <>
      <GoabDropdown value={language} onChange={(e) => updateLanguage(e.value as "react" | "angular")}>
        <GoabDropdownItem value="angular" label="Angular"></GoabDropdownItem>
        <GoabDropdownItem value="react" label="React"></GoabDropdownItem>
      </GoabDropdown>

      {language === "react" && (
        <GoabDropdown value={version} onChange={(e) => updateVersion(e.value as "old" | "new")}>
          <GoabDropdownItem value={REACT_VERSIONS.OLD.value} label={REACT_VERSIONS.OLD.label}></GoabDropdownItem>
          <GoabDropdownItem value={REACT_VERSIONS.NEW.value} label={REACT_VERSIONS.NEW.label}></GoabDropdownItem>
        </GoabDropdown>
      )}

      {language === "angular" && (
        <GoabDropdown relative={true} width={"100px"} value={version} onChange={(e) => updateVersion(e.value as "old" | "new")}>
          <GoabDropdownItem value={REACT_VERSIONS.OLD.value} label={ANGULAR_VERSIONS.OLD.label}></GoabDropdownItem>
          <GoabDropdownItem value={REACT_VERSIONS.NEW.value} label={ANGULAR_VERSIONS.NEW.label}></GoabDropdownItem>
        </GoabDropdown>
      )}
    </>
  );
}
