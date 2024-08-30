import BaseComponent, { ElementProps } from '@Src/components/common/base-component';
import Router from '@Src/router';
import makeUpperCase from '@Src/utils/helpers';
import Link from '../link';
import classes from './style.module.scss';

type HeaderProps = Omit<ElementProps<HTMLElement>, 'tag'>;

export default class Header extends BaseComponent<HTMLElement> {
  navItemsWrapper!: BaseComponent<HTMLUListElement>;

  navItems = ['garage', 'winners'];

  constructor(props: HeaderProps) {
    super({ tag: 'header', class: classes.header, ...props });
    this.createContent();
  }

  createContent = () => {
    const wrapper = new BaseComponent<HTMLElement>(
      { tag: 'nav' },
      new BaseComponent<HTMLUListElement>(
        {
          tag: 'ul',
          class: classes.navigationList,
        },
        ...this.navItems.map(Header.createListItem),
      ),
    );
    this.node.append(wrapper.node);
  };

  static createListItem = (route: string) =>
    new BaseComponent<HTMLLIElement>(
      { tag: 'li', class: Router.isCurrentPath(route) ? classes.current : '' },
      new Link({ href: route, text: makeUpperCase(route), class: classes.navLink }),
    );
}
