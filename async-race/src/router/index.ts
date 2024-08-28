import { PageRouteKey, PageRoute, ROUTES } from './routes';

export default class Router {
  private currentRoutePath: PageRouteKey;

  private static instance: Router | null;

  #list: PageRoute;

  private constructor() {
    this.currentRoutePath = window.location.pathname.slice(1) as PageRouteKey;
    this.#list = ROUTES;
    this.addPopStateEventListener();
    window.history.replaceState(this.currentRoutePath, '', document.location.href);
  }

  static getInstance = () => {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  };

  static isRouteExist = (route: string) => !!ROUTES[route as PageRouteKey];

  addPopStateEventListener = () => {
    window.addEventListener('popstate', (event) => {
      if (event.state) {
        this.route(window.location.pathname.slice(1) as PageRouteKey, true);
      }
    });
  };

  route = (routePath = this.currentRoutePath, needChangeHistory = true) => {
    this.currentRoutePath = this.list().some((val) => val.routePath === routePath)
      ? routePath
      : 'garage';

    if (needChangeHistory) {
      window.history.pushState(this.currentRoutePath, '', `${this.currentRoutePath}`);
    }
  };

  list = () =>
    Object.entries(this.#list).map(([routePath, route]) => ({
      routePath,
      name: route.name,
      routeToPage: () => this.route(routePath as PageRouteKey),
    }));
}
