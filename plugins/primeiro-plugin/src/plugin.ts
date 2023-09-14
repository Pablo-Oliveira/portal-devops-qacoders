import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const primeiroPluginPlugin = createPlugin({
  id: 'primeiro-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const PrimeiroPluginPage = primeiroPluginPlugin.provide(
  createRoutableExtension({
    name: 'PrimeiroPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
