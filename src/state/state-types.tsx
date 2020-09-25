import { ProductActionTypes } from './types';

export type ACTIONTYPE = {
  type: ProductActionTypes;
  payload?: boolean | IProduct | IProduct[];
  product?: IProduct;
};

export interface IProductState {
  readonly loading: boolean;
  readonly products?: IProduct[];
  readonly error?: boolean;
  readonly currentProduct?: IProduct;
}

export interface IProduct {
  name: string;
  price: number;
  id?: number;
}

//Alert

export type AlertActionType = {
  type: ProductActionTypes;
  payload?: Imsg;
};

export interface IAlertState {
  readonly alert?: Imsg;
}

export interface Imsg {
  msg?: string;
}
