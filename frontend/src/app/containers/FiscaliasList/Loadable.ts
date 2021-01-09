/**
 *
 * Asynchronously loads the component for FiscaliasList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FiscaliasList = lazyLoad(
  () => import('./index'),
  module => module.FiscaliasList,
);
