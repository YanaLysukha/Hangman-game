import BaseComponent, { ElementProps } from '@Src/components/common/base-component';
import classes from './style.module.scss';

type InputProps = Omit<ElementProps<HTMLInputElement>, 'tag'>;

export default class Input extends BaseComponent<HTMLInputElement> {
  inputElement!: BaseComponent<HTMLInputElement>;

  constructor(inputProps: InputProps) {
    super({ tag: 'div', class: classes.wrapper });
    this.createContent(inputProps);
  }

  createContent = (props: InputProps) => {
    this.inputElement = new BaseComponent<HTMLInputElement>({
      tag: 'input',
      type: props.type,
      class: classes.input,
      ...props,
    });
    this.node.append(this.inputElement.node);
  };

  get value() {
    return this.inputElement.node.value;
  }

  set value(value: string) {
    this.inputElement.node.value = value;
  }
}
