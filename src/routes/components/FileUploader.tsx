import {useState} from "react";
import {ComponentBinding, Sandbox} from "@components/sandbox";
import {Category, ComponentHeader} from "@components/component-header/ComponentHeader.tsx";
import {
  GoAFileUploadCard,
  GoAFileUploadInput,
  GoAFormItem,
  GoATab,
  GoATabs,
} from "@abgov/react-components";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import {CodeSnippet} from "@components/code-snippet/CodeSnippet.tsx";

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

  public onprogress: (percent: number) => void = (_: number) => {};
  public onabort: () => void = () => {};
  public onfail: (err: string) => void = (_: string) => {};
  public oncomplete: () => void = () => {};

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

export default function FileUploaderPage() {
  const [fileUploaderProps, setFileUploaderProps] = useState({
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
    setFileUploaderProps(props as {maxFileSize: string; [key: string]: unknown});
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
    };
    reader.readAsDataURL(file);
  }

  function deleteFile(upload: Upload) {
    upload.uploader.abort();
    setUploads([...uploads].filter(u => u.file.name !== upload.file.name));
  }

  return (
    <>
      <ComponentHeader
        name="File uploader"
        category={Category.INPUTS_AND_ACTIONS}
        description="Help users select and upload a file from their computer."
      />
      <GoATabs>
        <GoATab heading="Code examples">
          <Sandbox properties={fileUploaderBindings} onChange={onSandboxChange} fullWidth>
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
              
                uploadFile(file: File) {
                  const reader = new FileReader();
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
        `}
            />

            <CodeSnippet
              lang="typescript"
              tags="react"
              allowCopy={true}
              code={`
              const [uploads, setUploads] = useState<Upload[]>([]);
              const [progressList, setProgressList] = useState<Record<string, number>>({});
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
              };
              reader.readAsDataURL(file);
            }
        `}
            />

            <GoAFormItem label="Upload a file">
              <GoAFileUploadInput onSelectFile={uploadFile} {...fileUploaderProps} />
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
          </Sandbox>

          {/*FileUploadInput properties table*/}
          <ComponentProperties
            heading="FileUploadInput properties"
            properties={fileUploadInputProperties}
          />

          {/*FileUploadCard properties table*/}
          <ComponentProperties
            heading="FileUploadCard properties "
            properties={fileUploadCardProperties}
          />
        </GoATab>
      </GoATabs>
    </>
  );
}
