import BaseComponent from '@Src/components/common/base-component';
import Button, { ButtonClasses } from '../button';
import Input from '../input';
import classes from './style.module.scss';

export default class CarForm extends BaseComponent<HTMLDivElement> {
  constructor(btnPurpose: string) {
    super({ tag: 'div', class: classes.wrapper });
    this.createContent(btnPurpose);
  }

  createContent = (btnPurpose: string) => {
    this.node.append(
      new Input({ placeholder: 'Car Name', type: 'text' }).node,
      new Input({ type: 'color' }).node,
      new Button({ text: `${btnPurpose} car`, class: classes.button }, ButtonClasses.BASIC, () =>
        console.log(`${btnPurpose} car`),
      ).node,
    );
  };
}
