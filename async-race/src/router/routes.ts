import GaragePage from '@Src/pages/garage-page';
import WinnersPage from '@Src/pages/winners-page';

// add 404page later
export enum AppRoutes {
  GARAGE = '/garage',
  WINNERS = '/winners',
}

type AvailablePage = GaragePage | WinnersPage;

type Route = {
  name: string;
  page?: (args?: string[]) => AvailablePage | (() => AvailablePage);
};

type Routes = {
  [key in AppRoutes]: Route;
};

const ROUTES: Routes = {
  [AppRoutes.GARAGE]: {
    name: 'Garage',
    page: () => new GaragePage(),
  },
  [AppRoutes.WINNERS]: {
    name: 'Winners',
    page: () => new WinnersPage(),
  },
};

export type PageRoute = typeof ROUTES;
export default ROUTES;
