import BaseComponent from '@Src/components/common/base-component';
import editSVG from '@Img/edit.svg';
import deleteSVG from '@Img/trash.svg';
import classes from './style.module.scss';
import Button, { ButtonClasses } from '../button';

export default class VehicleRaceControlPanel extends BaseComponent<HTMLDivElement> {
  constructor(carName: string) {
    super({ tag: 'div', class: classes.raceControlContainer });
    this.createContent(carName);
  }

  createContent = (carName: string) => {
    this.node.append(
      new BaseComponent<HTMLDivElement>(
        { tag: 'div', class: classes.topWrapper },
        new BaseComponent<HTMLHeadingElement>({
          tag: 'h3',
          class: classes.carTitle,
          text: carName,
        }),
        new BaseComponent<HTMLDivElement>(
          { tag: 'div', class: classes.actionButtonsContainer },
          new Button(
            { text: 'Edit', class: classes.button },
            ButtonClasses.SELECT,
            () => console.log('edit'),
            editSVG,
          ),
          new Button(
            { text: 'Delete', class: classes.button },
            ButtonClasses.SELECT,
            () => console.log('Delete'),
            deleteSVG,
          ),
        ),
      ).node,
    );
  };
}
