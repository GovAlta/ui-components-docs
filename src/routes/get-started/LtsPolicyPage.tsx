import { GoabCallout, GoabText } from "@abgov/react-components";
import { Link } from "react-router-dom";

export const LtsPolicyPage = () => {
  return (
    <>
      <GoabText size="heading-xl" mt="xl" mb="m">Long Term Support (LTS)</GoabText>

      <GoabText size="body-l" tag="h3" mt="none" mb="xl">
        The Long Term Support (LTS) version will continue to be supported until September 30, 2025. Learn more about what you can expect.
      </GoabText>

      <GoabText tag={"p"} mt={"5"}>
        The previous version of the design system v3 (Angular) and v5 (React) is now in Long-Term Support (LTS). Here's what that means:
      </GoabText>

      <GoabText size="body-m" mb="xl">
      <ul>
        <li><strong>Bug fixes only:</strong> We'll continue fixing critical bugs and regressions.</li>
        <li><strong>No new features or enhancements:</strong> All new development is happening in the latest major version.</li>
        <li><strong>Same reliable experience:</strong> Your project will continue to work as expected.</li>
      </ul>
      </GoabText>

      <GoabText size="body-m" mb="2xl">
        Ready to update to the latest version? Visit our <Link to="/get-started/developers/update">update guide</Link>
      </GoabText>

      <GoabCallout type="important" size={"medium"} heading="Active maintenance will cease on September 30, 2025"
                   maxWidth={"65ch"} mt={"xl"}>
        Projects still using LTS will continue to work, but new issues or bugs will not be prioritized.
      </GoabCallout>
    </>
  );
}
