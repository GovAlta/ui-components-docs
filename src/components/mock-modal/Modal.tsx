import { ReactNode } from "react";
import "./Modal.css";

interface Props {
  children: ReactNode
};

export function GoAModal({ children }: Props) {
  return (
    <div className="modal">
      {children}
    </div>
  )
}

export default GoAModal;