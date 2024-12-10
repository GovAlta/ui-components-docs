import { GoADivider } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function DesignAtGoAPage() {
  return (
      <ComponentContent>
        <h1>Design at the Government of Alberta</h1>
        <h3>Citizens expect digital products that are modern, consistent, and intuitive. To meet these expectations, our digital products must adhere to user experience guidelines and undergo regular testing to ensure continuous improvement and relevance. </h3>
        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        <h2>User experience guidelines</h2>
        <p>The Government of Alberta (GoA) digital products should deliver an experience to users that aligns with the following guidelines:</p>
        <ul>
          <li><strong>User-centered</strong> - Designed with a clear understanding of users, their goals, tasks, environments, and context of use, using user-centered design methods.</li>
          <li><strong>Usable</strong> - Interfaces will be easy to use and accommodate a wide range of physical and cognitive abilities.</li>
          <li><strong>Accessible</strong> - Digital products will be inclusive, ensuring usability for everyone, regardless of physical or cognitive ability.</li>
          <li><strong>Trustworthy</strong> - Experiences will feel familiar and clearly recognizable as a Government of Alberta (GoA) product. </li>
          <li><strong>Modern</strong> - Digital experiences will meet present-day user expectations and preferences for aesthetics and interaction.</li>
        </ul>

        <p>To assist in delivering an experience aligned with the guidelines, download the <a href="https://abgov.sharepoint.com/sites/S600D27-DDDUXT/SitePages/UX-Review-Process.aspx" target="_blank">User Experience Guideline Worksheet</a>.</p>

        <h2>How to conduct effective usability testing</h2>
        <p>Usability testing is our preferred method to check if digital products meet the standards set in the User Experience Worksheet.</p>
        <p>A good usability testing should include:</p>
        <ul>
          <li><strong>Diverse user group</strong>: People from different demographic and behavioural backgrounds that will experience the problem or benefit of the product.</li>
          <li><strong>Inclusive testing</strong>: People with various physical and/or cognitive abilities, literacy levels and technical capabilities.</li>
          <li><strong>Device variety</strong>: A diverse range of devices that reflect users' preferred choice when interacting with government services.</li>
          <li><strong>Tasks</strong>: Activities that cover a service a service process from end-to-end.</li>
        </ul>
        <p>Frequent usability testing should be conducted to maintain product usability, effectiveness and alignment to the product and user needs evolve over time.</p>
        <p>For guidance on the process of usability testing, refer to our <a href="https://abgov.sharepoint.com/sites/S600D27-DDDUXT/SitePages/Understanding-Usability.aspx" target="_blank">Usability Field Guide</a>.</p>
      </ComponentContent>
  );
}
