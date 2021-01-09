/**
 *
 * Asynchronously loads the component for Fiscalia
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Fiscalia = lazyLoad(
  () => import('./index'),
  module => module.Fiscalia,
);
