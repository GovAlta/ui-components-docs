import { Sandbox } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";
import { GoabFormItem, GoabInput, GoabBlock, GoabInputNumber } from "@abgov/react-components";
import { useContext } from "react";
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const TextFieldRightAlignExample = () => {
  const { version, language } = useContext(LanguageVersionContext);

  const noop = () => {};
  const isAngularOld = version === "old" && language === "angular";

  return (
    <Sandbox flags={["reactive"]} skipRender>
      {/*React code*/}
      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
           const [fullName, setFullName] = useState<string>('');
           const [accountNumber, setAccountNumber] = useState<string>('');
           const [price, setPrice] = useState<number>();
           const [quantity, setQuantity] = useState<number>();
        `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="react"
          allowCopy={true}
          code={`
           <GoabBlock gap="m" direction="column">
             <GoabFormItem label="Full Name" mb="xl">
               <GoabInput 
                 onChange={(event: GoabInputOnChangeDetail) => setFullName(event.value)} 
                 value={fullName} 
                 name="fullName" 
                 type="text"
                 textAlign="left"
                 width="100%"
               />
             </GoabFormItem>
             
             <GoabFormItem label="Account Number" helpText="This input is right aligned." mb="xl">
               <GoabInput 
                 onChange={(event: GoabInputOnChangeDetail) => setAccountNumber(event.value)} 
                 value={accountNumber} 
                 name="accountNumber" 
                 textAlign="right"
                 width="15ch"
               />
             </GoabFormItem>
             
             <GoabFormItem label="Price" helpText="The input number component is right aligned by default." mb="xl">
               <GoabInputNumber 
                 onChange={(event: GoabInputOnChangeDetail<number>) => setPrice(Number(event.value))}
                 value={price}
                 name="price" 
                 width="7ch" 
                 trailingContent={<span style={{ whiteSpace: 'nowrap' }}>per item</span>}
               />
             </GoabFormItem>
             
             <GoabFormItem label="Quantity" helpText="You can set a number input to be left aligned." mb="xl">
               <GoabInputNumber 
                 onChange={(event: GoabInputOnChangeDetail<number>) => setQuantity(Number(event.value))}
                 value={quantity}
                 name="quantity" 
                 textAlign="left" 
                 width="7ch" 
               />
             </GoabFormItem>
           </GoabBlock>
        `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
           const [fullName, setFullName] = useState<string>('');
           const [accountNumber, setAccountNumber] = useState<string>('');
           const [price, setPrice] = useState<number>();
           const [quantity, setQuantity] = useState<number>();

           function onTextChange(name: string, value: string) {
             switch(name) {
               case 'fullName':
                 setFullName(value);
                 break;
               case 'accountNumber':
                 setAccountNumber(value);
                 break;
             }
           }

           function onNumberChange(name: string, value: number) {
             switch(name) {
               case 'price':
                 setPrice(value);
                 break;
               case 'quantity':
                 setQuantity(value);
                 break;
             }
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
           <GoABlock gap="m" direction="column">
             <GoAFormItem label="Full Name" mb="xl">
               <GoAInput 
                 onChange={onTextChange} 
                 value={fullName} 
                 name="fullName" 
                 type="text"
                 textAlign="left"
                 width="100%"
               />
             </GoAFormItem>
             
             <GoAFormItem label="Account Number" helpText="This input is right aligned." mb="xl">
               <GoAInput 
                 onChange={onTextChange} 
                 value={accountNumber} 
                 name="accountNumber" 
                 textAlign="right"
                 width="15ch"
               />
             </GoAFormItem>
             
             <GoAFormItem label="Price" helpText="The input number component is right aligned by default." mb="xl">
               <GoAInputNumber 
                 onChange={onNumberChange} 
                 value={price}
                 name="price" 
                 width="7ch"
                 trailingContent={<span style={{ whiteSpace: 'nowrap' }}>per item</span>}
               />
             </GoAFormItem>
             
             <GoAFormItem label="Quantity" helpText="You can set a number input to be left aligned." mb="xl">
               <GoAInputNumber 
                 onChange={onNumberChange} 
                 value={quantity}
                 name="quantity" 
                 textAlign="left" 
                 width="7ch" 
               />
             </GoAFormItem>
           </GoABlock>
        `}
        />
      )}

      {/*Angular code*/}
      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags={["angular", "reactive"]}
          allowCopy={true}
          code={`
           export class ExampleComponent {
            form!: FormGroup;
            constructor(private fb: FormBuilder) {
              this.form = this.fb.group({
                fullName: [''],
                accountNumber: [''],
                price: [''],
                quantity: [''],
              });
            }
          }
        `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags={["angular", "reactive"]}
          allowCopy={true}
          code={`
           <form [formGroup]="form">
             <goab-block gap="m" direction="column">
               <goab-form-item label="Full Name" mb="xl">
                 <goab-input
                   name="fullName"
                   formControlName="fullName"
                   type="text"
                   textAlign="left"
                   width="100%"
                 ></goab-input>
               </goab-form-item>
               
               <goab-form-item label="Account Number" helpText="This input is right aligned." mb="xl">
                 <goab-input
                   name="accountNumber"
                   formControlName="accountNumber"
                   textAlign="right"
                   width="15ch"
                 ></goab-input>
               </goab-form-item>
               
               <goab-form-item label="Price" helpText="The input number component is right aligned by default." mb="xl">
                 <goab-input-number
                   name="price"
                   formControlName="price"
                   width="7ch"
                 >
                   <div slot="trailingContent">
                     <span [style.white-space]="'nowrap'">per item</span>
                   </div>
                 </goab-input-number>
               </goab-form-item>
               
               <goab-form-item label="Quantity" helpText="You can set a number input to be left aligned." mb="xl">
                 <goab-input-number
                   name="quantity"
                   formControlName="quantity"
                   textAlign="left"
                   width="7ch"
                 ></goab-input-number>
               </goab-form-item>
             </goab-block>
           </form>
        `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
           export class ExampleComponent {
             fullName = "";
             accountNumber = "";
             price = "";
             quantity = "";
             
             inputOnChange(event: GoabInputOnChangeDetail) {
               switch(event.name) {
                 case 'fullName':
                   this.fullName = event.value;
                   break;
                 case 'accountNumber':
                   this.accountNumber = event.value;
                   break;
                 case 'price':
                   this.price = event.value;
                   break;
                 case 'quantity':
                   this.quantity = event.value;
                   break;
               }
             }
           }
        `}
        />
      )}

      {version === "new" && (
        <CodeSnippet
          lang="html"
          tags="angular"
          allowCopy={true}
          code={`
           <goab-block gap="m" direction="column">
             <goab-form-item label="Full Name" mb="xl">
               <goab-input 
                 name="fullName" 
                 [value]="fullName"
                 type="text"
                 textAlign="left"
                 width="100%"
                 (_change)="inputOnChange($event.detail)"
               ></goab-input>
             </goab-form-item>
             
             <goab-form-item label="Account Number" helpText="This input is right aligned." mb="xl">
               <goab-input 
                 name="accountNumber" 
                 [value]="accountNumber"
                 textAlign="right"
                 width="15ch"
                 (_change)="inputOnChange($event.detail)"
               ></goab-input>
             </goab-form-item>
             
             <goab-form-item label="Price" helpText="The input number component is right aligned by default." mb="xl">
               <goab-input-number 
                 name="price" 
                 [value]="price"
                 width="7ch"
                 (_change)="inputOnChange($event.detail)"
               >
                 <div slot="trailingContent">
                   <span [style.white-space]="'nowrap'">per item</span>
                 </div>
               </goab-input-number>
             </goab-form-item>
             
             <goab-form-item label="Quantity" helpText="You can set a number input to be left aligned." mb="xl">
               <goab-input-number 
                 name="quantity" 
                 [value]="quantity"
                 textAlign="left" 
                 width="7ch"
                 (_change)="inputOnChange($event.detail)"
               ></goab-input-number>
             </goab-form-item>
           </goab-block>
        `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags={["angular", "reactive"]}
          allowCopy={true}
          code={`
           export class ExampleComponent {
             fullNameFormCtrl = new FormControl("");
             accountNumberFormCtrl = new FormControl("");
           }
        `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="html"
          tags={["angular", "reactive"]}
          allowCopy={true}
          code={`
           <goa-block gap="m" direction="column">
             <goa-form-item label="Full Name" mb="xl">
               <goa-input 
                 name="fullName" 
                 [formControl]="fullNameFormCtrl"
                 type="text"
                 textAlign="left"
                 width="100%"
               ></goa-input>
             </goa-form-item>
             
             <goa-form-item label="Account Number" helpText="This input is right aligned." mb="xl">
               <goa-input 
                 name="accountNumber" 
                 [formControl]="accountNumberFormCtrl"
                 textAlign="right"
                 width="15ch"
               ></goa-input>
             </goa-form-item>
           </goa-block>
        `}
        />
      )}

      {version === "old" && (
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
           export class ExampleComponent {
             fullName: string = "";
             accountNumber: string = "";
             
             onChange(event: Event) {
               const customEvent = event as CustomEvent;
               const { name, value } = customEvent.detail;
               
               switch(name) {
                 case 'fullName':
                   this.fullName = value;
                   break;
                 case 'accountNumber':
                   this.accountNumber = value;
                   break;
               }
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
           <goa-block gap="m" direction="column">
             <goa-form-item label="Full Name" mb="xl">
               <goa-input 
                 name="fullName" 
                 [value]="fullName"
                 type="text"
                 textAlign="left"
                 width="100%"
                 (_change)="onChange($event)"
               ></goa-input>
             </goa-form-item>
             
             <goa-form-item label="Account Number" helpText="This input is right aligned." mb="xl">
               <goa-input 
                 name="accountNumber" 
                 [value]="accountNumber"
                 textAlign="right"
                 width="15ch"
                 (_change)="onChange($event)"
               ></goa-input>
             </goa-form-item>
           </goa-block>
        `}
        />
      )}

      <GoabBlock gap="m" direction="column">
        <GoabFormItem label="Full Name" mb="xl">
          <GoabInput
            textAlign="left"
            onChange={noop}
            value=""
            name="fullName"
            type="text"
            width="100%"
          />
        </GoabFormItem>

        <GoabFormItem label="Account Number" helpText="This input is right aligned." mb="xl">
          <GoabInput textAlign="right" onChange={noop} value="" name="accountNumber" width="15ch" />
        </GoabFormItem>

        {!isAngularOld && (
          <>
            <GoabFormItem
              label="Price"
              helpText="The input number component is right aligned by default."
              mb="xl">
              <GoabInputNumber
                onChange={noop}
                name="price"
                width="7ch"
                trailingContent={<span style={{ whiteSpace: "nowrap" }}>per item</span>}
              />
            </GoabFormItem>

            <GoabFormItem
              label="Quantity"
              helpText="You can set a number input to be left aligned."
              mb="xl">
              <GoabInputNumber onChange={noop} name="quantity" textAlign="left" width="7ch" />
            </GoabFormItem>
          </>
        )}
      </GoabBlock>
    </Sandbox>
  );
};
