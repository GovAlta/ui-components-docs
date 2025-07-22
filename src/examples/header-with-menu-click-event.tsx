import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabAppHeader, GoabAppHeaderMenu, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const HeaderWithMenuClickEvent = () => {
  const {version} = useContext(LanguageVersionContext);
  const [deviceWidth, setDeviceWidth] = useState("5000");
  function handleMenuClick() {
    alert("Menu not being displayed and you can do anything");
  }
  return (
    <Sandbox fullWidth skipRender>
      <GoabRadioGroup
        name="device"
        value={deviceWidth}
        onChange={(event: GoabRadioGroupOnChangeDetail) => setDeviceWidth(event.value)}>
        <GoabRadioItem value="600" label="Desktop"></GoabRadioItem>
        <GoabRadioItem value="5000" label="Mobile"></GoabRadioItem>
      </GoabRadioGroup>
      <GoabAppHeader
        url="https://example.com"
        heading="Design System"
        onMenuClick={handleMenuClick}
        fullMenuBreakpoint={+deviceWidth}>
        <GoabAppHeaderMenu heading="Search" leadingIcon="search">
          <a href="#">Cases</a>
          <a href="#">Payments</a>
          <a href="#">Outstanding</a>
        </GoabAppHeaderMenu>
        <a href="#">Support</a>
        <a href="#" className="interactive">
          Sign in
        </a>
      </GoabAppHeader>

      {/*Angular code*/}
      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags={"angular"}
          allowCopy={true}
          code={`
                export class MyComponent {
                  deviceWidth = '5000';
                  changeDeviceWidth(event: Event) {
                    this.deviceWidth = (event as CustomEvent).detail.value;
                  }
                  
                  handleMenuClick() {
                    alert("Menu not being displayed and you can do anything");
                  }
                }
              `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags={"angular"}
          allowCopy={true}
          code={`
                export class MyComponent {
                  deviceWidth = '5000';
                  changeDeviceWidth(event: GoabRadioGroupOnChangeDetail) {
                    this.deviceWidth = event.value;
                  }
                  handleMenuClick() {
                    alert('Menu not being displayed and you can do anything');
                  }
                }
              `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                 <goa-radio-group name="device" value="deviceWidth" (_change)="changeDeviceWidth($event)">
                  <goa-radio-item value="600" label="Desktop"></goa-radio-item>
                  <goa-radio-item value="5000" label="Mobile"></goa-radio-item>
                 </goa-radio-group>
                  
                 <goa-app-header url="https://example.com" heading="Design System" [fullmenubreakpoint]="deviceWidth" [hasmenuclickhandler]="true" (_menuClick)="handleMenuClick()">
                  <goa-app-header-menu heading="Search" leadingIcon="search">
                    <a href="#">Cases</a>
                    <a href="#">Payments</a>
                    <a href="#">Outstanding</a>
                  </goa-app-header-menu>
                  <a href="#">Support</a>
                  <a href="#" className="interactive">Sign in</a>
                </goa-app-header>
              `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
                <goab-radio-group
                  name="device"
                  [value]="deviceWidth"
                  (onChange)="changeDeviceWidth($event)"
                >
                  <goab-radio-item value="600" label="Desktop"></goab-radio-item>
                  <goab-radio-item value="5000" label="Mobile"></goab-radio-item>
                </goab-radio-group>

                <goab-app-header
                  url="https://example.com"
                  heading="Design System"
                  [fullMenuBreakpoint]="+deviceWidth"
                  (onMenuClick)="handleMenuClick()"
                >
                  <goab-app-header-menu heading="Search" leadingIcon="search">
                    <a href="#">Cases</a>
                    <a href="#">Payments</a>
                    <a href="#">Outstanding</a>
                  </goab-app-header-menu>
                  <a href="#">Support</a>
                  <a href="#" class="interactive">Sign in</a>
                </goab-app-header>
              `}
        />
      )}

      {/*React code*/}
      <CodeSnippet
        lang="typescript"
        tags={"react"}
        allowCopy={true}
        code={`
                const [deviceWidth, setDeviceWidth] = useState("5000");
                function handleMenuClick() {
                  alert("Menu not being displayed and you can do anything");
                }
              `}
      />

      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
                  <GoARadioGroup name="device" value={deviceWidth} onChange={(_, value) => setDeviceWidth(value)}>
                    <GoARadioItem value="600" label="Desktop"></GoARadioItem>
                    <GoARadioItem value="5000" label="Mobile"></GoARadioItem>
                  </GoARadioGroup>
                  
                  <GoAAppHeader
                    url="https://example.com"
                    heading="Design System"
                    onMenuClick={handleMenuClick}
                    fullMenuBreakpoint={+deviceWidth}>
                    <GoAAppHeaderMenu heading="Search" leadingIcon="search">
                      <a href="#">Cases</a>
                      <a href="#">Payments</a>
                      <a href="#">Outstanding</a>
                    </GoAAppHeaderMenu>
                    <a href="#">Support</a>
                    <a href="#" className="interactive">Sign in</a>
                  </GoAAppHeader>
              `}
        />
      )}
      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
                  <GoabRadioGroup name="device" value={deviceWidth} onChange={(event: GoabRadioGroupOnChangeDetail) => setDeviceWidth(event.value)}>
                    <GoabRadioItem value="600" label="Desktop"></GoabRadioItem>
                    <GoabRadioItem value="5000" label="Mobile"></GoabRadioItem>
                  </GoabRadioGroup>
                  
                  <GoabAppHeader
                    url="https://example.com"
                    heading="Design System"
                    onMenuClick={handleMenuClick}
                    fullMenuBreakpoint={+deviceWidth}>
                    <GoabAppHeaderMenu heading="Search" leadingIcon="search">
                      <a href="#">Cases</a>
                      <a href="#">Payments</a>
                      <a href="#">Outstanding</a>
                    </GoabAppHeaderMenu>
                    <a href="#">Support</a>
                    <a href="#" class="interactive">Sign in</a>
                  </GoabAppHeader>
              `}
        />
      )}
    </Sandbox>
  )
}

export default HeaderWithMenuClickEvent;
