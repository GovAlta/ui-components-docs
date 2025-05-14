import { ReactNode } from "react";
import css from "./Modal.module.css";
import { GoAIcon, GoAIconType } from "@abgov/react-components";

type Variant = "information" | "important" | "emergency" | "success" | "event";

interface Props {
  heading?: string;
  calloutVariant?: Variant;
  children: ReactNode;
}

export function GoAModal({ heading, calloutVariant, children }: Props) {
  return (
    <div className={css.modal}>
      {calloutVariant && (
        <div className={`${css.variant} ${css[calloutVariant]}`}>
          <GoAIcon type={`${calloutVariant}-circle` as GoAIconType} />
        </div>
      )}
      <div className={css.content}>
        {heading && <h3 className={css.heading}>{heading}</h3>}
        {children}
      </div>
    </div>
  );
}

export default GoAModal;
