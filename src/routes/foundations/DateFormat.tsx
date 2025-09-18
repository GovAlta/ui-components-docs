import { GoabCallout, GoabContainer, GoabDivider, GoabGrid, GoabText } from "@abgov/react-components";
import { DoDont } from "@components/do-dont/DoDont.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

const minGridWidth = "36ch";

export default function DateFormatPage() {
  return (
    <ComponentContent tocCssQuery="h2[id], h3[id]">
      <GoabText size="heading-m" mt="xl" mb="xs">Content guidelines</GoabText>
      <GoabText size="heading-xl" mb="m" mt="none">
        Date format
      </GoabText>
      <GoabText size="body-l" mt="none" mb="xl">
        Configuration which contains date information that includes the specification of the form and structure of the
        date data within the date format in different scenarios.
      </GoabText>

      <GoabContainer type="non-interactive" mb="l">
        <div
          className="example"
          style={{
            textAlign: "center",
          }}>
          <GoabText size="body-l">
          March 14, 2021
          </GoabText>
        </div>
      </GoabContainer>

      <GoabDivider mb="2xl" mt="l"></GoabDivider>

      <h2 id="conversational-long-form">Conversational and long-form</h2>
      <GoabText size="body-m" mt="l" mb="l">
        When the date is written out in long-form (i.e. narrative, instructions, commentary,
        information), it is recommended that you use a more conversational and more natural
        “readable” tone.
      </GoabText>

      <GoabContainer type="non-interactive" mb="s">
        <div
          className="example"
          style={{
            textAlign: "center",
          }}>
          <strong>Month date, Year</strong> (e.g., March 14, 2021)
        </div>
      </GoabContainer>

      <GoabText size="body-s" mb="2xl">
        This presents the date in a conventional “speaking” way and aligns with the Canadian Style
        Guide 5.14 Dates.
      </GoabText>

      <div className="dodont-wrapper">
        <GoabGrid minChildWidth={minGridWidth} gap="2xl">
          <DoDont type="do" description="Use the format: Month, cardinal date, year.">
            <GoabText size="body-l">
              March 14, 2021
            </GoabText>
          </DoDont>
          <DoDont type="do" description="Use cardinal or ordinal numbers if no year is present.">
            <GoabText size="body-l">
              March 14
            </GoabText>
            <GoabText size="body-l">
              March 14th
            </GoabText>
          </DoDont>
        </GoabGrid>

        <GoabGrid minChildWidth={minGridWidth} gap="2xl" mt="2xl">
          <DoDont type="dont" description="Don’t use ordinal numbers with written out month.">
            <GoabText size="body-l">
              March 14th, 2021
            </GoabText>
          </DoDont>
          <DoDont type="dont" description="Don’t use capital letters for the month.">
            <GoabText size="body-l">
              MARCH 14TH, 2021
            </GoabText>
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t use two digit abbreviations for the year, as this adds confusion and ambiguity.">
            <GoabText size="body-l">
              March 12, 21
            </GoabText>
          </DoDont>
        </GoabGrid>
      </div>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>

      <h2 id="short-hand">Short-hand</h2>
      <GoabText size="body-m" mt="l" mb="l">
        When space is limited (e.g., example forms, tables, summary pages, mobile) it may be
        necessary to have a more condensed date displayed.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">The format remains the same, but a three-letter abbreviation for the month
        may be used.</GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Examples:</strong> <br />
        Jul 14, 2022
        <br /> Nov 6, 2024
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Three-letter month abbreviations:</strong> <br />
        <table className="date-table">
          <tr>
            <td>Jan</td>
            <td>Feb</td>
            <td>Mar</td>
            <td>Apr</td>
            <td>May</td>
            <td>Jun</td>
          </tr>
          <tr>
            <td>Jul</td>
            <td>Aug</td>
            <td>Sep</td>
            <td>Oct</td>
            <td>Nov</td>
            <td>Dec</td>
          </tr>
        </table>
      </GoabText>

      <div className="dodont-wrapper">


        <GoabGrid minChildWidth={minGridWidth} gap="2xl" mt="2xl">
          <DoDont
            type="do"
            description="Use the same format as the long-form: month, cardinal date, year.">
            <GoabText size="body-l">
              Mar 14, 2021
            </GoabText>
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t use two digit abbreviations for the year, as this adds confusion and ambiguity.">
            <GoabText size="body-l">
              Mar 12, 21
            </GoabText>
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t use other punctuation, other than a comma, in the date expression.">
            <GoabText size="body-l">
              Mar. 12, 2021
            </GoabText>
          </DoDont>
          <DoDont type="dont" description="Don’t use capital letters for the month abbreviation.">
            <GoabText size="body-l">
              MAR 12, 21
            </GoabText>
          </DoDont>
          <DoDont type="dont" description="Don’t use leading zeros for single date numbers.">
            <GoabText size="body-l">
              Mar 07, 21
            </GoabText>
          </DoDont>
          <DoDont type="dont" description="Don’t use slashes and numbers, as it is confusing.">
            <GoabText size="body-l">
              03/07/21
            </GoabText>
            <GoabText size="body-l">
              07/03/2021
            </GoabText>
          </DoDont>
        </GoabGrid>
      </div>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>

      <h2 id="day-of-the-week">Day of the week</h2>
      <GoabText size="body-m" mt="l" mb="l">
        Days of the week can be included. It helps to bring clarity and comprehension of the date.
        The format described above is extended, with the day of the week appearing first, followed
        by a comma, then the date expression.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Either long-form or short-form may be used, but not mixed. <br />
        <div style={{ marginBottom: "var(--goa-space-xl)" }}>
          <strong>Day, Month date, Year</strong> (e.g., Friday, March 14, 2021)
        </div>
        <GoabText size="heading-s" mt="l">
          Examples:
        </GoabText>
        <table className="date-table">
          <tr>
            <td>Tuesday, July 14, 2022</td>
            <td>Tue, July 14, 2022</td>
          </tr>
          <tr>
            <td>Wednesday, November 6, 2024</td>
            <td>Wed, November 6, 2024</td>
          </tr>
        </table>
        <GoabText size="heading-s" mt="xl">
          Three-letter day abbreviations
        </GoabText>
        <table className="date-table">
          <tr>
            <td>Mon</td>
            <td>Tue</td>
            <td>Wed</td>
            <td>Thu</td>
            <td>Fri</td>
            <td>Sat</td>
            <td>Sun</td>
          </tr>
        </table>
      </GoabText>

      <div className="dodont-wrapper">
        <GoabGrid minChildWidth={minGridWidth}>
          <DoDont type="do" description="Use the same format: month, cardinal date, year.">
            <GoabText size="body-l">
              Monday, March 14, 2021
            </GoabText>
            <GoabText size="body-l">
              Mon, Mar 14, 2021
            </GoabText>
          </DoDont>
        </GoabGrid>

        <GoabGrid minChildWidth={minGridWidth} gap="2xl" mt="2xl">
          <DoDont type="dont" description="Don’t mix long-form and short-form.">
            <GoabText size="body-l">
              Monday, Mar 12, 2021
            </GoabText>
            <GoabText size="body-l">
              Mon, March 12, 2021
            </GoabText>
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t use other punctuation, other than a comma, in the date expression.">
            <GoabText size="body-l">
              Mon, Mar 12, 2021
            </GoabText>
          </DoDont>
          <DoDont type="dont" description="Don’t forget to delineate day and month with a comma.">
            <GoabText size="body-l">
              Monday March 12, 2021
            </GoabText>
          </DoDont>
        </GoabGrid>
        <GoabCallout mt="2xl" heading="Best Practices" size={"medium"} maxWidth={"600px"}>
              Avoid using day of the week in tabular, form, summary, or other concise displays, as
              it would crowd the already limited space with unnecessary information.
          </GoabCallout>
      </div>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>

      <h2 id="time">Time</h2>
      <GoabText size="body-m" mt="l" mb="l">
        When displaying time, the Government of Alberta prefers to use the 12-hour clock format.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        Both also prefer “am” and “pm” be written with a space after the time, without the periods
        as per the Canadian Style Guide.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Examples:</strong> <br />
        8:00 am
        <br /> 11:45 pm{" "}
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        When the time is written with a date, the date comes first and the time follows, after “at”.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Day, Month date, Year at XX:XX am/pm</strong>
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">(e.g., Friday, March 14, 2021 at 2:26 pm)</GoabText>
      <div className="dodont-wrapper">
        <GoabGrid minChildWidth={minGridWidth}>
          <DoDont
            type="do"
            description="Use the same format: day, month cardinal date, year at XX:XX am/pm">
            <GoabText size="body-l">
              Monday, March 14, 2021 at 3:30 pm
            </GoabText>
          </DoDont>
        </GoabGrid>
        <GoabGrid minChildWidth={minGridWidth} gap="2xl" mt="2xl">
          <DoDont type="dont" description="Don't include a leading zero for the time.">
            <GoabText size="body-l">
              08:15 am
            </GoabText>
          </DoDont>
          <DoDont type="dont" description="Don’t use periods in the “am” or “pm”.">
            <GoabText size="body-l">
              4:43 p.m.
            </GoabText>
          </DoDont>
        </GoabGrid>
        <GoabGrid minChildWidth={minGridWidth} mt="2xl">
          <DoDont type="dont" description="Don’t write the time before the date.">
            <GoabText size="body-l">
              7:55 am on Saturday, May 15, 2021
            </GoabText>
          </DoDont>
        </GoabGrid>
      </div>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>

      <h2 id="time-zones">Time zones</h2>
      <GoabText size="body-m" mt="l" mb="l">
        When needed, the time zone can be written after the time in long-form or short-form. The
        long-form is always in parenthesis and the short-form is always a capitalized three-letter
        abbreviation.
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Examples:</strong> <br />
        8:00 am (Eastern standard time)
        <br /> 11:45 pm PDT
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Canadian time zones</strong>
        <br />
        Pacific standard / daylight time <br />
        Mountain standard / daylight time <br />
        Central standard / daylight time <br />
        Eastern standard / daylight time <br />
        Atlantic standard / daylight time <br />
        Newfoundland standard / daylight time <br />
      </GoabText>

      <GoabText size="body-m" mt="l" mb="l">
        <strong>Three letter abbreviations </strong>
        <table className="date-table">
          <tr>
            <td>PST</td>
            <td>MST</td>
            <td>CST</td>
            <td>EST</td>
            <td>AST</td>
            <td>NST</td>
          </tr>
          <tr>
            <td>PDT</td>
            <td>MDT</td>
            <td>CDT</td>
            <td>EDT</td>
            <td>ADT</td>
            <td>NDT</td>
          </tr>
        </table>
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        <strong>Standard and Daylight time</strong>
      </GoabText>
      <GoabText size="body-m" mt="l" mb="l">
        In the regions of Canada where daylight saving time is used, it begins on the second Sunday
        of March at 2 a.m. and ends on the first Sunday in November at 2 a.m. As a result, daylight
        saving time lasts for 34 weeks (238 days) every year, or about 65 percent of the entire
        year.
      </GoabText>

      <div className="dodont-wrapper">
        <GoabGrid minChildWidth={minGridWidth} gap="2xl" mt="2xl">
          <DoDont
            type="do"
            description="Use standard time between the months of November and March.">
            <img src="/images/component-thumbnails/date-st.png" width="80%"></img>
          </DoDont>
          <DoDont
            type="do"
            description="Use daylight time between the months of April and October.">
            <img src="/images/component-thumbnails/date-dst.png" width="80%"></img>
          </DoDont>
          <DoDont
            type="dont"
            description="Don’t wrap the three-letter abbreviation in parentheses.">
            <GoabText size="body-l">
              4:43pm (MST)
            </GoabText>
          </DoDont>
        </GoabGrid>
        <div style={{ maxWidth: "700px" }}>
          <GoabCallout type="information" heading="Daylight saving time" size="medium" mt="2xl" maxWidth={"600px"}>
            From April to October Alberta participates in daylight saving time.
          </GoabCallout>
        </div>
      </div>

      <GoabDivider mb="2xl" mt="2xl"></GoabDivider>

      <h2 id="accessibility">Accessibility and Screen readers</h2>
      <GoabText size="body-m" mt="l" mb="l">
        Using a npm module (accessible-date), we are able to ensure that dates displayed are
        readable and accessible for screen readers:
        <br />
        <a href="https://github.com/MikesBarto/accessible-date" target="_blank">
          https://github.com/MikesBarto/accessible-date
        </a>
      </GoabText>

      <GoabContainer>
        Consider the following html <br />
        <span style={{ color: "var(--goa-color-text-secondary)" }}>
          &lt;time id="timestamp" datetime="2001-05-15T19:30"&gt;May 15, 2001 - 7:30pm&lt;/time&gt;
        </span>
        <br />
        Typical screen readers will return the following:
        <br />
        <strong>
          <i>“May one five, two zero zero one, seven three zero pm”</i>
        </strong>
        <br />
        <br />
        Accessible-date will return the following:
        <br />
        <strong>
          <i>“Tuesday, May fifteenth, two-thousand one at seven thirty pm”</i>
        </strong>
      </GoabContainer>

      <div style={{ maxWidth: "700px" }}>
        <GoabCallout type="information" heading="ISO 8601 format" size="medium" mt="xl" maxWidth={"600px"}>
          The date time variables entered into the module for producing “readable” and
          “conversational” need to be rendered in the ISO 8601 format.
        </GoabCallout>
      </div>
    </ComponentContent>
  );
}
