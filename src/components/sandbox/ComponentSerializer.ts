import { ReactElement, isValidElement } from 'react';
import { Serializer } from './BaseSerializer';

// https://github.com/grommet/jsx-to-string/blob/master/src/index.js

interface GoAElement {
  type: string | { name: string }
}

export class ComponentSerializer {
  constructor(private serializer: Serializer) { }

  #serializeComponent(item: ReactElement, isRoot: boolean, spacing: number): string {
    if (isValidElement(item)) {
      return this.#componentToString(item, isRoot, spacing);
    }
    if (typeof item === "string") {
      return item;
    }
    return "";
  }

  #serializeProp(elementName: string, name: string, item: ReactElement | Object | string | number | boolean, delimit = true): string {
    if (typeof item === "string") {
      return this.serializer.stringToProp(name, item)
    }

    if (typeof item === "number") {
      return this.serializer.numberToProp(name, item)
    }

    if (typeof item === "boolean") {
      return this.serializer.booleanToProp(name, item)
    }

    if (typeof item === 'function') {
      return this.serializer.funcToProp(name, item)
    }

    if (Array.isArray(item)) {
      const delimiter = delimit ? ', ' : `\n  `;
      const items: string = item.map(i => this.#serializeProp(elementName, name, i)).join(delimiter);
      return this.serializer.arrayToProp(name, items, delimit)
    }

    return ""
  }

  // Public
  componentsToString(components: ReactElement[], spacing: number = 0): string {
    return components.map(c => this.#componentToString(c, true, spacing)).join("\n")
  }

  #componentToString(component: ReactElement & GoAElement, isRoot: boolean, spacing: number = 0): string {
    let elementType = this.serializer.componentNameToString((component.type as unknown as any).name || component.type as string);
    this.serializer.setIsRoot(isRoot)
    this.serializer.setState({ element: elementType, props: { name: component.props.name } })

    // no props return empty component ex <GoAInput />
    if (!component.props) {
      return this.serializer.componentToString(elementType)
    }

    // convert props to string ex `name="foo" value="bar"`
    let props = Object.keys(component.props)
      .filter(prop => prop !== 'children')
      .map(prop => this.#serializeProp(elementType, prop, component.props[prop], isRoot))
      .filter(item => !!item)
      .join(" ");

    // manually add a key if it exists i.e. is React
    if (component.key) {
      props += ` key="${component.key}"`;
    }

    // add single space here to ensure only 1 space is added
    if (props.length > 0) {
      props = ' ' + props;
    }

    let children: string = "";
    if (component.props.children) {
      spacing += 2;
      const indentation = new Array(spacing + 1).join(' ');
      // children output
      if (Array.isArray(component.props.children)) {
        children = component.props.children
          .reduce((a: ReactElement[], b: ReactElement) => a.concat(b), [])  // handle Array of Arrays
          .filter((child: ReactElement) => child && isValidElement(child))
          .map((child: ReactElement) => this.#serializeComponent(child, false, spacing))
          .join(`\n${indentation}`);
      } else {
        children = this.#serializeComponent(component.props.children, false, spacing);
      }

      // final output
      return `<${elementType}${props}>\n${indentation}${children}\n${indentation.slice(0, -2)}</${elementType}>`;
    }

    return `<${elementType}${props} />`;
  }
}

export default ComponentSerializer;
