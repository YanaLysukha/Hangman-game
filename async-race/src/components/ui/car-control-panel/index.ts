import BaseComponent from '@Src/components/common/base-component';
import Button, { ButtonClasses } from '../button';
import CarForm from '../car-form';
import classes from './style.module.scss';

export default class CarControlPanel extends BaseComponent<HTMLDivElement> {
  constructor() {
    super({ tag: 'div', class: classes.controlPanelContainer });
    this.createContent();
  }

  private createContent = () => {
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
    this.node.append(new CarForm('Create').node, new CarForm('Edit').node, btnContainer.node);
  };
}
