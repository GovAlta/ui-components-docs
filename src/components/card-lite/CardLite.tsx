import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./CardLite.css";

export interface Props {
  title: string;
  description: string;
  linkTo: string;
  linkDisplay: ReactNode;
}

export function CardLite(props: Props) {
  return (
    <div className="card-lite">
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      <div className="link">
        <Link to={props.linkTo}>{props.linkDisplay}</Link>
      </div>
      
    </div>
  );
}

export default CardLite;
