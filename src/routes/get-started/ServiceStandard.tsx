import { Link } from "react-router-dom";

export default function ServiceStandardPage() {
  return (
    <>
      <h1>Service standards</h1>
      <h3 className="introduction">
        User experience at the Government of Alberta.
      </h3>

      <div className="max-width-72ch">

        <h2>The strategy</h2>
        <p>
          The Digital Design and Delivery’s User Experience Team is beginning the process of establishing a broader User Experience Strategy for the Government of Alberta. This strategy will be focused on the experience delivered to the public and/or staff through design and development of digital products.
As part of this strategy, resources are available for teams to conduct their own usability testing. The User Experience team is also available for consultation.
        </p>
        <h2>Digital experience guidelines</h2>
        <p>
        These guidelines apply to all digital products across government, regardless of delivery method or platform for both public and employee experiences.
        </p>

        <h3>Digital products are:</h3>
        <ol>
          <li>Usable: Using human-centered design to understand users’ context of use, goals, tasks, and environments.</li>
          <li>Suitable: Users can achieve their goals and complete tasks in a manner that is satisfactory and will be on par with outside modern digital products used in other aspects of users lives.</li>
          <li>Accessible: Digital products will be usable for the broadest range of users possible regardless of physical or cognitive limitations, literacy level, or technical capability.</li>
          <li>Comprehensible: Digital products are broadly comprehensible by the largest user base possible by presenting information in plain language, absent of organizational speak, industry jargon, and complex legalese.</li>
          <li>Device-agnostic: Users should not be limited by the device they choose to use or the technology they have access to when interacting with government.</li>
          <li>Compliant: The product must leverage the brand and convey authority and legitimacy. As a government asset, user expectations of safety and security must be understood and met with experiences that evoke a sense of trust.</li>
          <li>Lean: Interfaces are designed to be the least amount of function possible to meet the needs of users in a way that feels intuitive and can be operated without the need of outside help.</li>
          <li>Iterative: Products are continuously tested, resourced, and improved upon with users input and usage data to ensure lasting effectiveness, efficiency, and usability.</li>
          <li>Connected: Digital products will be designed for integration into the broader eco-system of the government reducing the need for new and separate destinations that fracture the experience.</li>
          <li>Responsive: Digital products will make available and clearly visible channels for technical support and allow users to submit feedback on product performance, bugs, or suggest improvements.</li>
        </ol>

        <h2>Meeting the guidelines through usability testing</h2>
        <p>
          Usability testing is our primary process to ensure we are delivering digital experiences that meet the needs and expectations of users as well as our digital experience guidelines.
        </p>
        <p>Usability testing success will help ensure we design the right product and will be determined by our ability to:</p>
        <ul>
          <li>
            recruit a diverse set of users who will experience the problem or benefit the design is looking to improve upon
          </li>
          <li>
            recruit users varying in physical and cognitive limitations, literacy level, or technical capability
          </li>
          <li>
            include the users’ preferred choice of device during testing to understand the diversity of technology used to interact with government
          </li>
          <li>test continuously to understand changing needs and expectations as they arise</li>
          <li>ensure resource availability to act on test findings</li>
          <li>test entire process not just an application or task in isolation</li>
        </ul>

        <p>
         For more details on the process of usability testing, refer to our {" "}
          <a href="#" target="_blank">
            Usability field guide
          </a>{" "}
          .
        </p>
      </div>
    </>
  );
}
