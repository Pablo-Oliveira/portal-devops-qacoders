import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { primeiroPluguinPlugin, PrimeiroPluguinPage } from '../src/plugin';

createDevApp()
  .registerPlugin(primeiroPluguinPlugin)
  .addPage({
    element: <PrimeiroPluguinPage />,
    title: 'Root Page',
    path: '/primeiro-pluguin'
  })
  .render();
