import { ReactNode } from "react";
import css from "./Modal.module.css";
import { GoabIcon } from "@abgov/react-components";
import { GoabIconType } from "@abgov/ui-components-common";

type Variant = "information" | "important" | "emergency" | "success" | "event";

interface Props {
  heading?: string;
  calloutVariant?: Variant;
  children: ReactNode;
}

export function GoabModal({ heading, calloutVariant, children }: Props) {
  return (
    <div className={css.modal}>
      {calloutVariant && (
        <div className={`${css.variant} ${css[calloutVariant]}`}>
          <GoabIcon type={`${calloutVariant}-circle` as GoabIconType} />
        </div>
      )}
      <div className={css.content}>
        {heading && <h3 className={css.heading}>{heading}</h3>}
        {children}
      </div>
    </div>
  );
}

export default GoabModal;
