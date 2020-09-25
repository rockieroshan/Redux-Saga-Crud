import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelect } from '../../hooks/UseSelect';
import { editProductAction } from '../../state/actions/products-action';
import { IProduct } from '../../state/state-types';

const EditProduct: React.FC = () => {
  const history = useHistory();
  const [product, setProduct] = useState<IProduct>({
    name: '',
    price: 0,
  });

  // fill state
  const { currentProduct } = useSelect();
  useEffect(() => {
    if (currentProduct) {
      setProduct(currentProduct);
    } else {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [currentProduct]);

  const submitEditProduct = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    editProductAction(product);
    history.push('/');
    Swal.fire({
      title: 'Updated!',
      text: 'The product has been updated.',
      icon: 'success',
      confirmButtonColor: '#62a086',
    });
  };

  // read data from form
  const onChangeForm = (event: React.FormEvent<HTMLInputElement>): void => {
    setProduct({
      ...product,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const goBack = () => {
    history.push('/');
  };

  return (
    <div>
      {' '}
      <div>
        <h2 className="table__title">Edit product</h2>
        <form className="form" onSubmit={submitEditProduct}>
          <section className="form__section">
            <label>Product name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={onChangeForm}
            />
          </section>
          <section className="form__section">
            <label>Product price</label>
            <input
              type="number"
              name="price"
              min="0"
              value={product.price}
              onChange={onChangeForm}
            />
          </section>
          <div className="button__container">
            <button
              type="button"
              className="button button--cancel"
              onClick={goBack}
            >
              Cancel
            </button>
            <button className="button button--confirm">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
