export type LanguageVersion = "old" | "new";
export const ANGULAR_VERSIONS = {
  OLD: {
    label: "v3",
    value: "old"
  },
  NEW: {
    label: "v4",
    value: "new"
  }
}
export const REACT_VERSIONS = {
  OLD: {
    label: "v4",
    value: "old"
  },
  NEW: {
    label: "v5",
    value: "new"
  }
}

export const LOCAL_STORAGE_LANGUAGE_KEY = "goa-docs-lang";
export const LOCAL_STORAGE_VERSION_KEY = "goa-docs-version";

export const OLD_REACT_URL_SEGMENT = `${REACT_VERSIONS.OLD.label}-react`;
export const OLD_ANGULAR_URL_SEGMENT = `${ANGULAR_VERSIONS.OLD.label}-angular`;

export const getVersionedUrlPath = (version: string, language: string) => {
  return version === "old" ? `${language === "react" ? REACT_VERSIONS.OLD.label : ANGULAR_VERSIONS.OLD.label}-${language}` : "";
}
