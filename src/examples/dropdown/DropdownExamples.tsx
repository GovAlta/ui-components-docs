import { useContext, useState } from "react";
import {
  DropdownItemMountType,
  GoAButton,
  GoAButtonGroup,
  GoAContainer,
  GoADivider,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
  GoARadioGroup,
  GoARadioItem,
} from "@abgov/react-components";
import { LanguageContext } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

type Task = {
  value: string;
  label: string;
  mount: DropdownItemMountType;
};

export const DropdownExamples = () => {
  const language = useContext(LanguageContext);
  const [tasks, setTasks] = useState<Task[]>([
    { label: "Finish Report", value: "finish-report", mount: "append" },
    { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
    { label: "Reply Emails", value: "reply-emails", mount: "append" },
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

  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-with-mount-type">Dynamically add an item to a dropdown list</h3>
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
              const language = useContext(LanguageContext);
              const [tasks, setTasks] = useState<Task[]>([
                { label: "Finish Report", value: "finish-report", mount: "append" },
                { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
                { label: "Reply Emails", value: "reply-emails", mount: "append" },
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
                      onChange={(_, values: string[] | string) 
                        => setSelectedTask(values as string)}
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
    </>
  );
};
