import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.fiscalia || initialState;

export const selectFiscalia = createSelector(
  [selectDomain],
  fiscaliaState => fiscaliaState,
);
