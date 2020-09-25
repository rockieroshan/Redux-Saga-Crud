import { put, takeEvery, all, call } from 'redux-saga/effects';
import Swal from 'sweetalert2';
import {
  deleteProductErrorAction,
  deleteProductOkAction,
  downloadProductsErrorAction,
  downloadProductsOkAction,
} from '../actions/products-action';
import {
  addProductDB,
  deleteProductDB,
  editProductDB,
  retrieveProductsDB,
} from '../api-calls';
import { ProductActionTypes } from '../types';
import {
  editProductOkAction,
  editProductErrorAction,
} from '../actions/products-action';
import {
  addProductOkAction,
  addProductErrorAction,
} from '../actions/products-action';

// Retrieve products
// worker saga
function* retrieveProducts() {
  try {
    const { data } = yield call(retrieveProductsDB);
    yield downloadProductsOkAction(data);
  } catch (error) {
    yield put(downloadProductsErrorAction());
  }
}

// watcher saga
function* retrieveProductsSaga() {
  yield takeEvery(ProductActionTypes.BEGIN_PRODUCTS_DOWNLOAD, retrieveProducts);
}

// Create new product
// worker saga
function* addProduct(action: any) {
  const { product } = action;
  try {
    yield call(addProductDB, product);
    /* const response = await axiosClient.post('/products', product)*/
    yield addProductOkAction(); // download actualized products
    // Alert
    Swal.fire({
      title: 'Added!',
      text: 'The product has been added successfully',
      icon: 'success',
      confirmButtonColor: '#62a086',
    });
  } catch (error) {
    yield addProductErrorAction(true);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error ocurred. Please, try it again.',
    });
  }
}

// watcher saga
function* addProductSaga() {
  yield takeEvery(ProductActionTypes.ADD_PRODUCT, addProduct);
}

// Edit product
// worker saga
function* editProduct(action: any) {
  const { product } = action;
  try {
    yield call(editProductDB, product);
    yield editProductOkAction(product);
  } catch (error) {
    yield editProductErrorAction();
  }
}

// watcher saga
function* editProductSaga() {
  yield takeEvery(ProductActionTypes.BEGIN_EDIT_PRODUCT, editProduct);
}

// Delete product
// worker saga
function* deleteProduct(action: any) {
  const { payload } = action;
  try {
    yield call(deleteProductDB, payload);
    yield deleteProductOkAction();
    Swal.fire({
      title: 'Deleted!',
      text: 'The product has been deleted.',
      icon: 'success',
      confirmButtonColor: '#62a086',
    });
  } catch (error) {
    yield deleteProductErrorAction();
  }
}

// watcher saga
function* deleteProductSaga() {
  yield takeEvery(ProductActionTypes.RETRIEVE_PRODUCT_DELETE, deleteProduct);
}

// Export all sagas
export default function* rootSaga() {
  yield all([
    retrieveProductsSaga(),
    addProductSaga(),
    deleteProductSaga(),
    editProductSaga(),
  ]);
}
