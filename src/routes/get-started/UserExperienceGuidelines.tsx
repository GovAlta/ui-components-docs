import { GoabText } from "@abgov/react-components";

export default function UserExperienceGuidelinesPage() {
  return (
    <>
      <GoabText size="heading-m" mt="xl" mb={"xs"}>Designers</GoabText>
      <GoabText size="heading-xl" mb="m">User experience guidelines</GoabText>
      <GoabText size="body-l" mb="xl"> Digital products built for the Government of Alberta should comply with these
        guidelines to ensure a quality
        user experience for Albertans.</GoabText>

      <div className="max-width-72ch">

        <ul>
          <li><strong>User-centered</strong>: Designed with a clear understanding of users, their goals, tasks, environments, and context of use, using user-centered design methods.</li>
          <li><strong>Usable</strong>: Interfaces will be easy to use, enabling users to find the information they need and complete tasks successfully.</li>
          <li><strong>Accessible</strong>: Digital products will be inclusive, ensuring usability for everyone, regardless of physical or cognitive ability.</li>
          <li><strong>Trustworthy</strong>: Experiences will feel familiar and recognizable as a Government of Alberta product, ensuring users' security and privacy.</li>
          <li><strong>Modern</strong>: Digital experiences will meet present-day user expectations and preferences for aesthetics and interaction.</li>
        </ul>

        <GoabText size="body-m" mt="l" mb="l">
          For more details on the process of assessing compliance to each guideline, refer to our&nbsp;
          <a href="https://abgov.sharepoint.com/sites/S600D27-DDDUXT/SitePages/User-Experience-Guidelines.aspx" target="_blank">
            User Experience Guidelines
          </a> and&nbsp;
          <a href="https://abgov.sharepoint.com/:x:/r/sites/S600D27-DDDUXT/Shared%20Documents/User%20Experience%20Review%20and%20Support/Template%20-%20User%20Experience%20Worksheet.xlsx?d=wca1b397b18c44f33bed42119ea2a48c0&csf=1&web=1&e=yCFDxn" target="_blank">
            User Experience Worksheet
          </a>.
        </GoabText>

        <GoabText size="heading-l" mt="2xl" mb="l">Usability testing</GoabText>

        <GoabText size="body-m" mt="l" mb="l">Usability testing is our preferred method to understand user needs as they
          relate to each guideline.</GoabText>
        <GoabText size="body-m" mt="l" mb="l">Suitable usability testing includes:</GoabText>

        <ul>
          <li><strong>Diverse user group</strong>: Real users from different demographic, behavioural backgrounds, and geographical regions within Alberta that will experience the problem or benefit of the product.</li>
          <li><strong>Inclusive testing</strong>: Users with various physical and/or cognitive abilities, literacy levels, and tech savviness.</li>
          <li><strong>Device variety</strong>: A diverse range of devices that reflect users' preferred choice when interacting with government services.</li>
          <li><strong>Tasks</strong>: Activities that cover tasks and service process from end-to-end.</li>
        </ul>

        <GoabText size="body-m" mt="l" mb="l">Frequent usability testing should be conducted to maintain product
          usability, effectiveness and alignment to the user needs as they evolve over time.</GoabText>

        <GoabText size="body-m" mt="l" mb="l">
          For guidance on the process of usability testing, refer to our&nbsp;
          <a href="https://abgov.sharepoint.com/sites/S600D27-DDDUXT#usability-field-guide" target="_blank">
            usability field guide
          </a>.
        </GoabText>
        
      </div>
    </>
  );
}
