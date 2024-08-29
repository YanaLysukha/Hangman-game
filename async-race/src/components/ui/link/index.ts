// import BaseComponent, { ElementProps } from '@Src/components/common/base-component';
// import Router from '@Src/router';
// import classes from './style.module.scss';

// type AppHref = {
//   href: AppRoutes | string;
// };

// type LinkProps = Omit<Omit<ElementProps<HTMLLinkElement>, 'tag'>, 'href'> & AppHref;

// export default class Link extends BaseComponent<HTMLElement> {
//   constructor(props: LinkProps, ...children: BaseComponent<HTMLElement>[]) {
//     super({ tag: 'a', ...props }, ...children);
//     this.node.classList.add(classes.link);

//     const href = props.href ?? '';
//     if (Router.isOwnUrl(href)) {
//       this.node.addEventListener('click', (event) => {
//         event.preventDefault();
//         Router.getInstance().route(`${href}` as AppRoutes);
//       });
//     }
//   }
// }

import BaseComponent, { ElementProps } from '@Src/components/common/base-component';
import Router from '@Src/router';
import { PageRouteKey } from '@Src/router/routes';
import classes from './style.module.scss';

export default class Link extends BaseComponent<HTMLElement> {
  constructor(props: Omit<ElementProps<HTMLLinkElement>, 'tag'>) {
    super({ tag: 'a', ...props });
    this.node.classList.add(classes.link);

    const href = props.href ?? '';

    // if href is app route, it will use as SPA route, else it is usual link to anywhere
    if (Router.isRouteExist(href)) {
      this.node.addEventListener('click', (event) => {
        event.preventDefault();
        Router.getInstance().route(href as PageRouteKey);
      });
    }
  }
}
