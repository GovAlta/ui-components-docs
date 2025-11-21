import { ComponentContent } from "@components/component-content/ComponentContent";
import { GoabText } from "@abgov/react-components";
import { Link } from "react-router-dom";

export default function AutomatedAccessibilityPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">

      <GoabText size="heading-xl" mb="m" mt="xl">
        Automated accessibility
      </GoabText>
      <GoabText size="body-m" mt="none" mb="2xl">
        Automated accessibility testing tools are a valuable first step in identifying potential accessibility issues.
        However, these tools are not a complete solution. They often produce false positives (flagging issues that aren’t 
        actually problems) and false negatives (failing to detect real barriers). To ensure your digital products are 
        truly accessible, combine automated and manual testing and apply human judgment.
      </GoabText>


      <div className="max-width-72ch">
        <h2 id="automatedtools">Why automated tools alone are not enough</h2>
        <GoabText size="body-m" mb="2xl">
            <p>
                <strong>False positives -</strong> Automated tools may flag elements as non-compliant even when they 
                    function correctly for users. For example: Tools might flag an input as “missing an id” when it 
                    is correctly associated with its label using other valid techniques, such as a label element 
                    that wraps the input directly.
            </p>
            <p>
                <strong>False negatives -</strong> Automated tools cannot detect nuanced or context-specific issues. 
                    For instance: They cannot assess whether a screen reader user can effectively navigate a complex 
                    form.
            </p>
            <p>
                <strong>Real user experience -</strong> Accessibility is about ensuring real people can use a product 
                    effectively. Automated tools cannot fully simulate how users interact with your product.
            </p>
        </GoabText>

        <h2 id="effectivetesting">Steps for effective accessibility testing</h2>
        <GoabText size="body-m" mb="2xl">
            <ol>
                <li>Run automated tools to get an initial assessment</li>
                <li>
                    Manually verify flagged issues:
                    <ul>
                        <li>Use a screen reader, like VoiceOver (MacOS) and/or NVDA (Windows), to test the flagged issue</li>
                        <li>Consider the intent and context of the flagged element</li>
                    </ul>
                </li>
                <li>
                    Perform manual testing to catch issues that tools cannot detect
                    <ul>
                        <li>Keyboard navigation</li>
                        <li>Logical focus order</li>
                        <li>Usability with assistive technology</li>
                    </ul>
                </li>
                <li>
                    Report findings. Any findings related to design system components should be reported to the 
                    design system using the <Link to="/get-started/support/report-bug">bug report form</Link>.
                </li>
            </ol>
        </GoabText>

        <h2 id="process">Why this process matters</h2>
        <GoabText size="body-m" mb="2xl">
            Automated tools provide helpful insights, but relying solely on them can lead to:
            <ul>
                <li>Wasted time addressing non-issues</li>
                <li>Missed opportunities to fix genuine barriers</li>
                <li>A false sense of compliance without real usability improvements</li>
            </ul>
            By combing automation with thoughtful manual testing, teams can focus on real issues impacting 
            users, improving the accessibility and quality of their digital products.
        </GoabText>
      </div>
    </ComponentContent>
  );
}
