import "./CardLite.css";
import { ReactNode } from "react";
import { GoabLink, GoabText } from "@abgov/react-components";

export interface Props {
  title: string;
  description: string;
  linkTo: string;
  linkDisplay: ReactNode;
}

export function CardLite(props: Props) {
  return (
    <a href={props.linkTo} className="card-lite">
      <div>
        <GoabText size="heading-m" mt="none" mb="m">
          <b className="card-heading">{props.title}</b>
        </GoabText>
        <GoabText size="body-m" mt="none" mb="xs">
          <div className="card-description">{props.description}</div>
        </GoabText>
        <GoabLink>{props.linkDisplay}</GoabLink>
      </div>
    </a>
  );
}

export default CardLite;
