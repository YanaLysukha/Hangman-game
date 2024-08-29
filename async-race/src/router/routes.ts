import GaragePage from '@Src/pages/garage-page';
import WinnersPage from '@Src/pages/winners-page';

const ROUTES = {
  garage: {
    name: 'Garage',
    pageConstructor: GaragePage,
  },
  winners: {
    name: 'Winners',
    pageConstructor: WinnersPage,
  },
};

export type PageRoute = typeof ROUTES;
export type PageRouteKey = keyof PageRoute;

export default ROUTES;
