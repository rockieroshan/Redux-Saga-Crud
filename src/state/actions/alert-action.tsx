import store from '../../store';
import { Imsg } from '../state-types';
import { ProductActionTypes } from '../types/index';

// Show alert
const createAlert = (alert: Imsg) => ({
  type: ProductActionTypes.SHOW_ALERT,
  payload: alert,
});

export const showAlert = (alert: Imsg) => store.dispatch(createAlert(alert));

// Hide alert
const hideAlert = () => ({
  type: ProductActionTypes.HIDE_ALERT,
  payload: undefined,
});

export const hideAlertAction = () => store.dispatch(hideAlert());
