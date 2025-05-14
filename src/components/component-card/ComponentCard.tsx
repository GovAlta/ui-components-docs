import { Link } from "react-router-dom";
import "./ComponentCard.css";
import { toKebabCase } from '../../utils/index';

export interface Props {
  name: string;
  description: string;
  groups: string[];
  tags?: string[];
}

function dasherize(value: string): string {
  return value.split(" ").join("-");
}

export function ComponentCard(props: Props) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(/images/${dasherize(props.name)}.png)` }}
      />
      <div className="card-content">
        <Link to={toKebabCase(props.name)}>
          {`${props.name.substring(0, 1).toUpperCase()}${props.name.substring(1)}`}
        </Link>
        {props.description}
      </div>
    </div>
  );
}
