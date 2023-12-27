import { ReactNode } from "react";
import css from "./Modal.module.css";
import { GoAIcon, GoAIconType } from "@abgov/react-components";

type Variant = "information" | "important" | "emergency" | "success" | "event";

interface Props {
  heading?: string;
  variant?: Variant;
  children: ReactNode;
}

export function GoAModal({ heading, variant, children }: Props) {
  return (
    <div className={css.modal}>
      {variant && (
        <div className={`${css.variant} ${css[variant]}`}>
          <GoAIcon type={`${variant}-circle` as GoAIconType} />
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
