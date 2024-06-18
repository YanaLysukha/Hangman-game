export default class BaseComponent {
  constructor(props, ...children) {
    this.node = document.createElement(props.tag);

    if (props.class) {
      if (typeof props.class === 'string') {
        this.node.classList.add(props.class);
      } else if (Array.isArray(props.class)) {
        this.node.classList.add(...props.class);
      }
    }

    if (props.text) {
      this.node.textContent = props.text;
    }

    if (children) {
      children.forEach((element) => {
        this.node.append(element.node);
      });
    }

    Object.assign(this.node, props);
  }
}
