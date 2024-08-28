export const ROUTES = {
  garage: {
    name: 'Garage',
  },
  winners: {
    name: 'Winners',
  },
};

export type PageRoute = typeof ROUTES;
export type PageRouteKey = keyof PageRoute;
