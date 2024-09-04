import BaseComponent from '@Src/components/common/base-component';
import Button, { ButtonClasses } from '../button';
import Input from '../input';
import classes from './style.module.scss';

interface CarFormProps {
  updateCars: () => void;
}

export default class CarFormEdit extends BaseComponent<HTMLDivElement> {
  textInput!: Input;

  colorInput!: Input;

  constructor(props: CarFormProps) {
    super({ tag: 'div', class: classes.wrapper });
    this.createContent(props);
  }

  createContent = (props: CarFormProps) => {
    this.textInput = new Input({ placeholder: 'Car Name', type: 'text' });
    this.colorInput = new Input({ type: 'color' });
    this.node.append(
      this.textInput.node,
      this.colorInput.node,
      new Button({ text: 'Edit car', class: classes.button }, ButtonClasses.BASIC, () =>
        console.log(props),
      ).node,
    );
  };

  clearInputs = () => {
    this.textInput.value = '';
    this.colorInput.value = '#000000';
  };
}
