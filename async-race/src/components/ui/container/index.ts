import BaseComponent, { ElementProps } from '@Src/components/common/base-component';
import classes from './style.module.scss';

export default class Container extends BaseComponent<HTMLElement> {
  constructor(props: ElementProps, ...children: BaseComponent<HTMLElement>[]) {
    super(props, ...children);
    this.node.classList.add(classes.container);
  }
}
