import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fiscaliaActions } from './slice';
import { FiscaliaState } from './types';
import { actualizar, crear, eliminar } from './service';
export function* submitFormHandler(action: PayloadAction<FiscaliaState>) {
  var model = action.payload.form;
  try {
    if (model?.id) {
      yield call(actualizar, model);
    } else {
      yield call(crear, model);
    }
    yield put(fiscaliaActions.redirect({ redirect: '/fiscalia-lista' }));
  } catch (err) {
    //yield put(fiscaliaActions.redirect({ redirect: '/fiscalia-lista' }));
  }
}
export function* EliminarHandler(action: PayloadAction<FiscaliaState>) {
  try {
    yield call(eliminar, action.payload.form?.id);
    yield put(fiscaliaActions.redirect({ redirect: '/fiscalia-lista' }));
  } catch (err) {
  }
}
export function* fiscaliaSaga() {
  yield takeLatest(fiscaliaActions.submitForm.type, submitFormHandler);
  yield takeLatest(fiscaliaActions.eliminar.type, EliminarHandler);
}
