import {Sandbox} from "@components/sandbox";
import Browser from "@components/browser/Browser";
import { ComponentContent } from "@components/component-content/ComponentContent";
import {
  GoabAppFooter,
  GoabAppHeader, GoabBadge, GoabGrid,
  GoabMicrositeHeader,
  GoabOneColumnLayout,
  GoabPageBlock, GoabSkeleton,
  GoabTab,
  GoabTabs
} from "@abgov/react-components";

export default function LayoutPage() {
  return (
    <ComponentContent>
      <h1>Layout</h1>
      <h3>
        A structural template that supports consistency across applications by defining visual grids, spacing, and sections.
      </h3>
      <GoabTabs>
        <GoabTab heading="Code examples">
          <h3>Basic page layout</h3>
          <Sandbox fullWidth allow={["Browser"]}>
            <Browser ignore>
            <GoabOneColumnLayout>
              <section slot="header">
                <GoabMicrositeHeader type="alpha" version="UAT" />
                <GoabAppHeader url="/" heading="Design System">
                  <a href="/login">Sign in</a>
                </GoabAppHeader>
              </section>
              <GoabPageBlock width="704px">
                <p>
                  <GoabSkeleton type="header" size={'4'} />
                  <GoabSkeleton type="text" size={'1'} />
                </p>
                <p>
                  <GoabSkeleton type="header" size={'4'} />
                  <GoabSkeleton type="text" size={'1'} />
                </p>
                <GoabGrid minChildWidth="30ch">
                  <GoabSkeleton type="card" size={'2'} />
                  <GoabSkeleton type="card" size={'2'} />
                </GoabGrid>
              </GoabPageBlock>
              <section slot="footer">
                <GoabAppFooter />
              </section>
            </GoabOneColumnLayout>
            </Browser>
          </Sandbox>
        </GoabTab>

        <GoabTab
          heading={
            <>
              Design guidelines
              <GoabBadge type="information" content="In progress" />
            </>
          }></GoabTab>
      </GoabTabs>
    </ComponentContent>
  );
}
