import ROUTES, { AppRoutes, PageRoute } from './routes';

export default class Router {
  #currentRoutePath: AppRoutes;

  #list: PageRoute;

  private static instance: Router | null;

  private currentFullRoutePath!: AppRoutes;

  private constructor() {
    this.#currentRoutePath = window.location.pathname as AppRoutes;
    this.#list = ROUTES;
    this.addPopStateEventListener();
    window.history.replaceState({}, '', document.location.href);
  }

  static getInstance = () => {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  };

  static isRouteExist = (route: string) => !!ROUTES[route as AppRoutes];

  static isOwnUrl = (route: string) => route.search('http') < 0;

  addPopStateEventListener = () => {
    window.addEventListener('popstate', (event) => {
      if (event.state) {
        this.route(window.location.pathname as AppRoutes, false);
      }
    });
  };

  route = (routePathParam = this.#currentRoutePath, needChangeHistory = true) => {
    this.currentFullRoutePath = routePathParam;
    const routePath = routePathParam.slice(1);
    const parsedRoutePath = routePath.split('/');
    const masterRoute = `/${parsedRoutePath[0]}` as AppRoutes;

    // add AppRoutes.NOT_FOUND instead of ''
    this.#currentRoutePath = masterRoute;

    if (needChangeHistory) {
      window.history.pushState({}, '', `${routePathParam as AppRoutes}`);
    }
  };

  list = () =>
    Object.entries(this.#list).map(([routePath, route]) => ({
      routePath,
      name: route.name,
      routeToPage: () => this.route(routePath as AppRoutes),
    }));

  get currentRoutePath() {
    return this.currentFullRoutePath ?? this.#currentRoutePath;
  }
}
