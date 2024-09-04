import BaseComponent from '@Src/components/common/base-component';
import editSVG from '@Img/edit.svg';
import deleteSVG from '@Img/trash.svg';
import startSVG from '@Img/play.svg';
import stopSVG from '@Img/stop.svg';
import { ICar } from '@Src/types/interfaces';
import classes from './style.module.scss';
import Button, { ButtonClasses } from '../button';
import carIcon from '../car';

export default class VehicleRaceControlPanel extends BaseComponent<HTMLDivElement> {
  constructor(carData: ICar) {
    super({ tag: 'div', class: classes.raceControlContainer });
    this.createContent(carData);
  }

  createContent = (carData: ICar) => {
    this.node.append(
      new BaseComponent<HTMLDivElement>(
        { tag: 'div', class: classes.trackInfo },
        new BaseComponent<HTMLHeadingElement>({
          tag: 'h3',
          class: classes.carTitle,
          text: carData.name,
        }),
        new BaseComponent<HTMLDivElement>(
          { tag: 'div', class: classes.trackInfoBtnWrapper },
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
      new BaseComponent<HTMLDivElement>(
        { tag: 'div', class: classes.trackRace },
        new BaseComponent<HTMLDivElement>(
          { tag: 'div', class: classes.trackRaceBtnContainer },
          new Button({}, ButtonClasses.ACTION, () => console.log('start'), startSVG),
          new Button({ disabled: true }, ButtonClasses.ACTION, () => console.log('stop'), stopSVG),
        ),
        carIcon(carData.color),
      ).node,
    );
  };
}
