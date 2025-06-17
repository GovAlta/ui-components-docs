export type UpgradedComponent = {
  name: string;
  angular?: AngularUpgradedProps[];
  react?: ReactUpgradedProps[];
};
export type ReactUpgradedProps = {
  name: string;
  v5?: string;
  v6?: string;
};
export type AngularUpgradedProps = {
  v3?: {
    name: string;
    type: string;
  };
  v4?: {
    name: string;
    type: string;
  };
};

export const components: UpgradedComponent[] = [
  {
    name: "Accordion",
    angular: [
      {
        v3: {
          name: "headingsize",
          type: "string",
        },
        v4: {
          name: "headingSize",
          type: "GoabAccordionHeadingSize",
        },
      },
      {
        v3: {
          name: "headingcontent",
          type: "slot",
        },
        v4: {
          name: "headingContent",
          type: "TemplateRef",
        },
      },
    ],
  },
  {
    name: "Badge",
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabBadgeType",
        },
      },
    ],
  },
  {
    name: "Block",
    react: [
      {
        name: "direction",
        v5: "Direction",
        v6: "GoabBlockDirection",
      },
      {
        name: "alignment",
        v5: "Alignment",
        v6: "GoabBlockAlignment",
      },
    ],
    angular: [
      {
        v3: {
          name: "gap",
          type: "string",
        },
        v4: {
          name: "gap",
          type: "Spacing",
        },
      },
      {
        v3: {
          name: "direction",
          type: "string",
        },
        v4: {
          name: "direction",
          type: "GoabBlockDirection",
        },
      },
      {
        v3: {
          name: "alignment",
          type: "string",
        },
        v4: {
          name: "alignment",
          type: "GoabBlockAlignment",
        },
      },
    ],
  },
  {
    name: "Button",
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabButtonType",
        },
      },
      {
        v3: {
          name: "size",
          type: "string",
        },
        v4: {
          name: "size",
          type: "GoabButtonSize",
        },
      },
      {
        v3: {
          name: "variant",
          type: "string",
        },
        v4: {
          name: "variant",
          type: "GoabButtonVariant",
        },
      },
      {
        v3: {
          name: "leadingicon",
          type: "string",
        },
        v4: {
          name: "leadingIcon",
          type: "GoabIconType",
        },
      },
      {
        v3: {
          name: "trailingicon",
          type: "string",
        },
        v4: {
          name: "trailingIcon",
          type: "GoabIconType",
        },
      },
      {
        v3: {
          name: "_click",
          type: "() => void",
        },
        v4: {
          name: "onClick",
          type: "() => void",
        },
      },
    ],
  },
  {
    name: "Button group",
    angular: [
      {
        v3: {
          name: "alignment",
          type: "string",
        },
        v4: {
          name: "alignment",
          type: "GoabButtonGroupAlignment",
        },
      },
      {
        v3: {
          name: "gap",
          type: "string",
        },
        v4: {
          name: "gap",
          type: "GoabButtonGroupGap",
        },
      },
    ],
  },
  {
    name: "Callout",
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabCalloutType",
        },
      },
      {
        v3: {
          name: "size",
          type: "string",
        },
        v4: {
          name: "size",
          type: "GoabCalloutSize",
        },
      },
    ],
  },
  {
    name: "Checkbox",
    react: [
      {
        name: "onChange",
        v5: "(name: string, value: boolean) => void;",
        v6: "(details: GoabCheckboxOnChangeDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "description",
          type: "string | slot",
        },
        v4: {
          name: "description",
          type: "string | TemplateRef",
        },
      },
      {
        v3: {
          name: "_change",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onChange",
          type: "(e: GoabCheckboxOnChangeDetail) => void",
        },
      },
    ],
  },
  {
    name: "Chip",
    angular: [
      {
        v3: {
          name: "leadingicon",
          type: "string",
        },
        v4: {
          name: "leadingIcon",
          type: "GoabIconType | null",
        },
      },
      {
        v3: {
          name: "variant",
          type: "string",
        },
        v4: {
          name: "variant",
          type: "GoabChipVariant",
        },
      },
      {
        v3: {
          name: "_onClick",
          type: "() => void",
        },
        v4: {
          name: "onClick",
          type: "() => void",
        },
      },
    ],
  },
  {
    name: "Container",
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabContainerType",
        },
      },
      {
        v3: {
          name: "accent",
          type: "string",
        },
        v4: {
          name: "accent",
          type: "GoabContainerAccent",
        },
      },
      {
        v3: {
          name: "padding",
          type: "string",
        },
        v4: {
          name: "padding",
          type: "GoabContainerPadding",
        },
      },
      {
        v3: {
          name: "width",
          type: "string",
        },
        v4: {
          name: "width",
          type: "GoabContainerWidth",
        },
      },
      {
        v3: {
          name: "title",
          type: "slot",
        },
        v4: {
          name: "title",
          type: "TemplateRef",
        },
      },
      {
        v3: {
          name: "actions",
          type: "slot",
        },
        v4: {
          name: "actions",
          type: "TemplateRef",
        },
      },
    ],
  },
  {
    name: "Date picker",
    react: [
      {
        name: "onChange",
        v5: "(name: string, value: Date) => void;",
        v6: "(details: GoabDatePickerOnChangeDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "_change",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onChange",
          type: "(detail: GoabDatePickerOnChangeDetail) => void",
        },
      },
    ],
  },
  {
    name: "Dropdown",
    react: [
      {
        name: "onChange",
        v5: "(name: string, value: string) => void;",
        v6: "(details: GoabDropdownOnChangeDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "leadingicon",
          type: "string",
        },
        v4: {
          name: "leadingIcon",
          type: "GoabIconType",
        },
      },
      {
        v3: {
          name: "_change",
          type: "(name: string, value: string[] | string | null) => void",
        },
        v4: {
          name: "onChange",
          type: "(detail: GoabDropdownOnChangeDetail) => void",
        },
      },
    ],
  },
  {
    name: "File uploader",
    react: [
      {
        name: "onDelete",
        v5: "() => void;",
        v6: "(detail: GoABFileUploadOnDeleteDetail) => void;",
      },
      {
        name: "onCancel",
        v5: "() => void;",
        v6: "(detail: GoABFileUploadOnCancelDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "_cancel",
          type: "() => void",
        },
        v4: {
          name: "onCancel",
          type: "(detail: GoabFileUploadCardOnCancelDetail) => void",
        },
      },
      {
        v3: {
          name: "_delete",
          type: "() => void",
        },
        v4: {
          name: "onDelete",
          type: "(detail: GoabFileUploadCardOnDeleteDetail) => void",
        },
      },
    ],
  },
  {
    name: "File uploader input",
    react: [
      {
        name: "onSelect",
        v5: "(file: File) => void;",
        v6: "(detail: GoabFileUploadInputOnSelectFileDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "variant",
          type: "string",
        },
        v4: {
          name: "variant",
          type: "GoabFileUploadInputVariant",
        },
      },
      {
        v3: {
          name: "_selectFile",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onSelectFile",
          type: "(detail: GoabFileUploadInputOnSelectFileDetail) => void",
        },
      },
    ],
  },
  {
    name: "App Footer Nav Section",
    angular: [
      {
        v4: {
          name: "slot",
          type: "'nav'",
        },
      },
    ],
  },
  {
    name: "App Footer Meta Section",
    angular: [
      {
        v4: {
          name: "slot",
          type: "'meta'",
        },
      },
    ],
  },
  {
    name: "Form item",
    angular: [
      {
        v3: {
          name: "labelsize",
          type: "string",
        },
        v4: {
          name: "labelSize",
          type: "GoabFormItemLabelSize",
        },
      },
      {
        v3: {
          name: "requirement",
          type: "string",
        },
        v4: {
          name: "requirement",
          type: "GoabFormItemRequirement",
        },
      },
    ],
  },
  {
    name: "Form stepper",
    react: [
      {
        name: "onChange",
        v5: "(step: number) => void;",
        v6: "(detail: GoabFormStepperOnChangeDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "_change",
          type: "(e: CustomEvent({detail: {step: number}}) => void",
        },
        v4: {
          name: "onChange",
          type: "(detail: GoabFormStepperOnChangeDetail) => void",
        },
      },
    ],
  },
  {
    name: "Form step",
    angular: [
      {
        v3: {
          name: "status",
          type: "string",
        },
        v4: {
          name: "status",
          type: "GoabFormStepStatus",
        },
      },
    ],
  },
  {
    name: "Grid",
    angular: [
      {
        v3: {
          name: "gap",
          type: "string",
        },
        v4: {
          name: "gap",
          type: "Spacing",
        },
      },
    ],
  },
  {
    name: "Hero banner",
    angular: [
      {
        v3: {
          name: "actions",
          type: "slot",
        },
        v4: {
          name: "actions",
          type: "TemplateRef",
        },
      },
    ],
  },
  {
    name: "Icons",
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabIconType",
        },
      },
      {
        v3: {
          name: "size",
          type: "string",
        },
        v4: {
          name: "size",
          type: "GoabIconSize",
        },
      },
      {
        v3: {
          name: "theme",
          type: "string",
        },
        v4: {
          name: "theme",
          type: "GoabIconTheme",
        },
      },
    ],
  },
  {
    name: "Icon button",
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabIconType",
        },
      },
      {
        v3: {
          name: "size",
          type: "string",
        },
        v4: {
          name: "size",
          type: "GoabIconSize",
        },
      },
      {
        v3: {
          name: "theme",
          type: "string",
        },
        v4: {
          name: "theme",
          type: "GoabIconTheme",
        },
      },
      {
        v3: {
          name: "_click",
          type: "() => void",
        },
        v4: {
          name: "onClick",
          type: "() => void",
        },
      },
    ],
  },
  {
    name: "Input",
    react: [
      {
        name: "onChange",
        v5: "(name: string, value: string) => void;",
        v6: "(details: GoabInputOnChangeDetail) => void;",
      },
      {
        name: "onFocus",
        v5: "(name: string) => void;",
        v6: "(details: GoabInputOnFocusDetail) => void;",
      },
      {
        name: "onBlur",
        v5: "(name: string, value: string) => void;",
        v6: "(details: GoabInputOnBlurDetail) => void;",
      },
      {
        name: "onKeyPress",
        v5: "(name: string, value: string, key: string) => void;",
        v6: "(details: GoabInputOnKeyPressDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabInputType",
        },
      },
      {
        v3: {
          name: "autocapidalize",
          type: "string",
        },
        v4: {
          name: "autocapitalize",
          type: "GoabInputAutocapitalize",
        },
      },
      {
        v3: {
          name: "leadingicon",
          type: "string",
        },
        v4: {
          name: "leadingIcon",
          type: "GoabIconType",
        },
      },
      {
        v3: {
          name: "trailingicon",
          type: "string",
        },
        v4: {
          name: "trailingIcon",
          type: "GoabIconType",
        },
      },
      {
        v3: {
          name: "_trailingIconClick",
          type: "() => void",
        },
        v4: {
          name: "onTrailingIconClick",
          type: "() => void",
        },
      },
      {
        v3: {
          name: "_change",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onChange",
          type: "(detail: GoabInputOnChangeDetail) => void",
        },
      },
      {
        v3: {
          name: "_focus",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onFocus",
          type: "(detail: GoabInputOnFocusDetail) => void",
        },
      },
      {
        v3: {
          name: "_blur",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onBlur",
          type: "(detail: GoabInputOnBlurDetail) => void",
        },
      },
      {
        v3: {
          name: "_keyPress",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onKeyPress",
          type: "(detail: GoabInputOnKeyPressDetail) => void",
        },
      },
    ],
  },
  {
    name: "Microsite header",
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabMicrositeHeaderType",
        },
      },
      {
        v3: {
          name: "feedbackurltarget",
          type: "string",
        },
        v4: {
          name: "feedbackUrlTarget",
          type: "GoabLinkTarget",
        },
      },
      {
        v3: {
          name: "headerurltarget",
          type: "string",
        },
        v4: {
          name: "headerUrlTarget",
          type: "GoabLinkTarget",
        },
      },
    ],
  },
  {
    name: "Modal",
    react: [
      {
        name: "width",
        v5: "string (deprecated)",
        v6: "",
      },
      {
        name: "type",
        v5: "string (deprecated)",
        v6: "",
      },
    ],
    angular: [
      {
        v3: {
          name: "calloutvariant",
          type: "string",
        },
        v4: {
          name: "calloutVariant",
          type: "GoabModalCalloutVariant",
        },
      },
      {
        v3: {
          name: "transition",
          type: "string",
        },
        v4: {
          name: "transition",
          type: "GoabModalTransition",
        },
      },
      {
        v3: {
          name: "heading",
          type: "string | slot",
        },
        v4: {
          name: "heading",
          type: "string | TemplateRef",
        },
      },
      {
        v3: {
          name: "actions",
          type: "slot",
        },
        v4: {
          name: "actions",
          type: "TemplateRef",
        },
      },
      {
        v3: {
          name: "_close",
          type: "() => void",
        },
        v4: {
          name: "onClose",
          type: "() => void",
        },
      },
    ],
  },
  {
    name: "Notification banner",
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabNotificationType",
        },
      },
      {
        v3: {
          name: "arialive",
          type: "string",
        },
        v4: {
          name: "ariaLive",
          type: "GoABAriaLiveType",
        },
      },
      {
        v3: {
          name: "dismiss",
          type: "() => void",
        },
        v4: {
          name: "onDismiss",
          type: "() => void",
        },
      },
    ],
  },
  {
    name: "Pagination",
    react: [
      {
        name: "onChange",
        v5: "(page: number) => void;",
        v6: "(details: GoabPaginationOnChangeDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "variant",
          type: "string",
        },
        v4: {
          name: "variant",
          type: "GoabPaginationVariant",
        },
      },
      {
        v3: {
          name: "_change",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onChange",
          type: "(detail: GoabPaginationOnChangeDetail) => void",
        },
      },
    ],
  },
  {
    name: "Popover",
    react: [
      {
        name: "position",
        v5: "GoAPosition",
        v6: "GoabPopoverPosition",
      },
    ],
    angular: [
      {
        v3: {
          name: "position",
          type: "string",
        },
        v4: {
          name: "position",
          type: "GoabPopoverPosition",
        },
      },
      {
        v3: {
          name: "target",
          type: "slot",
        },
        v4: {
          name: "target",
          type: "TemplateRef",
        },
      },
    ],
  },
  {
    name: "Progress indicator",
    angular: [
      {
        v3: {
          name: "variant",
          type: "string",
        },
        v4: {
          name: "variant",
          type: "GoabCircularProgressVariant",
        },
      },
      {
        v3: {
          name: "size",
          type: "string",
        },
        v4: {
          name: "size",
          type: "GoabCircularProgressSize",
        },
      },
    ],
  },
  {
    name: "Radio item",
    angular: [
      {
        v3: {
          name: "description",
          type: "string | slot",
        },
        v4: {
          name: "description",
          type: "string | TemplateRef",
        },
      },
    ],
  },
  {
    name: "Radio group",
    react: [
      {
        name: "onChange",
        v5: "(name: string, value: string) => void;",
        v6: "(details: GoabRadioGroupOnChangeDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "orientation",
          type: "string",
        },
        v4: {
          name: "orientation",
          type: "GoabRadioGroupOrientation",
        },
      },
      {
        v3: {
          name: "_change",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onChange",
          type: "(e: GoabRadioGroupOnChangeDetail) => void",
        },
      },
    ],
  },
  {
    name: "Side menu heading",
    angular: [
      {
        v3: {
          name: "meta",
          type: "slot",
        },
        v4: {
          name: "meta",
          type: "TemplateRef",
        },
      },
      {
        v3: {
          name: "icon",
          type: "string",
        },
        v4: {
          name: "icon",
          type: "GoabIconType",
        },
      },
    ],
  },
  {
    name: "Skeleton loading",
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabSkeletonType",
        },
      },
      {
        v3: {
          name: "size",
          type: "string",
        },
        v4: {
          name: "size",
          type: "GoabSkeletonSize",
        },
      },
    ],
  },
  {
    name: "Spacer",
    react: [
      {
        name: "hSpacing",
        v5: "Spacing | 'fill'",
        v6: "GoabSpacerHorizontalSpacing",
      },
      {
        name: "vSpacing",
        v5: "Spacing",
        v6: "GoabSpacerVerticalSpacing",
      },
    ],
    angular: [
      {
        v3: {
          name: "hSpacing",
          type: "string",
        },
        v4: {
          name: "hSpacing",
          type: "GoabSpacerHorizontalSpacing",
        },
      },
      {
        v3: {
          name: "vSpacing",
          type: "string",
        },
        v4: {
          name: "vSpacing",
          type: "GoaSpacerVerticalSpacing",
        },
      },
    ],
  },
  {
    name: "Table",
    react: [{
      name: "onSort",
      v5: "(sortBy: string, sortDir: number) => void;",
      v6: "(details: GoabTableOnSortDetail) => void;",
    }],
    angular: [
      {
        v3: {
          name: "_sort",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onSort",
          type: "(details: GoabTableOnSortDetail) => void",
        },
      },
    ],
  },
  {
    name: "Table sort header",
    angular: [
      {
        v3: {
          name: "direction",
          type: "string",
        },
        v4: {
          name: "direction",
          type: "GoabTableSortDirection",
        },
      },
    ],
  },
  {
    name: "Tab item",
    angular: [
      {
        v3: {
          name: "heading",
          type: "string | slot",
        },
        v4: {
          name: "heading",
          type: "string | TemplateRef",
        },
      },
    ],
  },
  {
    name: "Tabs",
    react: [
      {
        name: "onChange",
        v5: "(tab: number) => void;",
        v6: "(details: GoabTabsOnChangeDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabTabsType",
        },
      },
    ],
  },
  {
    name: "Text area",
    react: [
      {
        name: "countBy",
        v5: "CountBy",
        v6: "GoabTextAreacountBy",
      },
      {
        name: "onChange",
        v5: "(name: string, value: string) => void;",
        v6: "(details: GoabTextAreaOnChangeDetail) => void;",
      },
      {
        name: "onKeyPress",
        v5: "(name: string, value: string, key: string) => void;",
        v6: "(details: GoabTextAreaOnKeyPressDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "countby",
          type: "string",
        },
        v4: {
          name: "countBy",
          type: "GoabTextAreaCountBy",
        },
      },
      {
        v3: {
          name: "_change",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onChange",
          type: "(detail: GoabTextAreaOnChangeDetail) => void",
        },
      },
      {
        v3: {
          name: "_keypress",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onKeyPress",
          type: "(detail: GoabTextAreaOnKeyPressDetail) => void",
        },
      },
    ],
  },
  {
    name: "Tooltip",
    angular: [
      {
        v3: {
          name: "position",
          type: "string",
        },
        v4: {
          name: "position",
          type: "GoabTooltipPosition",
        },
      },
      {
        v3: {
          name: "halign",
          type: "string",
        },
        v4: {
          name: "hAighn",
          type: "GoabTooltipHorizontalAlignment",
        },
      },
    ],
  },
  {
    name: "AppHeaderMenu",
    angular: [
      {
        v3: {
          name: "leadingicon",
          type: "string",
        },
        v4: {
          name: "leadingIcon",
          type: "GoabIconType",
        },
      },
    ],
  },
  {
    name: "Calendar",
    react: [
      {
        name: "onChange",
        v5: "(name: string, value: Date) => void;",
        v6: "(details: GoabCalendarOnChangeDetail) => void;",
      },
    ],
    angular: [
      {
        v3: {
          name: "_change",
          type: "(e: CustomEvent) => void",
        },
        v4: {
          name: "onChange",
          type: "(detail: GoabCalendarOnChangeDetail) => void",
        },
      },
    ],
  },
  {
    name: "PageBlock",
    angular:[
      {
        v3: {
          name: "gap",
          type: "string",
        },
        v4: {
          name: "gap",
          type: "Spacing",
        },
      },
      {
        v3: {
          name: "direction",
          type: "string",
        },
        v4: {
          name: "direction",
          type: "GoabBlockDirection",
        },
      },
      {
        v3: {
          name: "alignment",
          type: "string",
        },
        v4: {
          name: "alignment",
          type: "GoabBlockAlignment",
        },
      },
    ],
  },
  {
    name: "Spinner",
    react: [
      {
        name: "type",
        v5: "SpinnerType",
        v6: "GoabSpinnerType",
      },
      {
        name: "size",
        v5: "SpinnerSize",
        v6: "GoabSpinnerSize",
      },
    ],
    angular:[
      {
        v3: {
          name: "type",
          type: "string",
        },
        v4: {
          name: "type",
          type: "GoabSpinnerType",
        },
      },
      {
        v3: {
          name: "size",
          type: "string",
        },
        v4: {
          name: "size",
          type: "GoabSpinnerSize",
        },
      },
    ],
  },
];
