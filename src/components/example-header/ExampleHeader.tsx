import { GoabBlock, GoabText, GoabBadge } from "@abgov/react-components";
import "../component-header/ComponentHeader.css"; // reusing existing styling from component pages

interface Props {
  name: string;
  description?: string;
  githubLink?: string;
  figmaLink?: string;
  tags?: string[];
}

export const ExampleHeader: React.FC<Props> = ({ name, description, githubLink, figmaLink, tags }) => {
  return (
    <div className="component-header">

      <GoabBlock gap="none" direction="column" alignment="start">
        {tags && tags.length > 0 && (
          <GoabBlock direction="row" gap="xs" mb="xs">
            {tags.map((tag, index) => {
              let type: "information" | "important" | "success" | "emergency" = "information";

              if (/ask/i.test(tag)) type = "important";
              else if (/interact/i.test(tag)) type = "information";
              else if (/page/i.test(tag)) type = "success";
              else if (/error|block/i.test(tag)) type = "emergency";

              return (
                <GoabBadge key={index} type={type} content={tag} />
              );
            })}
          </GoabBlock>
        )}

        <GoabBlock gap="xl" direction="row" alignment="end" mt="none" mb="2xs">

          <GoabText size="heading-l" mt="none">
            <b>{name}</b>
          </GoabText>
          {(githubLink || figmaLink) && (
            <GoabBlock gap="l" direction="row">
              {figmaLink && (
                <GoabBlock gap="3xs" direction="row">
                  <div className="figma-link-wrapper">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.20313 4.20312C3.20313 4.79779 3.43935 5.3681 3.85985 5.78859C4.28034 6.20908 4.85065 6.44531 5.44531 6.44531H7.6875V1.96094H5.44531C4.85065 1.96094 4.28034 2.19717 3.85985 2.61766C3.43935 3.03815 3.20313 3.60846 3.20313 4.20312Z"
                        stroke="#666666" strokeWidth="0.826069" />
                      <path
                        d="M7.6875 1.96094V6.44531H9.92969C10.5244 6.44531 11.0947 6.20908 11.5152 5.78859C11.9356 5.3681 12.1719 4.79779 12.1719 4.20312C12.1719 3.60846 11.9356 3.03815 11.5152 2.61766C11.0947 2.19717 10.5244 1.96094 9.92969 1.96094L7.6875 1.96094Z"
                        stroke="#666666" strokeWidth="0.826069" />
                      <path
                        d="M3.20313 8.6875C3.20313 9.28217 3.43935 9.85247 3.85985 10.273C4.28034 10.6935 4.85065 10.9297 5.44531 10.9297H7.6875V6.44531H5.44531C4.85065 6.44531 4.28034 6.68154 3.85985 7.10203C3.43935 7.52253 3.20313 8.09283 3.20313 8.6875Z"
                        stroke="#666666" strokeWidth="0.826069" />
                      <path
                        d="M7.6875 8.6875C7.6875 8.09283 7.92373 7.52253 8.34422 7.10203C8.76471 6.68154 9.33502 6.44531 9.92969 6.44531C10.5244 6.44531 11.0947 6.68154 11.5152 7.10203C11.9356 7.52253 12.1719 8.09283 12.1719 8.6875C12.1719 9.28217 11.9356 9.85247 11.5152 10.273C11.0947 10.6935 10.5244 10.9297 9.92969 10.9297C9.33502 10.9297 8.76471 10.6935 8.34422 10.273C7.92373 9.85247 7.6875 9.28217 7.6875 8.6875V8.6875Z"
                        stroke="#666666" strokeWidth="0.826069" />
                      <path
                        d="M3.20312 13.1719C3.20312 12.5772 3.43935 12.0069 3.85985 11.5864C4.28034 11.1659 4.85065 10.9297 5.44531 10.9297H7.6875V13.1719C7.6875 13.7665 7.45127 14.3368 7.03078 14.7573C6.61029 15.1778 6.03998 15.4141 5.44531 15.4141C4.85065 15.4141 4.28034 15.1778 3.85985 14.7573C3.43935 14.3368 3.20313 13.7665 3.20312 13.1719Z"
                        stroke="#666666" strokeWidth="0.826069" />
                    </svg>
                  </div>
                  <a className="small no-external-icon grey" href={figmaLink} target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
                </GoabBlock>
              )}
              {githubLink && (
                <GoabBlock gap="2xs" direction="row">
                  <goa-icon type="logo-github" size="2xsmall" mb="xs" fillcolor="#666666" />
                  <a
                    className="small no-external-icon grey"
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Github issue
                  </a>
                </GoabBlock>
              )}
            </GoabBlock>
          )}
        </GoabBlock>
        {description && (
          <GoabText size="body-m" mt="none" mb="l">
            {description}
          </GoabText>
        )}
      </GoabBlock>
    </div>
  );
};