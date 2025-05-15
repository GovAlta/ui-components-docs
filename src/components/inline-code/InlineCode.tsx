import { ReactNode } from "react";
import React from "react";

interface InlineCodeProps {
  children: ReactNode;
}

export const InlineCode: React.FC<InlineCodeProps> = ({ children }) => {
  return <code className="inline">{children}</code>;
};
