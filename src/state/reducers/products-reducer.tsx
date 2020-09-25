import { ACTIONTYPE, IProduct, IProductState } from '../state-types';
import { ProductActionTypes } from '../types';

const initialState: IProductState = {
  products: [],
  error: undefined,
  loading: false,
  currentProduct: undefined,
};

const reducer = (
  state: IProductState = initialState,
  action: ACTIONTYPE
): IProductState => {
  const { type, payload, product } = action;
  const { products, currentProduct } = state;

  switch (type) {
    case ProductActionTypes.BEGIN_PRODUCTS_DOWNLOAD:
    case ProductActionTypes.ADD_PRODUCT:
    case ProductActionTypes.BEGIN_EDIT_PRODUCT:
      return {
        ...state,
        loading: payload as boolean,
        currentProduct: product,
      };

    case ProductActionTypes.ADD_PRODUCT_ERROR:
    case ProductActionTypes.PRODUCTS_DOWNLOAD_ERROR:
    case ProductActionTypes.PRODUCT_DELETED_ERROR:
    case ProductActionTypes.PRODUCT_EDITED_ERROR:
      return {
        ...state,
        loading: false,
        error: payload as boolean,
      };

    case ProductActionTypes.PRODUCTS_DOWNLOAD_OK:
      return {
        ...state,
        loading: false,
        error: undefined,
        products: payload as IProduct[],
      };

    case ProductActionTypes.RETRIEVE_PRODUCT_DELETE:
      return {
        ...state,
        currentProduct: payload as IProduct,
      };

    case ProductActionTypes.PRODUCT_DELETED_OK:
      return {
        ...state,
        products: products?.filter(
          (product: IProduct) => product.id !== (currentProduct as IProduct).id
        ),
        currentProduct: undefined,
      };

    case ProductActionTypes.RETRIEVE_PRODUCT_EDIT:
      return {
        ...state,
        currentProduct: payload as IProduct,
      };

    case ProductActionTypes.PRODUCT_EDITED_OK:
      return {
        ...state,
        products: products?.map((product: IProduct) =>
          product.id === (currentProduct as IProduct).id
            ? (product = currentProduct as IProduct)
            : product
        ),
        currentProduct: undefined,
      };

    default:
      return state;
  }
};

export { reducer as productsReducer };
