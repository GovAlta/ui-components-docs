import {Sandbox} from "@components/sandbox";
import Browser from "@components/browser/Browser.tsx";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";
import {
  GoabAppFooter,
  GoabAppHeader, GoabGrid,
  GoabMicrositeHeader,
  GoabOneColumnLayout,
  GoabPageBlock, GoabSkeleton
} from "@abgov/react-components";

export const BasicPageLayout = () => {
  return (
    <ComponentContent>
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
    </ComponentContent>
  );
}

export default BasicPageLayout;
