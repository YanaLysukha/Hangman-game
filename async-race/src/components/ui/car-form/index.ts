import BaseComponent from '@Src/components/common/base-component';
import Api from '@Src/api/cars';
import Button, { ButtonClasses } from '../button';
import Input from '../input';
import classes from './style.module.scss';

export default class CarForm extends BaseComponent<HTMLDivElement> {
  textInput!: Input;

  colorInput!: Input;

  constructor(btnPurpose: string) {
    super({ tag: 'div', class: classes.wrapper });
    this.createContent(btnPurpose);
  }

  createContent = (btnPurpose: string) => {
    this.textInput = new Input({ placeholder: 'Car Name', type: 'text' });
    this.colorInput = new Input({ type: 'color' });
    this.node.append(
      this.textInput.node,
      this.colorInput.node,
      new Button({ text: `${btnPurpose} car`, class: classes.button }, ButtonClasses.BASIC, () =>
        console.log(`${btnPurpose} car`),
      ).node,
    );
  };

  createCar = () => {
    const data = {
      textInputValue: this.textInput.value,
      colorInputValue: this.colorInput.value,
    };
    const newCar = Api.createCar(data);
    return newCar;
  };
}
