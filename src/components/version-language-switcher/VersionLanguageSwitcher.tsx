import {
  GoabIcon,
  GoabPopover,
} from "@abgov/react-components";
import {
  ANGULAR_VERSIONS, getVersionedUrlPath, Language, LanguageVersion,
  VERSIONED_ANGULAR_URL_SEGMENT,
  VERSIONED_REACT_URL_SEGMENT, REACT_VERSIONS
} from "./version-language-constants.ts";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import "./version-language-switcher.css";

export const VersionLanguageSwitcher = () => {
  const {language, version, setLanguage, setVersion} = useContext(LanguageVersionContext);
  const location = useLocation();
  const navigate = useNavigate();

  const updateURL = (key: "language" | "version", newValue: LanguageVersion | Language) => {
    const isComponentRoute =
      location.pathname.startsWith("/components/") && location.pathname.split("/").length > 2;
    let newLanguageValue = language; // fallback value from localStorage
    let newVersionValue = version; // fallback value from localStorage

    if (key === "language") newLanguageValue = newValue as Language;
    if (key === "version") newVersionValue = newValue as LanguageVersion;

    const combineSegment = getVersionedUrlPath(newVersionValue, newLanguageValue);
    if (isComponentRoute) {
      const pathSegments = location.pathname.split("/");
      const componentName = pathSegments[pathSegments.length -1];
      if (VERSIONED_REACT_URL_SEGMENT === combineSegment || VERSIONED_ANGULAR_URL_SEGMENT === combineSegment) {
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

  const capitalizeFirstLetter = (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const openLanguagePopOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const openVersionPopOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const getCurrentVersionLabel = (language: string, version: string) => {
    if (language === "react") {
      return version === "new" ? REACT_VERSIONS.NEW.label : REACT_VERSIONS.OLD.label;
    }    if (language === "angular") {
      return version === "new" ? ANGULAR_VERSIONS.NEW.label : ANGULAR_VERSIONS.OLD.label;
    }
  }

  return (
    <>
      <GoabPopover
        target={
          <a className="version-language-switcher__heading" href="#" id="language-switcher" onClick={e => openLanguagePopOver(e)}>
            <GoabIcon type="chevron-down" size="small"></GoabIcon> {capitalizeFirstLetter(language)}
          </a>
        }
        padded={false}>
        <>
          {["angular", "react"].map(lang => (
            <a key={lang} className={`version-language-switcher__menu ${language === lang ? "version-language-switcher__menu--current" : ""}`} onClick={() => updateLanguage(lang as "react" | "angular")}>
              {capitalizeFirstLetter(lang)}
            </a>))
          }
        </>
      </GoabPopover>

      <GoabPopover target={
        <a className="version-language-switcher__heading" href="#"
           onClick={e => openVersionPopOver(e)}>
          <GoabIcon type="chevron-down" size="small"></GoabIcon> {getCurrentVersionLabel(language, version)}
        </a>
      } padded={false}>
    <>
      {["new", "old"].map(ver => (
          <a key={ver} className={`version-language-switcher__menu ${version === ver ? "version-language-switcher__menu--current" : ""}`} onClick={() => updateVersion(ver as "old" | "new")}>
            {getCurrentVersionLabel(language, ver)}
          </a>
        ))}
      </>
      </GoabPopover>

    </>
  );
}
