import BaseComponent from '@Src/components/common/base-component';
import Button, { ButtonClasses } from '../button';
import CarFormCreate from '../car-form-create';
import classes from './style.module.scss';
import CarFormEdit from '../car-form-edit';

interface CarControlPanelProps {
  updateCars: () => void;
}

export default class CarControlPanel extends BaseComponent<HTMLDivElement> {
  constructor(props: CarControlPanelProps) {
    super({ tag: 'div', class: classes.controlPanelContainer });
    this.createContent(props);
  }

  private createContent = (props: CarControlPanelProps) => {
    const btnContainer = new BaseComponent<HTMLDivElement>(
      { tag: 'div', class: classes.btnContainer },
      new Button({ text: 'Race', class: classes.race }, ButtonClasses.BASIC, () =>
        console.log('race'),
      ),
      new Button(
        { text: 'Reset', class: classes.reset, disabled: true },
        ButtonClasses.BASIC,
        () => console.log('Reset'),
      ),
      new Button({ text: 'Generate Cars', class: classes.generate }, ButtonClasses.BASIC, () =>
        console.log('Generate cars'),
      ),
    );
    this.node.append(
      new CarFormCreate({ updateCars: props.updateCars }).node,
      new CarFormEdit({ updateCars: props.updateCars }).node,
      btnContainer.node,
    );
  };
}
