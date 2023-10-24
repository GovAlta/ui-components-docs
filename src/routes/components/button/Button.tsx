import { GoABadge, GoATab, GoATabs } from "@abgov/react-components";
import ButtonCodeExample from "./ButtonCodeExample";
import ButtonDesignGuideLine from "./ButtonDesignGuideLine";
import {
  Category,
  ComponentInfo,
} from "@components/component-info/ComponentInfo.tsx";

export default function ButtonPage() {
  const relatedComponents = [
    { link: "/components/icon-button", name: "Icon button" },
    { link: "/components/link", name: "Link" },
  ];

  return (
    <div className="button-page">
      <ComponentInfo
        name="Button"
        category={Category.INPUTS_AND_ACTIONS}
        description="Buttons allow users to perform an action or to navigate to another page.
        They have multiple styles for various needs, and are ideal for calling
        attention to where a user needs to do something or so they can move
        forward in a flow."
        relatedComponents={relatedComponents}
      />

      <GoATabs>
        <GoATab heading="Code examples">
          <ButtonCodeExample />
        </GoATab>
        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }
        >
          <ButtonDesignGuideLine />
        </GoATab>
      </GoATabs>
    </div>
  );
}
