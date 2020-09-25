import axiosClient from '../config/index';
import { IProduct } from '../state-types';

export async function retrieveProductsDB() {
  return await axiosClient.get('/products');
}

export async function addProductDB(product: IProduct) {
  return await axiosClient.post('/products', product);
}

export async function deleteProductDB(product: IProduct) {
  return await axiosClient.delete(`/products/${product.id}`);
}

export async function editProductDB(product: IProduct) {
  return await axiosClient.put(`/products/${product.id}`, product);
}
