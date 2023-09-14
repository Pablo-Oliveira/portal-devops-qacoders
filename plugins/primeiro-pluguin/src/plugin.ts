import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const primeiroPluguinPlugin = createPlugin({
  id: 'primeiro-pluguin',
  routes: {
    root: rootRouteRef,
  },
});

export const PrimeiroPluguinPage = primeiroPluguinPlugin.provide(
  createRoutableExtension({
    name: 'PrimeiroPluguinPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
