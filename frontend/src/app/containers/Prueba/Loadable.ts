/**
 *
 * Asynchronously loads the component for Prueba
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Prueba = lazyLoad(
  () => import('./index'),
  module => module.Prueba,
);
