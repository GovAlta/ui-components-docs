import "./GetStarted.css";

export const ServicePrinciples: React.FC = () => {
  return (
    <>
      <h1>DDD Service principles</h1>
      <h3>
        At DDD, we work as user centred, agile teams to provide better digital
        services to Alberta.
      </h3>
      <div className="services-principle-page">
        <ol>
          <li>
            <h3>Nothing for users without users</h3>

            <p>
              We put user needs at the centre of service delivery. Users may
              include Albertans, internal GoA staff, and anyone who has a stake
              in the way that the service is delivered.
            </p>
            <p>
              From the outset of every project, we identify and work directly
              with users to understand their experience. Sometimes we map the
              user service journey to identify needs and challenges that users
              encounter.
            </p>
            <p>
              {" "}
              We continue to engage users throughout the whole digital delivery
              process, testing the service with real users, and incorporating
              our findings.
            </p>
          </li>
          <li>
            <h3>Collaborative, nimble culture</h3>
            <p>
              Modern service delivery requires modern ways of working. We are
              transforming the Government of Alberta into an organization that
              can deliver world-class digital services.
            </p>
            <p>
              This means shifting the way that we work to reduce bureaucracy,
              empower agile product teams to make decisions, increase digital
              literacy, and inspire transformation that endures beyond product
              delivery.
            </p>
          </li>
          <li>
            <h3>Quick, iterative and continuous delivery</h3>
            <p>
              We use agile methods to design, develop, test, and iterate
              possible solutions with users.
            </p>
            <p>
              We don't fixate on one potential solution; instead, we explore
              possible ideas with users early and often, incorporating findings
              from usability testing along the way. Our priority is to place
              something of value in the user's hands as quickly and as often as
              possible.
            </p>
          </li>
          <li>
            <h3>Open by default</h3>
            <p>
              A modern digital service should be transparent and accountable,
              both to the public and internally among government stakeholders.
            </p>
            <p>
              We are open about our process, sharing our work in progress,
              tools, standards, and code freely with Albertans and the broader
              service sector across the country. It also means we communicate
              openly about our successes and failures.
            </p>
          </li>
          <li>
            <h3>Consider the end to end experience</h3>
            <p>
              We consider the start-to-finish journey users take to complete
              their objective.
            </p>
            <p>
              We endeavour to create a resilient and seamless service experience
              for Albertans across digital and physical channels. In some cases,
              this may include changes to policies and legislation, processes,
              and ways in which users interact with the service.
            </p>
          </li>
          <li>
            <h3>Flexible technology ecosystem</h3>

            <p>
              We build ecosystems to meet the constant evolution of user needs
              and technology.
            </p>
            <p>
              This means starting small and scaling up, developing compatible
              common components, and judiciously choosing the right tool for the
              job. We believe in being frugal with Albertans' tax dollars, and
              endeavour to leverage existing components of the ecosystem
              wherever possible.
            </p>
          </li>
          <li>
            <h3>Resilient security and privacy practices</h3>
            <p>
              We respect that Albertans have entrusted us to handle their
              personal information with care. We recognize that people own their
              personal data and have a stake in how the government uses that
              information.
            </p>
            <p>
              In partnership with the Cybersecurity Services and Data,
              Information and Privacy Services Divisions of Service Alberta, we
              are committed to implementing privacy, security, and data
              management best practices that are in line with industry standards
              and Albertans' evolving expectations of digital services.
            </p>
          </li>
          <li>
            <h3>Inclusive practices that work for all</h3>
            <p>
              We humbly acknowledge that societal inequities exist and recognize
              that these inequities can—often unintentionally—manifest in an
              organizational setting. We are dedicated to policies and practices
              that strive to mitigate inequities before they happen and confront
              them if they inadvertently arise. We consider accessibility and
              diversity as foundational design criteria for any public service.
              We are committed to designing inclusive government services that
              prioritize the experiences of users with distinct needs.
            </p>
            <p>
              We acknowledge the complex historical relationship that the
              government has with Indigenous peoples and endeavour to work in
              the spirit of reconciliation in every project.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
};

export default ServicePrinciples;
