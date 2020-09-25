import { ProductActionTypes } from '../types/index';
import { AlertActionType, IAlertState, Imsg } from '../state-types';

const initialState: IAlertState = {
  alert: undefined,
};

const reducer = (
  state: IAlertState = initialState,
  action: AlertActionType
): IAlertState => {
  const { payload } = action;

  switch (action.type) {
    case ProductActionTypes.SHOW_ALERT:
      return {
        ...state,
        alert: payload as Imsg,
      };

    case ProductActionTypes.HIDE_ALERT:
      return {
        ...state,
        alert: undefined,
      };

    default:
      return state;
  }
};

export { reducer as alertReducer };
