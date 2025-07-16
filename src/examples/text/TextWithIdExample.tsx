import { GoabText } from "@abgov/react-components";

export default function TextWithIdExample() {
  return (
    <div>
      <GoabText tag="h1" size="heading-l" id="main-heading">
        Main Section Title
      </GoabText>
      <GoabText tag="p">
        This is a paragraph that follows the main heading.
      </GoabText>
      <GoabText tag="h2" size="heading-m" id="sub-heading">
        Subsection Title
      </GoabText>
      <GoabText tag="p">
        This demonstrates how the tag property creates semantic heading hierarchy 
        independent of visual size, while the id property enables navigation anchoring.
      </GoabText>
    </div>
  );
}