import { useState } from "react";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import { propsToString } from "@components/sandbox/BaseSerializer"
import {
  GoabFileUploadCard,
  GoabFileUploadInput,
  GoabFileUploadInputProps,
  GoabFormItem,
  GoabTab,
  GoabTabs,
} from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { ComponentContent } from "@components/component-content/ComponentContent";

interface Uploader {
  upload: (url: string | ArrayBuffer) => void;
  abort: () => void;
}

interface Upload {
  file: File;
  uploader: Uploader;
}

class MockUploader implements Uploader {
  private processId?: any;

  public onprogress: (percent: number) => void = (_: number) => { };
  public onabort: () => void = () => { };
  public onfail: (err: string) => void = (_: string) => { };
  public oncomplete: () => void = () => { };

  upload(_url: string | ArrayBuffer) {
    let progress = 0;

    this.processId = setInterval(() => {
      progress += Math.random() * 10;
      this.onprogress(progress);
      if (progress >= 100) {
        this.oncomplete();
        clearInterval(this.processId);
      }
    }, 200);
  }

  abort() {
    clearInterval(this.processId);
    this.onabort();
  }
}

const componentName = "File uploader";
const description = "Help users select and upload a file.";
const category = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/container", name: "Container" },
  { link: "/components/progress-indicator", name: "Progress indicator" }
];
type ComponentPropsType = Omit<GoabFileUploadInputProps, "onSelectFile">;
type CastingType = {
  maxFileSize: string;
  [key: string]: unknown;
};

export default function FileUploaderPage() {
  const [fileUploaderProps, setFileUploaderProps] = useState<ComponentPropsType>({
    maxFileSize: "100MB",
  });

  const [fileUploaderBindings, setFileUploaderBindings] = useState<ComponentBinding[]>([
    {
      label: "Variant",
      type: "list",
      name: "variant",
      options: ["", "dragdrop", "button"],
      defaultValue: "dragdrop",
      value: "",
    },
    {
      label: "Max file size",
      type: "string",
      name: "maxFileSize",
      value: "100MB",
    },
  ]);

  const fileUploadInputProperties: ComponentProperty[] = [
    {
      name: "variant",
      type: "dragdrop | button",
      description: "The variant to be used",
      defaultValue: "dragdrop",
    },
    {
      name: "accept",
      type: "string",
      description: "Mimetype to limit the types of files.",
    },
    {
      name: "maxFileSize",
      lang: "react",
      type: "string",
      description: "Max allowed file size.",
      defaultValue: "5MB",
    },
    {
      name: "maxfilesize",
      lang: "angular",
      type: "string",
      description: "Max allowed file size.",
      defaultValue: "5MB",
    },
    {
      name: "_selectFile",
      lang: "angular",
      required: true,
      type: "(e: {detail: {file: File}}) => void",
      description: "Event fired for each file selected",
    },
    {
      name: "onSelectFile",
      lang: "react",
      required: true,
      type: "(file: File) => void",
      description: "Event fired for each file selected",
    },
  ];

  const fileUploadCardProperties: ComponentProperty[] = [
    {
      name: "filename",
      type: "string",
      required: true,
      description: "Name of the file",
    },
    {
      name: "size",
      type: "number",
      required: true,
      description: "Size (B) of the file",
    },
    {
      name: "type",
      type: "string",
      description: "Type of the file",
    },
    {
      name: "progress",
      type: "number",
      description: "Percent progress of the file upload",
    },
    {
      name: "error",
      type: "string",
      description: "Error message",
    },
    {
      name: "onCancel",
      lang: "react",
      type: "() => void",
      required: true,
      description: "Event fired when a file upload is cancelled",
    },
    {
      name: "_cancel",
      lang: "angular",
      type: "() => void",
      required: true,
      description: "Event fired when a file upload is cancelled",
    },
    {
      name: "onDelete",
      lang: "react",
      type: "() => void",
      required: true,
      description: "Event fired when a file upload is deleted",
    },
    {
      name: "_delete",
      lang: "angular",
      type: "() => void",
      required: true,
      description: "Event fired when a file upload is deleted",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setFileUploaderBindings(bindings);
    setFileUploaderProps(props as CastingType);
  }

  // For file uploader demo
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [progressList, setProgressList] = useState<Record<string, number>>({});

  function uploadFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target) return;
      const url = e.target.result;
      const uploader = new MockUploader();

      setUploads(old => [...old, { file, uploader }]);

      uploader.onabort = () => console.log("Aborting upload");
      uploader.onfail = err => console.log("Upload failed: ", err);
      uploader.oncomplete = () => console.log("File upload complete");
      uploader.onprogress = percent => {
        setProgressList(old => ({ ...old, [file.name]: percent }));
      };
      if (url) {
        uploader.upload(url);
      }
    };
    reader.readAsDataURL(file);
  }

  function deleteFile(upload: Upload) {
    upload.uploader.abort();
    setUploads([...uploads].filter(u => u.file.name !== upload.file.name));
  }

  return (
    <>
      <ComponentHeader name={componentName} category={category} description={description} relatedComponents={relatedComponents} />
      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">

        <GoabTabs>
          <GoabTab heading="Code examples">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={fileUploaderBindings} onChange={onSandboxChange} fullWidth skipRender>

              {/* ******* */}
              {/* Angular */}
              {/* ******* */}

              <CodeSnippet
                lang="typescript"
                tags="angular"
                allowCopy={true}
                code={`
                interface Uploader {
                  upload: (url: string | ArrayBuffer) => void;
                  abort: () => void;
                }
                interface Upload {
                  file: File;
                  uploader: Uploader;
                }
                class MockUploader implements Uploader {
                  public onprogress: (percent: number) => void = (_: number) => {};
                  public onabort: () => void = () => {};
                  public onfail: (err: string) => void = (_: string) => {};
                  public oncomplete: () => void = () => {};
              
                  upload(_url: string | ArrayBuffer) {
                    // implement your logic to upload files
                  }
              
                  abort() {
                   // implement your logic to abort file upload
                  }
                }
              
                class FileUploadComponent {
                  uploads: Upload[] = [];
                  progressList: Record<string, number> = {};
              
                  uploadFile(e: Event) {
                    const reader = new FileReader();
                    const file = (e as CustomEvent).detail.file;
                    reader.onload = (e: ProgressEvent<FileReader>) => {
                      if (!e.target) return;
                      const url = e.target.result;
                      const uploader = new MockUploader();
              
                      this.uploads.push({file, uploader});
              
                      uploader.onabort = () => console.log("Aborting upload");
                      uploader.onfail = err => console.log("Upload failed: ", err);
                      uploader.oncomplete = () => console.log("File upload complete");
                      uploader.onprogress = percent => {
                        this.progressList[file.name] = percent;
                      };
                      if (url) {
                        uploader.upload(url);
                      }
                    };
                    reader.readAsDataURL(file);
                  }
              
                  deleteFile(upload: Upload) {
                    upload.uploader.abort();
                    this.uploads = this.uploads.filter(u => u.file.name !== upload.file.name);
                  }
                }
              `}
              />

              <CodeSnippet
                lang="html"
                tags="angular"
                allowCopy={true}
                code={`
                <goa-form-item label="Upload a file">
                  <goa-file-upload-input (_selectFile)="uploadFile($event)" ${propsToString(fileUploaderProps, "angular")}></goa-file-upload-input>
                  <goa-file-upload-card
                    *ngFor="let upload of uploads; index as i"
                    [type]="upload.file.type"
                    [size]="upload.file.size"
                    [filename]="upload.file.name"
                    [progress]="progressList[upload.file.name]"
                    (_delete)="deleteFile(upload)"
                    (_cancel)="deleteFile(upload)"
                  >
                  </goa-file-upload-card>              
                </goa-form-item>
              `}
              />


              {/* ***** */}
              {/* React */}
              {/* ***** */}

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                const [uploads, setUploads] = useState<Upload[]>([]);
                const [progressList, setProgressList] = useState<Record<string, number>>({});

                function deleteFile(file: Upload) {
                  setUploads((uploadz) => {
                    return uploadz.filter(u => u.name !== file.name);
                  })
                }

                function uploadFile(file: File) {
                  const reader = new FileReader();
                  reader.onload = (e: ProgressEvent<FileReader>) => {
                  if (!e.target) return;
                  const url = e.target.result;
                  const uploader = new MockUploader();

                  setUploads(old => [...old, {file, uploader}]);

                  uploader.onabort = () => console.log("Aborting upload");
                  uploader.onfail = err => console.log("Upload failed: ", err);
                  uploader.oncomplete = () => console.log("File upload complete");
                  uploader.onprogress = percent => {
                    setProgressList(old => ({...old, [file.name]: percent}));
                  };

                  if (url) {
                    uploader.upload(url);
                  }
                }
                reader.readAsDataURL(file);
              `}
              />

              <CodeSnippet
                lang="typescript"
                tags="react"
                allowCopy={true}
                code={`
                <GoAFormItem label="Upload a file">
                  <GoAFileUploadInput onSelectFile={uploadFile} ${propsToString(fileUploaderProps, "react")} />
                  {uploads.map(upload => (
                    <GoAFileUploadCard
                      key={upload.file.name}
                      filename={upload.file.name}
                      type={upload.file.type}
                      size={upload.file.size}
                      progress={progressList[upload.file.name]}
                      onDelete={() => deleteFile(upload)}
                      onCancel={() => deleteFile(upload)}
                    />
                  ))}
                </GoAFormItem>
              `}
              />

              <GoabFormItem label="Upload a file">
                <GoabFileUploadInput onSelectFile={(e) => uploadFile(e.file)} {...fileUploaderProps} />
                {uploads.map(upload => (
                  <GoabFileUploadCard
                    key={upload.file.name}
                    testId={"file-upload-card"}
                    filename={upload.file.name}
                    type={upload.file.type}
                    size={upload.file.size}
                    progress={progressList[upload.file.name]}
                    onDelete={() => deleteFile(upload)}
                    onCancel={() => deleteFile(upload)}
                  />
                ))}
              </GoabFormItem>
            </Sandbox>

            <ComponentProperties
              heading="FileUploadInput properties"
              properties={fileUploadInputProperties}
            />

            <ComponentProperties
              heading="FileUploadCard properties"
              properties={fileUploadCardProperties}
            />

          </GoabTab>
        </GoabTabs>
      </ComponentContent>
    </>
  );
}
