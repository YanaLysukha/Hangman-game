import BaseComponent from '@Src/components/common/base-component';
import ContentPage from '@Src/components/common/content-page';
import Button, { ButtonClasses } from '@Src/components/ui/button';
import editSVG from '@Img/edit.svg';
import removeSVG from '@Img/trash.svg';
import startSVG from '@Img/play.svg';
import stopSVG from '@Img/stop.svg';
import Input from '@Src/components/ui/input';
import classes from './style.module.scss';

export default class GaragePage extends ContentPage {
  constructor() {
    super({ containerTag: 'main', title: 'Garage' });
    this.createContent();
  }

  private createContent = () => {
    const elem = new BaseComponent<HTMLHeadingElement>({ tag: 'h1', text: 'Garage page' });
    this.container.node.append(elem.node);
    this.container.node.classList.add(classes.container);

    const basicBtn = new Button(
      { text: 'Create car', class: classes.button },
      ButtonClasses.BASIC,
      () => console.log('create car'),
    );
    const selectBtn = new Button(
      { text: 'Edit', class: classes.button },
      ButtonClasses.SELECT,
      () => console.log('edit car'),
      editSVG,
    );
    const removeBtn = new Button(
      { text: 'Remove', class: classes.button },
      ButtonClasses.SELECT,
      () => console.log('remove car'),
      removeSVG,
    );
    const startBtn = new Button(
      { text: '', class: classes.start },
      ButtonClasses.ACTION,
      () => console.log('start car'),
      startSVG,
    );
    const stopBtn = new Button(
      { text: '', class: classes.stop },
      ButtonClasses.ACTION,
      () => console.log('stop car'),
      stopSVG,
    );
    const textInput = new Input({ placeholder: 'Car Name', type: 'text' });
    const colorInput = new Input({ type: 'color' });
    this.container.node.append(textInput.node);
    this.container.node.append(colorInput.node);
    this.container.node.append(basicBtn.node);
    this.container.node.append(selectBtn.node);
    this.container.node.append(removeBtn.node);
    this.container.node.append(startBtn.node);
    this.container.node.append(stopBtn.node);
  };
}
