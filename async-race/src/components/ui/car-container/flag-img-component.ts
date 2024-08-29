import flagSVG from '@Img/finish-flag.svg';
import Component from '../../base-component';
import classes from './style.module.scss';

export default class FlagImageComponent extends Component {
  constructor() {
    super({
      tagName: 'div',
      className: classes.flagImg,
    });

    // после изменения базового компонента изменить метод
    this.addSVG(flagSVG);
  }
}
