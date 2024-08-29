import BaseComponent, { ElementProps } from '@Src/components/common/base-component';
// import { AppRoutes } from '@Src/router/routes';
import Link from '../link';

type HeaderProps = Omit<ElementProps<HTMLElement>, 'tag'>;

export default class Header extends BaseComponent<HTMLElement> {
  constructor(props: HeaderProps) {
    super({ tag: 'header', text: 'Header', ...props });
    this.createContent();
  }

  createContent = () => {
    const wrapper = new BaseComponent<HTMLDivElement>(
      { tag: 'div' },
      new Link({
        href: 'garage',
        text: 'garage',
      }),
      new Link({
        href: 'winners',
        text: 'winners',
      }),
    );
    this.node.append(wrapper.node);
  };
}
