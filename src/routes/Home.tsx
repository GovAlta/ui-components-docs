import { AppHeader } from "@components/app-header/AppHeader.tsx";
import { GoAOneColumnLayout, GoAPageBlock } from "@abgov/react-components";
import { AppFooter } from "@components/app-footer/AppFooter.tsx";

export function Home() {
  return (
    <GoAOneColumnLayout>
      <section slot="header">
        <AppHeader />
      </section>
      <GoAPageBlock width="704px"></GoAPageBlock>
      <section slot="footer">
        <AppFooter />
      </section>
    </GoAOneColumnLayout>
  );
}

export default Home;
