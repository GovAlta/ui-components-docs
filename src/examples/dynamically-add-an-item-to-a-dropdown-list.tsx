import {
  GoabButton,
  GoabButtonGroup,
  GoabContainer,
  GoabDivider,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabInput,
  GoabRadioGroup,
  GoabRadioItem,
} from "@abgov/react-components";
import {
  GoabDropdownItemMountType,
  GoabDropdownOnChangeDetail,
  GoabInputOnChangeDetail,
  GoabRadioGroupOnChangeDetail,
} from "@abgov/ui-components-common";
import { useContext, useState } from "react";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

type Task = {
  value: string;
  label: string;
  mount: GoabDropdownItemMountType;
};

export const DynamicallyAddAnItemToADropdownList = () => {
  const { version } = useContext(LanguageVersionContext);
  const [taskError, setTaskError] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");
  const [mountType, setNewMountType] = useState<string>("append");
  const DEFAULT_TASKS: Task[] = [
    { label: "Finish Report", value: "finish-report", mount: "append" },
    { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
    { label: "Reply Emails", value: "reply-emails", mount: "append" },
  ];
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);
  const [isReset, setIsReset] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<string>("");

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
      mount: mountType as GoabDropdownItemMountType,
    };
    setTasks([...tasks, task]);
    setIsReset(false);
  }

  function reset() {
    setTasks(DEFAULT_TASKS);
    setNewMountType("append");
    setNewTask("");
    setSelectedTask("");
    setTaskError(false);
    setIsReset(true);
  }

  return (
    <>
      <GoabContainer mt="none" mb="none">
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
                width: isReset ? "320px" : "auto",
              }}>
              <GoabDropdown
                key={tasks.length}
                onChange={(event: GoabDropdownOnChangeDetail) =>
                  setSelectedTask(event.value as string)
                }
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

      {/***************** Angular code ***********/}
      {version === "old" && (
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
                    default_tasks: Task[] = [
                      { label: "Finish Report", value: "finish-report", mount: "append" },
                      { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
                      { label: "Reply Emails", value: "reply-emails", mount: "append" },
                    ];
                    tasks: Task[] = this.default_tasks;
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
                      this.tasks = [...this.default_tasks];
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
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
                  interface Task {
                    value: string;
                    label: string;
                    mount: GoabDropdownItemMountType;
                  }    
                         
                  export class SomeComponent {
                    default_tasks: Task[] = [
                      { label: "Finish Report", value: "finish-report", mount: "append" },
                      { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
                      { label: "Reply Emails", value: "reply-emails", mount: "append" },
                    ];
                    tasks: Task[] = this.default_tasks;
                    newTask = "";
                    mountType: GoabDropdownItemMountType = "append";
                    selectedTask = "";
                    taskError = false;
                    renderTrigger = true;
                    
                    onMountTypeChange(event: GoabDropdownOnChangeDetail): void {
                      this.mountType = event.value as GoabDropdownItemMountType;
                    }
                    onNewTaskChange(event: GoabInputOnChangeDetail): void {
                      this.newTask = event.value;
                      this.taskError = false;
                    }
                    onSelectedTaskChange(event: GoabDropdownOnChangeDetail): void {
                      this.selectedTask = event.value as string;
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
                      this.tasks = [...this.default_tasks];
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
      )}

      {version === "old" && (
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
                        @for (task of tasks; track trackByFn($index, task)) {
                          <goa-dropdown-item
                            [value]="task.value"
                            [mount]="task.mount"
                            [label]="task.label">
                          </goa-dropdown-item>
                        }
                      </goa-dropdown>
                    </ng-container>
                  </goa-form-item>
                </div>
              </goa-container>
            `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
              <goab-container mt="m" mb="none">
                <div style="padding: 40px;">
                  <goab-form-item
                    requirement="required"
                    mt="m"
                    label="Name of item"
                    [error]="taskError ? 'Please enter item name' : undefined"
                    helpText="Add an item to the dropdown list below">
                      <goab-input
                        name="item"
                        placeholder=""
                        [value]="newTask"
                        (onChange)="onNewTaskChange($event)">
                      </goab-input>
                  </goab-form-item>
                  <goab-form-item mt="m" label="Add to">
                    <goab-radio-group
                      name="mountType"
                      [value]="mountType"
                      orientation="horizontal"
                      (onChange)="onMountTypeChange($event)">
                      <goab-radio-item value="prepend" label="Start"></goab-radio-item>
                      <goab-radio-item value="append" label="End"></goab-radio-item>
                    </goab-radio-group>
                  </goab-form-item>
                <goab-button-group alignment="start" gap="relaxed">
                  <goab-button mt="m" type="primary" (onClick)="addTask()">
                    Add new item
                  </goab-button>
                  <goab-button mt="m" type="tertiary" (onClick)="reset()">
                    Reset list
                  </goab-button>
                </goab-button-group>
            <goab-divider mt="m"></goab-divider>
              <goab-form-item mt="m" label="All items">
                <ng-container *ngIf="renderTrigger">
                  <goab-dropdown
                    [value]="selectedTask"
                    name="selectedTask"
                    (onChange)="onSelectedTaskChange($event)">
                    @for (task of tasks; track trackByFn($index, task)) {
                      <goab-dropdown-item
                        [value]="task.value"
                        [mountType]="task.mount"
                        [label]="task.label">
                      </goab-dropdown-item>
                    }
                  </goab-dropdown>
                </ng-container>
              </goab-form-item>
          </div>
        </goab-container>`}
        />
      )}

      {/**************** React code **********************/}

      {version === "old" && (
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
              const DEFAULT_TASKS: Task[] = [
                  { label: "Finish Report", value: "finish-report", mount: "append" },
                  { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
                  { label: "Reply Emails", value: "reply-emails", mount: "append" }
              ];
              const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);
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
                setTasks(DEFAULT_TASKS);
                setNewMountType("append");
                setNewTask("");
                setSelectedTask("");
                setTaskError(false);
              }                
            `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
              type Task = {
                value: string;
                label: string;
                mount: GoabDropdownItemMountType;
              };
              const DEFAULT_TASKS: Task[] = [
                  { label: "Finish Report", value: "finish-report", mount: "append" },
                  { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
                  { label: "Reply Emails", value: "reply-emails", mount: "append" }
              ];
              const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);
              const [newTask, setNewTask] = useState<string>("");
              const [mountType, setNewMountType] = useState<string>("append");
              const [selectedTask, setSelectedTask] = useState<string>("");
              const [taskError, setTaskError] = useState<boolean>(false);
                
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
              }
              
              function reset() {
                setTasks(DEFAULT_TASKS);
                setNewMountType("append");
                setNewTask("");
                setSelectedTask("");
                setTaskError(false);
              }                
            `}
        />
      )}

      {version === "old" && (
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
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
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
                  </GoabFormItem>
                </div>
              </GoabContainer>
            `}
        />
      )}
    </>
  );
};

export default DynamicallyAddAnItemToADropdownList;