import {
  GoabContainer,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
} from "@abgov/react-components";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";
import { useContext, useState } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const DropdownChangeItemExample = () => {
  const { version } = useContext(LanguageVersionContext);
  const [children, setChildren] = useState<string[]>([]);
  const parents = ["All", "Big", "Small"];
  const childrenAll = ["Bus", "Elephant", "Key", "Pen", "Watch", "Truck"];
  const childrenBig = ["Elephant", "Truck", "Bus"];
  const childrenSmall = ["Key", "Pen", "Watch"];

  const loadSchemas = (_name: string, values: string[] | string) => {
    if (typeof values === "string") {
      if (values === "All") setChildren(childrenAll);
      else if (values === "Big") setChildren(childrenBig);
      else setChildren(childrenSmall);
    }
  };

  const log = () => {
    console.log("Children Changed");
  };
  return (
    <>
      <GoabContainer mt="none" mb="none">
        <div style={{ padding: "40px" }}>
          <GoabFormItem
            label="Size"
            requirement="optional"
            helpText="Choose the type to change the list below"
          >
            <GoabDropdown
              name="parent"
              placeholder="Select a value"
              onChange={(event: GoabDropdownOnChangeDetail) =>
                loadSchemas(event.name as string, event.value as string)
              }
            >
              {parents.map(parent => (
                <GoabDropdownItem key={parent} value={parent} label={parent} />
              ))}
            </GoabDropdown>
          </GoabFormItem>
          <GoabFormItem label="Items" requirement="optional" mt="l">
            <GoabDropdown name="children" placeholder="Select a value" onChange={log}>
              {" "}
              {children.map((child, _index) => (
                <GoabDropdownItem
                  key={crypto.randomUUID()}
                  value={child}
                  label={child}
                  mountType={"reset"}
                />
              ))}
            </GoabDropdown>
          </GoabFormItem>
        </div>
      </GoabContainer>

      <CodeSnippet
        lang="typescript"
        tags="react"
        allowCopy={true}
        code={`
                const parents = ["All", "Big", "Small"];
                const childrenAll = ["Bus", "Elephant", "Key", "Pen", "Watch", "Truck"];
                const childrenBig = ["Elephant", "Truck", "Bus"];
                const childrenSmall = ["Key", "Pen", "Watch"];
                const [children, setChildren] = useState<string[]>([]);

                const loadSchemas = (name: string, values: string[] | string) => {
                  if (typeof values === "string") {
                    if (values === "All") setChildren(childrenAll);
                    else if (values === "Big") setChildren(childrenBig);
                    else setChildren(childrenSmall);
                  }
                };

                const log = () => {
                  console.log("Children Changed");
                };
            `}
      />

      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
              <GoAFormItem label="Parent" requirement="optional" helpText="Choose the type to change the list below">
                <GoADropdown name="parent" placeholder="Select a value" 
                  onChange={loadSchemas}>
                  {parents.map((parent) => (
                    <GoADropdownItem key={parent} value={parent} label={parent} />
                  ))}
                </GoADropdown> 
              </GoAFormItem>
              <GoAFormItem label="Children" requirement="optional">
                <GoADropdown name="children" placeholder="Select a value" onChange={log}>
                  {" "}
                  {children.map((child, index) => (
                    <GoADropdownItem
                      key={crypto.randomUUID()}
                      value={child}
                      label={child}
                      mountType={"reset"}
                    />
                  ))}
                </GoADropdown>
              </GoAFormItem>
            `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
              <GoabFormItem
              label="Size"
              requirement="optional"
              helpText="Choose the type to change the list below">
                <GoabDropdown name="parent" placeholder="Select a value"
                            onChange={(event: GoabDropdownOnChangeDetail) => loadSchemas(event.name as string, event.value as string)}>
                {parents.map(parent => (
                    <GoabDropdownItem key={parent} value={parent} label={parent} />
                ))}
              </GoabDropdown>
            </GoabFormItem>
            <GoabFormItem label="Items" requirement="optional" mt="l">
              <GoabDropdown name="children" placeholder="Select a value" onChange={log}>
                {" "}
                {children.map((child, _index) => (
                  <GoabDropdownItem
                    key={crypto.randomUUID()}
                    value={child}
                    label={child}
                    mountType={"reset"}
                  />
                ))}
              </GoabDropdown>
            </GoabFormItem>
            `}
        />
      )}

      <CodeSnippet
        lang="typescript"
        tags="angular"
        allowCopy={true}
        code={`
              export class DropdownComponent {
                changeForm = new FormGroup({
                  parentDropdown: new FormControl(""),
                  childDropdown: new FormControl(""),
                });
                parents = ["All", "Big", "Small"];
                children = [""];

                childrenAll = ["Bus", "Elephant", "Key", "Pen", "Watch", "Truck"];
                childrenBig = ["Elephant", "Truck", "Bus"];
                childrenSmall = ["Key", "Pen", "Watch"];

                ngOnInit() {
                  this.onChange();
                }

                onChange() {
                  this.changeForm.get("parentDropdown")?.valueChanges
                  .subscribe((value) => {
                    if (value === "All") this.children = this.childrenAll;
                    else if (value === "Big") this.children = this.childrenBig;
                    else this.children = this.childrenSmall;
                  });
                }

                generateUniqueKey(index: number, item: string): string {
                  return \`$\{item}_$\{index}_$\{Math.random()}\`;
                }
              }
            `}
      />

      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
              <div [formGroup]="changeForm">
                <goa-form-item label="Size" requirement="optional" helptext="Choose the type to change the list below">
                  <goa-dropdown goaValue formControlName="parentDropdown" 
                    placeholder="Select a value" name="parent">
                    <goa-dropdown-item *ngFor="let parent of parents" 
                        [value]="parent" [label]="parent" />
                  </goa-dropdown>
                </goa-form-item>
                <goa-form-item label="Items" requirement="optional">
                  <goa-dropdown formControlName="childDropdown" 
                      placeholder="Select a value" goaValue name="children">
                    <ng-container *ngIf="children.length > 0">
                    <goa-dropdown-item
                      *ngFor="let child of children; trackBy: generateUniqueKey"
                      [value]="child"
                      [label]="child"
                      [mount]="'reset'"
                    />
                  </ng-container>
                  </goa-dropdown>
                </goa-form-item>
              </div>
            `}
        />
      )}
      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
              <div [formGroup]="changeForm">
                <goab-form-item label="Size" requirement="optional" helpText="Choose the type to change the list below">
                  <goab-dropdown formControlName="parentDropdown"
                      placeholder="Select a value" name="parent">
                    <goab-dropdown-item *ngFor="let parent of parents"
                         [value]="parent" [label]="parent" />
                  </goab-dropdown>
                </goab-form-item>
                <goab-form-item label="Items" requirement="optional">
                  <goab-dropdown formControlName="childDropdown"
                    placeholder="Select a value" name="children">
                      <ng-container *ngIf="children.length > 0">
                        <goab-dropdown-item
                          *ngFor="let child of children; trackBy: generateUniqueKey"
                          [value]="child"
                          [label]="child"
                          [mountType]="'reset'"
                        />
                      </ng-container>
                  </goab-dropdown>
                </goab-form-item>
              </div>
            `}
        />
      )}
    </>
  );
};
