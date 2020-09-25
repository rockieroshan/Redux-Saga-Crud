import store from '../../store';
import { IProduct } from '../state-types';
import { ProductActionTypes } from '../types/index';

// Download products actions
const downloadProducts = () => ({
  type: ProductActionTypes.BEGIN_PRODUCTS_DOWNLOAD,
  payload: true,
});

const downloadProductsOk = (products: IProduct[]) => ({
  type: ProductActionTypes.PRODUCTS_DOWNLOAD_OK,
  payload: products,
});

const downloadProductsError = () => ({
  type: ProductActionTypes.PRODUCTS_DOWNLOAD_ERROR,
  payload: true,
});

export const downloadProductsAction = () => store.dispatch(downloadProducts());

export const downloadProductsOkAction = (products: IProduct[]) =>
  store.dispatch(downloadProductsOk(products));

export const downloadProductsErrorAction = () =>
  store.dispatch(downloadProductsError());

// // Create new products
const addProduct = (product: IProduct) => ({
  type: ProductActionTypes.ADD_PRODUCT,
  payload: true,
  product: product,
});

const addProductOk = () => ({
  type: ProductActionTypes.BEGIN_PRODUCTS_DOWNLOAD,
  payload: true,
});

const addProductError = (state: boolean) => ({
  type: ProductActionTypes.ADD_PRODUCT_ERROR,
  payload: state,
});

export const addProductAction = (product: IProduct) =>
  store.dispatch(addProduct(product));

export const addProductOkAction = () => store.dispatch(addProductOk());

export const addProductErrorAction = (state: true) =>
  store.dispatch(addProductError(state));

// Edit product
const retrieveProductAction = (product: IProduct) => ({
  type: ProductActionTypes.RETRIEVE_PRODUCT_EDIT,
  payload: product,
});

const editProduct = (product: IProduct) => ({
  type: ProductActionTypes.BEGIN_EDIT_PRODUCT,
  product: product,
});

const editProductOk = (product: IProduct) => ({
  type: ProductActionTypes.PRODUCT_EDITED_OK,
  payload: product,
});

const editProductError = () => ({
  type: ProductActionTypes.PRODUCT_EDITED_ERROR,
  payload: true,
});

export const retrieveProductEditAction = (product: IProduct) =>
  store.dispatch(retrieveProductAction(product));

export const editProductAction = (product: IProduct) =>
  store.dispatch(editProduct(product));

export const editProductOkAction = (product: IProduct) =>
  store.dispatch(editProductOk(product));

export const editProductErrorAction = () => store.dispatch(editProductError());

// Delete products
const retrieveProductDelete = (product: IProduct) => ({
  type: ProductActionTypes.RETRIEVE_PRODUCT_DELETE,
  payload: product,
});

const deleteProductOk = () => ({
  type: ProductActionTypes.PRODUCT_DELETED_OK,
});

const deleteProductError = () => ({
  type: ProductActionTypes.PRODUCT_DELETED_ERROR,
  payload: true,
});

export const deleteProductAction = (product: IProduct) =>
  store.dispatch(retrieveProductDelete(product));

export const deleteProductOkAction = () => store.dispatch(deleteProductOk());

export const deleteProductErrorAction = () =>
  store.dispatch(deleteProductError());
