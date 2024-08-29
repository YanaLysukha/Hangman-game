import BaseComponent, { ElementProps } from '@Src/components/common/base-component';
import { AppRoutes } from '@Src/router/routes';
import Router from '@Src/router';
import classes from './style.module.scss';

type AppHref = {
  href: AppRoutes | string;
};

type LinkProps = Omit<Omit<ElementProps<HTMLLinkElement>, 'tag'>, 'href'> & AppHref;

export default class Link extends BaseComponent<HTMLElement> {
  constructor(props: LinkProps, ...children: BaseComponent<HTMLElement>[]) {
    super({ tag: 'a', ...props }, ...children);
    this.node.classList.add(classes.link);

    const href = props.href ?? '';
    if (Router.isOwnUrl(href)) {
      this.node.addEventListener('click', (event) => {
        event.preventDefault();
        Router.getInstance().route(`${href}` as AppRoutes);
      });
    }
  }
}
