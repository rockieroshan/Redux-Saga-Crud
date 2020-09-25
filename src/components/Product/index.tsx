import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import { IProduct } from '../../state/state-types';
import {
  deleteProductAction,
  retrieveProductEditAction,
} from '../../state/actions/products-action';
import Swal from 'sweetalert2';

const Product: React.FC<IProduct> = (product) => {
  const history = useHistory();
  const { name, price, id } = product;

  // function that redirects automátically, is better than 'Link'
  const redirectionEdition = (product: IProduct): void => {
    retrieveProductEditAction(product);
    history.push(`products/edit/${id}`);
  };

  const confirmDeleteProduct = (product: IProduct): void => {
    // ask the user for confirmation
    Swal.fire({
      title: 'Are you sure you want to delete the product?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#62a086',
      cancelButtonColor: '#f66b61',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      result.value && deleteProductAction(product);
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td className="prices">{price} $</td>
      <td className="button-container">
        <button
          className="button button--edit"
          type="button"
          onClick={() => redirectionEdition(product)}
        >
          Edit
        </button>
        <button
          className="button button--delete"
          type="button"
          onClick={() => confirmDeleteProduct(product)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
