import {
  GoAAppFooter,
  GoAAppHeader,
  GoABadge,
  GoAGrid,
  GoAMicrositeHeader,
  GoAOneColumnLayout,
  GoAPageBlock,
  GoASkeleton,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import {Sandbox} from "@components/sandbox";
import Browser from "@components/browser/Browser";

export default function LayoutPage() {
  return (
    <>
      <h1>Layout</h1>
      <h3>
        A structural template that supports consistency across applications by defining visual grids, spacing, and sections.
      </h3>
      <GoATabs>
        <GoATab heading="Code examples">
          <h3>Basic page layout</h3>
          <Sandbox fullWidth allow={["Browser"]}>
            <Browser ignore>
            <GoAOneColumnLayout>
              <section slot="header">
                <GoAMicrositeHeader type="alpha" version="UAT" />
                <GoAAppHeader url="/" heading="Design System">
                  <a href="/login">Sign in</a>
                </GoAAppHeader>
              </section>
              <GoAPageBlock width="704px">
                <p>
                  <GoASkeleton type="header" size={4} />
                  <GoASkeleton type="text" size={1} />
                </p>
                <p>
                  <GoASkeleton type="header" size={4} />
                  <GoASkeleton type="text" size={1} />
                </p>
                <GoAGrid minChildWidth="30ch">
                  <GoASkeleton type="card" size={2} />
                  <GoASkeleton type="card" size={2} />
                </GoAGrid>
              </GoAPageBlock>
              <section slot="footer">
                <GoAAppFooter />
              </section>
            </GoAOneColumnLayout>
            </Browser>
          </Sandbox>
        </GoATab>

        <GoATab
          heading={
            <>
              Design guidelines
              <GoABadge type="information" content="In progress" />
            </>
          }></GoATab>
      </GoATabs>
    </>
  );
}
