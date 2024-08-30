import BaseComponent, { ElementProps } from '@Src/components/common/base-component';
import Link from '../link';
import classes from './style.module.scss';

type HeaderProps = Omit<ElementProps<HTMLElement>, 'tag'>;

export default class Header extends BaseComponent<HTMLElement> {
  constructor(props: HeaderProps) {
    super({ tag: 'header', class: classes.header, ...props });
    this.createContent();
  }

  createContent = () => {
    const wrapper = new BaseComponent<HTMLDivElement>(
      { tag: 'div', class: classes.linksContainer },
      new Link({
        href: 'garage',
        text: 'Garage',
      }),
      new Link({
        href: 'winners',
        text: 'Winners',
      }),
    );
    this.node.append(wrapper.node);
  };
}
