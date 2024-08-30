import BaseComponent, { Callback, ElementProps } from '@Src/components/common/base-component';
import classes from './style.module.scss';

type ButtonProps = Omit<ElementProps<HTMLButtonElement>, 'tag'>;

export enum ButtonClasses {
  BASIC = 'basic',
  ACTION = 'action',
  SELECT = 'select',
}

export default class Button extends BaseComponent<HTMLButtonElement> {
  private onClickCallback: Callback;

  private icon!: BaseComponent<HTMLImageElement>;

  constructor(
    props: ButtonProps,
    btnClass: ButtonClasses | ButtonClasses[],
    onClickCb: (event: Event) => void,
    iconSVG?: string,
  ) {
    super({ tag: 'button', ...props });
    this.onClickCallback = onClickCb;
    this.node.addEventListener('click', this.onClickHandler);
    this.addClasses(btnClass);
    if (iconSVG) {
      this.addIcon(iconSVG);
    }
  }

  addIcon = (iconSVG: string) => {
    this.icon = new BaseComponent<HTMLImageElement>({ tag: 'div', innerHTML: iconSVG });
    this.icon.node.classList.add(classes.icon);
    this.node.prepend(this.icon.node);
  };

  addClasses = (btnClasses: ButtonClasses | ButtonClasses[]) => {
    if (Array.isArray(btnClasses)) {
      btnClasses.forEach((className) => this.node.classList.add(classes[className]));
    } else {
      this.node.classList.add(classes[btnClasses]);
    }
  };

  onClickHandler = (event: Event) => {
    event.preventDefault();
    this.onClickCallback(event);
  };

  enable = () => {
    this.node.disabled = false;
  };

  disable = () => {
    this.node.disabled = true;
  };

  show = () => {
    this.node.classList.remove(classes.hidden);
  };

  hide = () => {
    this.node.classList.add(classes.hidden);
  };
}
