import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, FiscaliaState } from './types';

// The initial state of the Fiscalia container
export const initialState: ContainerState = {};

const fiscaliaSlice = createSlice({
  name: 'fiscalia',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    submitForm(state, action: PayloadAction<FiscaliaState>) {},
    eliminar(state, action: PayloadAction<FiscaliaState>) {},
    redirect(state, action: PayloadAction<FiscaliaState>) {
      state.redirect = action.payload.redirect;
    }
  },
});

export const {
  actions: fiscaliaActions,
  reducer,
  name: sliceKey,
} = fiscaliaSlice;
