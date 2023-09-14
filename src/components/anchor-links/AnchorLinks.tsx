import { GoAGrid } from "@abgov/react-components";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  vertical?: boolean;
}
export function AnchorLinks({ children, vertical }: Props) {
  return (
    <GoAGrid
      minChildWidth={vertical ? "100%" : "30ch"}
      gap="xs"
      mt="2xl"
      mb="3xl"
    >
      {children}
    </GoAGrid>
  );
}
