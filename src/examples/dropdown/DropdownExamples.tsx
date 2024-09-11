import { useContext, useState } from "react";
import {
  GoabContainer, GoabFormItem, GoabInput, GoabRadioGroup,
  GoabButton,
  GoabButtonGroup,
  GoabDivider,
  GoabDropdown,
  GoabDropdownItem,
  GoabRadioItem
} from "@abgov/react-components";
import { LanguageContext } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import {
  GoabDropdownItemMountType, GoabDropdownOnChangeDetail,
  GoabInputOnChangeDetail, GoabRadioGroupOnChangeDetail
} from "@abgov/ui-components-common";

type Task = {
  value: string;
  label: string;
  mount: GoabDropdownItemMountType;
};

export const DropdownExamples = () => {
  const language = useContext(LanguageContext);
  const [tasks, setTasks] = useState<Task[]>([
    { label: "Finish Report", value: "finish-report", mount: "append" },
    { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
    { label: "Reply Emails", value: "reply-emails", mount: "append" }
  ]);
  const [newTask, setNewTask] = useState<string>("");
  const [mountType, setNewMountType] = useState<string>("append");
  const [selectedTask, setSelectedTask] = useState<string>("");
  const [taskError, setTaskError] = useState<boolean>(false);
  const [isReset, setIsReset] = useState<boolean>(false);

  function onMountTypeChange(value: string | undefined) {
    setNewMountType(value as string);
  }

  function addTask() {
    if (newTask === "") {
      setTaskError(true);
      return;
    }
    setTaskError(false);

    const task = {
      label: newTask,
      value: newTask.toLowerCase().replace(" ", "-"),
      mount: mountType as GoabDropdownItemMountType
    };
    setTasks([...tasks, task]);
    setIsReset(false);
  }

  function reset() {
    setTasks([]);
    setNewMountType("append");
    setNewTask("");
    setSelectedTask("");
    setTaskError(false);
    setIsReset(true);
  }

  // ------------------------------------------------------------------
  // Parent child edge case
  // ------------------------------------------------------------------
  const parents = ["All", "Big", "Small"];
  const childrenAll = ["Bus", "Elephant", "Key", "Pen", "Watch", "Truck"];
  const childrenBig = ["Elephant", "Truck", "Bus"];
  const childrenSmall = ["Key", "Pen", "Watch"];
  const [children, setChildren] = useState<string[]>([]);

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
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-with-mount-type">Dynamic options</h3>
      <GoabContainer mt="m" mb="none">
        <h3 id="component-example-with-mount-type">Dynamically add an item to a dropdown list</h3>
        <GoabContainer mt="m" mb="none">
          <div style={{ padding: "40px" }}>
            <GoabFormItem
              requirement="required"
              mt="m"
              label="Name of item"
              error={taskError ? "Please enter item name" : undefined}
              helpText="Add an item to the dropdown list below">
              <GoabInput
                onChange={(event: GoabInputOnChangeDetail) => setNewTask(event.value)}
                name="item"
                placeholder=""
                value={newTask}></GoabInput>
            </GoabFormItem>

            <GoabFormItem mt="m" label="Add to">
              <GoabRadioGroup
                name="mountType"
                onChange={(event: GoabRadioGroupOnChangeDetail) => onMountTypeChange(event.value)}
                value={mountType}
                orientation="horizontal">
                <GoabRadioItem value="prepend" label="Start" />
                <GoabRadioItem value="append" label="End" />
              </GoabRadioGroup>
            </GoabFormItem>

            <GoabButtonGroup alignment={"start"} gap="relaxed">
              <GoabButton mt="m" type="primary" onClick={addTask}>
                Add new item
              </GoabButton>
              <GoabButton mt="m" type="tertiary" onClick={reset}>
                Reset list
              </GoabButton>
            </GoabButtonGroup>

            <GoabDivider mt="m"></GoabDivider>

            <GoabFormItem mt="m" label="All items">
              <div
                style={{
                  width: isReset ? "320px" : "auto"
                }}>
                <GoabDropdown
                  key={tasks.length}
                  onChange={(event: GoabDropdownOnChangeDetail) => setSelectedTask(event.value as string)}
                  value={selectedTask}
                  name="selectedTask">
                  {tasks.map(task => (
                    <GoabDropdownItem
                      key={task.value}
                      value={task.value}
                      mountType={task.mount}
                      label={task.label}></GoabDropdownItem>
                  ))}
                </GoabDropdown>
              </div>
            </GoabFormItem>
          </div>
        </GoabContainer>
        {language === "angular" && (
          <>
            <CodeSnippet
              lang="typescript"
              tags="angular"
              allowCopy={true}
              code={`
                  type DropdownItemMountType = "append" | "prepend" | "reset";
                  interface Task {
                    value: string;
                    label: string;
                    mount: DropdownItemMountType;
                  }         
                         
                  export class SomeComponent {
                    tasks: Task[] = [
                      { label: "Finish Report", value: "finish-report", mount: "append" },
                      { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
                      { label: "Reply Emails", value: "reply-emails", mount: "append" },
                    ];
                    newTask = "";
                    mountType: DropdownItemMountType = "append";
                    selectedTask = "";
                    taskError = false;
                    renderTrigger = true;
                    constructor() {}
                    onMountTypeChange(event: Event): void {
                      this.mountType = (event as CustomEvent).detail.value as DropdownItemMountType;
                    }
                    onNewTaskChange(event: Event): void {
                      this.newTask = (event as CustomEvent).detail.value;
                      this.taskError = false;
                    }
                    onSelectedTaskChange(event: Event): void {
                      this.selectedTask = (event as CustomEvent).detail.value;
                    }
                    addTask(): void {
                      if (this.newTask === "") {
                        this.taskError = true;
                        return;
                      }
                      this.taskError = false;
                      const task: Task = {
                        label: this.newTask,
                        value: this.newTask.toLowerCase().replace(" ", "-"),
                        mount: this.mountType,
                      };
                      this.tasks =
                        this.mountType === "prepend" ? [task, ...this.tasks] : [...this.tasks, task];
                      this.newTask = "";
                    }
                    reset(): void {
                      this.newTask = "";
                      this.selectedTask = "";
                      this.taskError = false;
                      this.tasks = [];
                      this.forceRerender();
                    }
                    forceRerender(): void {
                      this.renderTrigger = false;
                      setTimeout(() => {
                        this.renderTrigger = true;
                      }, 0);
                    }
                    trackByFn(index: number, item: Task): string {
                      return item.value;
                    }
                  }`}
            />
            <CodeSnippet
              lang="html"
              tags="angular"
              allowCopy={true}
              code={`
              <goa-container mt="m" mb="none">
                <div style="padding: 40px;">
                  <goa-form-item
                    requirement="required"
                    mt="m"
                    label="Name of item"
                    [error]="taskError ? 'Please enter item name' : undefined"
                    helpText="Add an item to the dropdown list below">
                    <goa-input
                      name="item"
                      placeholder=""
                      [value]="newTask"
                      (_change)="onNewTaskChange($event)">
                    </goa-input>
                  </goa-form-item>
                  <goa-form-item mt="m" label="Add to">
                    <goa-radio-group
                      name="mountType"
                      [value]="mountType"
                      orientation="horizontal"
                      (_change)="onMountTypeChange($event)">
                      <goa-radio-item value="prepend" label="Start"></goa-radio-item>
                      <goa-radio-item value="append" label="End"></goa-radio-item>
                    </goa-radio-group>
                  </goa-form-item>
                  <goa-button-group alignment="start" gap="relaxed">
                    <goa-button mt="m" type="primary" (_click)="addTask()">
                      Add new item
                    </goa-button>
                    <goa-button mt="m" type="tertiary" (_click)="reset()">
                      Reset list
                    </goa-button>
                  </goa-button-group>
                  <goa-divider mt="m"></goa-divider>
                  <goa-form-item mt="m" label="All items">
                    <ng-container *ngIf="renderTrigger">
                      <goa-dropdown
                        [value]="selectedTask"
                        name="selectedTask"
                        (_change)="onSelectedTaskChange($event)">
                        <goa-dropdown-item
                          *ngFor="let task of tasks; trackBy: trackByFn"
                          [value]="task.value"
                          [mount]="task.mount"
                          [label]="task.label">
                        </goa-dropdown-item>
                      </goa-dropdown>
                    </ng-container>
                  </goa-form-item>
                </div>
              </goa-container>
            `}
            />
          </>
        )}
        {language === "react" && (
          <>
            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
              type Task = {
                value: string;
                label: string;
                mount: DropdownItemMountType;
              };
              const [tasks, setTasks] = useState<Task[]>([
                  { label: "Finish Report", value: "finish-report", mount: "append" },
                  { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
                  { label: "Reply Emails", value: "reply-emails", mount: "append" }
              ]);
              const [newTask, setNewTask] = useState<string>("");
              const [mountType, setNewMountType] = useState<string>("append");
              const [selectedTask, setSelectedTask] = useState<string>("");
              const [taskError, setTaskError] = useState<boolean>(false);
                
              function onMountTypeChange(value: string) {
                setNewMountType(value);
              }
              function addTask() {
                if (newTask === "") {
                  setTaskError(true);
                  return;
                }
                setTaskError(false);
                const task = {
                  label: newTask,
                  value: newTask.toLowerCase().replace(" ", "-"),
                  mount: mountType as DropdownItemMountType,
                };
                setTasks([...tasks, task]);
              }
              
              function reset() {
                setTasks([]);
                setNewMountType("append");
                setNewTask("");
                setSelectedTask("");
                setTaskError(false);
              }                
            `}
            />

            <CodeSnippet
              lang="html"
              tags="react"
              allowCopy={true}
              code={`
              <GoAContainer mt="m" mb="none">
                <div style={{ padding: "40px" }}>
                  <GoAFormItem
                    requirement="required"
                    mt="m"
                    label="Name of item"
                    error={taskError ? "Please enter item name" : undefined}
                    helpText="Add an item to the dropdown list below">
                    <GoAInput
                      onChange={(_, value: string) => setNewTask(value)}
                      name="item"
                      placeholder=""
                      value={newTask}></GoAInput>
                  </GoAFormItem>
                  <GoAFormItem mt="m" label="Add to">
                    <GoARadioGroup
                      name="mountType"
                      onChange={(_name, value) => onMountTypeChange(value)}
                      value={mountType}
                      orientation="horizontal">
                      <GoARadioItem value="prepend" label="Start" />
                      <GoARadioItem value="append" label="End" />
                    </GoARadioGroup>
                  </GoAFormItem>
                  <GoAButtonGroup alignment={"start"} gap="relaxed">
                    <GoAButton mt="m" type="primary" onClick={addTask}>
                      Add new item
                    </GoAButton>
                    <GoAButton mt="m" type="tertiary" onClick={reset}>
                      Reset list
                    </GoAButton>
                  </GoAButtonGroup>
                  <GoADivider mt="m"></GoADivider>
                  <GoAFormItem mt="m" label="All items">
                    <GoADropdown
                      key={tasks.length}
                      onChange={(_, values: string[] | string) => setSelectedTask(values as string)}
                      value={selectedTask}
                      name="selectedTask">
                      {tasks.map(task => (
                        <GoADropdownItem
                          key={task.value}
                          value={task.value}
                          mountType={task.mount}
                          label={task.label}></GoADropdownItem>
                      ))}
                    </GoADropdown>
                  </GoAFormItem>
                </div>
              </GoAContainer>
            `}
            />
          </>
        )}

        {/* ---------------------------------------- */}
        {/* Parent child edge case */}
        {/* ---------------------------------------- */}
        <h3 id="component-parent-child-common-items" style={{ marginTop: "48px" }}>
          Dynamically change items in a dropdown
        </h3>
        <GoabContainer>
          <div style={{ padding: "40px" }}>
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
          </div>
        </GoabContainer>

        {language === "react" && (
          <>
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
          </>
        )}

        {language === "angular" && (
          <>
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
          </>
        )}
      </GoabContainer>
    </>
    );
}
