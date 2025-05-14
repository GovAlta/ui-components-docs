import { GoabDivider } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function DesignAtGoAPage() {
  return (
      <ComponentContent>
        <h1>Design at the Government of Alberta</h1>
        <h3>Citizens expect digital products that are modern, easy to use, and consistent. To meet these needs, our digital products must follow our user experience guidelines and should be tested frequently to make continuous improvement and stay relevant.</h3>
        <GoabDivider mt="2xl" mb="2xl"></GoabDivider>
        <h2>User experience guidelines</h2>
        <p>Government of Alberta digital products will deliver an experience in alignment to the following guidelines:</p>
        <ul>
          <li><strong>User-centered</strong> - Designed with a clear understanding of users, their goals, tasks, environments, and context of use, using user-centered design methods.</li>
          <li><strong>Usable</strong> - Interfaces will be easy to use, enabling users to find the information they need and complete tasks successfully.</li>
          <li><strong>Accessible</strong> - Digital products will be inclusive, ensuring usability for everyone, regardless of physical or cognitive ability.</li>
          <li><strong>Trustworthy</strong> - Experiences will feel familiar and recognizable as a Government of Alberta product, ensuring users' security and privacy.</li>
          <li><strong>Modern</strong> - Digital experiences will meet present-day user expectations and preferences for aesthetics and interaction.</li>
        </ul>

        <p>To get guidance on how to deliver an experience aligned with the guidelines, download the <a href="https://abgov.sharepoint.com/:u:/r/sites/S600D27-DDDUXT/SitePages/user-experience-worksheet.aspx?csf=1&web=1&e=zkHJVs" target="_blank">User Experience Worksheet</a>.</p>

        <h2>Usability testing</h2>
        <p>Usability testing is our preferred method to ensure digital products meet our <a href="https://abgov.sharepoint.com/:u:/r/sites/S600D27-DDDUXT/SitePages/user-experience-worksheet.aspx?csf=1&web=1&e=zkHJVs" target="_blank">usability guidelines</a>.</p>
        <p>Effective usability testing includes:</p>
        <ul>
          <li><strong>Diverse user group</strong>: Real users from different demographic, behavioural backgrounds, and geographical regions within Alberta that will experience the problem or benefit of the product.</li>
          <li><strong>Inclusive testing</strong>: Users with various physical and/or cognitive abilities, literacy levels, and tech savviness.</li>
          <li><strong>Device variety</strong>: A diverse range of devices that reflect users' preferred choice when interacting with government services.</li>
          <li><strong>Tasks</strong>: Activities that cover tasks and service process from end-to-end.</li>
        </ul>
        <p>Frequent usability testing is required to maintain product usability, effectiveness, and alignment to product and user needs as they evolve over time.</p>
        <p>For guidance on the process of usability testing, refer to our <a href="https://abgov.sharepoint.com/sites/S600D27-DDDUXT/SitePages/Understanding-Usability.aspx" target="_blank">Usability Field Guide</a>.</p>
      </ComponentContent>
  );
}
