import { GoADivider } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function DesignAtGoAPage() {
  return (
      <ComponentContent>
        <h1>Design at the Government of Alberta</h1>
        <h3>To deliver modern and consistent experiences that align with our citizens expectations, our digital products must meet our user experience guidelines and undergo frequent testing to continuously improve and deliver experiences that are relevant.</h3>
        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        <h2>User experience guidelines</h2>
        <p>Government of Alberta digital products should deliver an experience to users that align to the following guidelines:</p>
        <ul>
          <li><strong>User-centered</strong> - Using user-centered design methods, the experience is designed from an understanding of users, their context of use, goals, tasks, and environments.</li>
          <li><strong>Usable</strong> - Interfaces will not require advanced levels of physical and cognitive ability and be usable by the broadest range of users possible.</li>
          <li><strong>Accessible</strong> - Digital products will be usable for any user regardless of physical or cognitive ability by delivering an experience that's inclusive and accessible. </li>
          <li><strong>Trustworthy</strong> - Experiences will feel familiar and be immediately recognizable as a Government of Alberta product. </li>
          <li><strong>Modern</strong> - Digital product experiences are on par with present-day user expectations and preferences for aesthetics and digital interaction. </li>
        </ul>

        <p>To assist in delivering an experience aligned with the guidelines, download the <a href="https://abgov.sharepoint.com/sites/S600D27-DDDUXT/SitePages/UX-Review-Process.aspx" target="_blank">User Experience Guideline Worksheet</a>.</p>

        <h2>Usability testing</h2>
        <p>Usability testing is the preferred method to validate that digital products satisfy the criteria outlined in the User Experience Worksheet.</p>
        <p>Suitable usability testing will include:</p>
        <ul>
          <li>Users of diverse demographic and behavioural backgrounds that will experience the problem or benefit of the product.</li>
          <li>Users with varying levels of physical and or cognitive limitation, literacy, and technical capability.</li>
          <li>A diverse range of devices that reflect users' preferred choice when interacting with government services.</li>
          <li>Tasks that require users to perform actions that reflect a service from end-to-end.</li>
        </ul>
        <p>Frequent usability testing should be conducted to maintain product usability, effectiveness and alignment to the product and user needs evolve over time.</p>
        <p>For guidance on the process of usability testing, refer to our <a href="https://abgov.sharepoint.com/sites/S600D27-DDDUXT/SitePages/Understanding-Usability.aspx" target="_blank">Usability Field Guide</a>.</p>
      </ComponentContent>
  );
}
