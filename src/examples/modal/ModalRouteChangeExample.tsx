import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabButton, GoabButtonGroup, GoabModal } from "@abgov/react-components";
import { useContext, useState } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";
import { useNavigate } from "react-router-dom";

export const ModalRouteChangeExample = () => {
  const {version} = useContext(LanguageVersionContext);
  const [onRouteChangeModalOpen, setOnRouteChangeModalOpen] = useState<boolean>();
  const navigate = useNavigate();

  return (
      <Sandbox skipRender>

        {/*Angular code*/}
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  import { Router } from "@angular/router";
                  export class SomeOtherComponent {
                    open = false;
                    constructor(private router: Router) {}
                    
                    onOpen() {
                      this.open = true;
                    }
                    onClose() {
                      this.open = false;
                    }
                    onChangeRoute() {
                      this.open = false;
                       // setTimeout will allow any modal transitions to be run
                       setTimeout(() => this.router.navigate(["/components"]), 0)
                    }
                  }
                `}
        />

        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goa-button (_click)="onOpen();">Open</goa-button>
                  <goa-modal [open]="open" role="alertdialog" heading="Are you sure you want to change route?">
                    <div slot="actions">
                      <goa-button-group alignment="end">
                        <goa-button type="secondary" (_click)="onClose()">Cancel</goa-button>
                        <goa-button type="primary" (_click)="onChangeRoute()">Change route</goa-button>
                      </goa-button-group>
                    </div>
                  </goa-modal>
                `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  <goab-button (onClick)="onOpen();">Open</goab-button>
                  <goab-modal [open]="open" role="alertdialog" heading="Are you sure you want to change route?" [actions]="actions">
                    <ng-template #actions>
                      <goab-button-group alignment="end">
                        <goab-button type="secondary" (onClick)="onClose()">Cancel</goab-button>
                        <goab-button type="primary" (onClick)="onChangeRoute()">Change route</goab-button>
                      </goab-button-group>
                    </ng-template>
                  </goab-modal>
                `}
        />}

        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`import { useNavigate } from "react-router-dom";`}
        />
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            const navigate = useNavigate();
            const [open, setOpen] = useState(false);
          `}
        />

        {version === "old" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoAButton onClick={() => setOpen(true)}>Open</GoAButton>
                  <GoAModal
                    heading="Are you sure you want to change route?"
                    open={open}
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoAButtonGroup alignment="end">
                        <GoAButton type="secondary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoAButton>
                        <GoAButton
                          onClick={() => {
                            setOpen(false);
                            // setTimeout will allow any modal transitions to be run
                            // setTimeout(() => navigate("/some-path"), 300) }
                            navigate("/components")
                        }}>Change route</GoAButton>
                      </GoAButtonGroup>
                    }
                  ></GoAModal>
                `}
        />}

        {version === "new" && <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
                  <GoabButton onClick={() => setOpen(true)}>Open</GoabButton>
                  <GoabModal
                    heading="Are you sure you want to change route?"
                    open={open}
                    role="alertdialog"
                    onClose={() => setOpen(false)}
                    actions={
                      <GoabButtonGroup alignment="end">
                        <GoabButton type="secondary" onClick={() => setOpen(false)}>
                          Cancel
                        </GoabButton>
                        <GoabButton
                          onClick={() => {
                            setOpen(false);
                            // setTimeout will allow any modal transitions to be run
                            // setTimeout(() => navigate("/some-path"), 300) }
                            navigate("/components")
                        }}>Change route</GoabButton>
                      </GoabButtonGroup>
                    }
                  ></GoabModal>
                `}
        />}

        <GoabButton onClick={() => setOnRouteChangeModalOpen(true)}>Open</GoabButton>
        <GoabModal
          heading="Are you sure you want to change route?"
          open={onRouteChangeModalOpen}
          onClose={() => setOnRouteChangeModalOpen(false)}
          actions={
            <GoabButtonGroup alignment="end">
              <GoabButton type="secondary" onClick={() => setOnRouteChangeModalOpen(false)}>
                Cancel
              </GoabButton>
              <GoabButton
                type="primary"
                onClick={() => {
                  setOnRouteChangeModalOpen(false);
                  navigate("/components");
                }}>
                Change route
              </GoabButton>
            </GoabButtonGroup>
          }></GoabModal>
      </Sandbox>
  )
}
