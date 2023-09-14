import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { primeiroPluginPlugin, PrimeiroPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(primeiroPluginPlugin)
  .addPage({
    element: <PrimeiroPluginPage />,
    title: 'Root Page',
    path: '/primeiro-plugin'
  })
  .render();
