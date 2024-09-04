import BaseComponent from '@Src/components/common/base-component';
import Api from '@Src/api/cars';
import Button, { ButtonClasses } from '../button';
import Input from '../input';
import classes from './style.module.scss';

interface CarFormProps {
  updateCars: () => void;
}

export default class CarForm extends BaseComponent<HTMLDivElement> {
  textInput!: Input;

  colorInput!: Input;

  constructor(btnPurpose: string, props: CarFormProps) {
    super({ tag: 'div', class: classes.wrapper });
    this.createContent(btnPurpose, props);
  }

  createContent = (btnPurpose: string, props: CarFormProps) => {
    this.textInput = new Input({ placeholder: 'Car Name', type: 'text' });
    this.colorInput = new Input({ type: 'color' });
    this.node.append(
      this.textInput.node,
      this.colorInput.node,
      new Button({ text: `${btnPurpose} car`, class: classes.button }, ButtonClasses.BASIC, () =>
        this.createCar(props),
      ).node,
    );
  };

  createCar = async (props: CarFormProps) => {
    const data = {
      name: this.textInput.value,
      color: this.colorInput.value,
    };
    await Api.createCar(data);
    props.updateCars();
    this.clearInputs();
  };

  clearInputs = () => {
    this.textInput.value = '';
    this.colorInput.value = '#000000';
  };
}
