import { useContext, useState } from "react";
import {
  DropdownItemMountType,
  GoAButton,
  GoAContainer,
  GoADivider,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
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

  return (
    <>
      <h2 id="component-examples" className="hidden" aria-hidden="true">
        Examples
      </h2>
      <h3 id="component-example-with-mount-type">Dynamic options</h3>
      <GoAContainer mt="m" mb="none">
        <div style={{ padding: "40px" }}>
          <GoAFormItem
            requirement="required"
            mt="m"
            label="New task"
            error={taskError ? "Please enter a task name" : undefined}
            helpText="If you couldn't find a task you want to work today, you can add a new task.">
            <GoAInput
              onChange={(_, value: string) => setNewTask(value)}
              name="task"
              placeholder="Ex: Schedule a meeting"
              value={newTask}></GoAInput>
          </GoAFormItem>

          <GoAFormItem mt="m" label="Order">
            <GoADropdown
              onChange={(_, values: string[] | string) => onMountTypeChange(values as string)}
              name="mountType"
              value={mountType}>
              <GoADropdownItem
                value={"append"}
                label="Add to the end of the list"></GoADropdownItem>
              <GoADropdownItem
                value={"prepend"}
                label="Add to the beginning of the list"></GoADropdownItem>
              <GoADropdownItem value={"reset"} label="Remove other tasks (reset)"></GoADropdownItem>
            </GoADropdown>
          </GoAFormItem>
          <GoAButton mt="m" type="primary" onClick={addTask}>
            Add task
          </GoAButton>

          <GoADivider mt="m"></GoADivider>
          <GoAFormItem
            mt="m"
            label="Select a task to work today">
            <GoADropdown
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
              type Task = {
                value: string;
                label: string;
                mount: string;
              };
              
              export class SomeComponent {
                tasks: Task[] = [
                  { label: "Finish Report", value: "finish-report", mount: "append" },
                  { label: "Attend Meeting", value: "attend-meeting", mount: "append" },
                  { label: "Reply Emails", value: "reply-emails", mount: "append" }
                ];
                newTask = "";
                mountType = "append";
                selectedTask = "";
                taskErrorMessage = "";
                
                onMountTypeChange(event: Event) {
                  this.mountType = (event as CustomEvent).detail.value;
                }
                
                onNewTaskChange(event: Event) {
                  this.newTask = (event as CustomEvent).detail.value;
                }
                
                onSelectedTaskChange(event: Event) {
                  this.selectedTask = (event as CustomEvent).detail.value;
                }
                
                addTask() {
                  if (this.newTask === "") {
                    this.taskErrorMessage = "Please enter a task name";
                    return;
                  }
                  this.taskErrorMessage = "";
                  const task: Task = {
                    label: this.newTask,
                    value: this.newTask.toLowerCase().replace(' ', '-'),
                    mount: this.mountType
                  };
                  this.tasks.push(task);
                }
              }`}
          />
          <CodeSnippet
            lang="html"
            tags="angular"
            allowCopy={true}
            code={`
              <goa-form-item mt="m" label="New task"
                requirement="required"
                [error]="taskErrorMessage"
               helpText="If you couldn't find a task you want to work today, you can add a new task.">
                <goa-input name="task" placeholder="Ex: Schedule a meeting"
                  [value]="newTask"
                  (_change)="onNewTaskChange($event)"/>
              </goa-form-item>

              <goa-form-item mt="m" label="Order">
                <goa-dropdown name="mountType" [value]="mountType"
                  (_change)="onMountTypeChange($event)">
                    <goa-dropdown-item value="append" label="Add to the end of the list"></goa-dropdown-item>
                    <goa-dropdown-item value="prepend" label="Add to the beginning of the list"></goa-dropdown-item>
                    <goa-dropdown-item value="reset" label="Remove other tasks (reset)"></goa-dropdown-item>
                </goa-dropdown>
              </goa-form-item>

              <goa-button mt="m" type="primary" (_click)="addTask()">Add task</goa-button>
              <goa-divider mt="m"></goa-divider>

              <goa-form-item mt="m" label="Select a task to work today">
                <goa-dropdown  [value]="selectedTask" name="selectedTask"
                  (_change)="onSelectedTaskChange($event)">
                  <goa-dropdown-item *ngFor="let task of tasks"
                    [value]="task.value"
                    [mount]="task.mount"
                    [label]="task.label">
                  </goa-dropdown-item>
                </goa-dropdown>
              </goa-form-item>
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
            `}
          />

          <CodeSnippet
            lang="html"
            tags="react"
            allowCopy={true}
            code={`
              <GoAFormItem mt="m" label="New task" requirement="required"
                error={taskError ? "Please enter a task name" : undefined}
                helpText="If you couldn't find a task you want to work today, you can add a new task.">
                <GoAInput name="task"
                  placeholder="Ex: Schedule a meeting"
                  value={newTask}
                  onChange={(_, value: string) => setNewTask(value)}
                ></GoAInput>
              </GoAFormItem>
              
              <GoAFormItem mt="m" label="Order">
                <GoADropdown
                  onChange={(_, values: string[] | string) => onMountTypeChange(values as string)}
                  name="mountType"
                  value={mountType}>
                  <GoADropdownItem value={"append"} label="Add to the end of the list"></GoADropdownItem>
                  <GoADropdownItem value={"prepend"} label="Add to the beginning of the list"></GoADropdownItem>
                  <GoADropdownItem value={"reset"} label="Remove other tasks (reset)"></GoADropdownItem>
                </GoADropdown>
              </GoAFormItem>
              
              <GoAButton mt="m" type="primary" onClick={addTask}>
                Add task
              </GoAButton>

              <GoADivider mt="m"></GoADivider>
              <GoAFormItem mt="m" label="Select a task to work today">
                <GoADropdown onChange={(_, values: string[] | string) => setSelectedTask(values as string)}
                  value={selectedTask}
                  name="selectedTask">
                  {tasks.map(task => (
                    <GoADropdownItem key={task.value} value={task.value} mountType={task.mount} label={task.label}></GoADropdownItem>
              ))}
            </GoADropdown>
          </GoAFormItem>
            `}
          />
        </>
      )}
    </>
  );
};
