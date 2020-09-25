import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelect } from '../../hooks/UseSelect';
import { hideAlertAction, showAlert } from '../../state/actions/alert-action';
import { addProductAction } from '../../state/actions/products-action';
import { Imsg } from '../../state/state-types';
import Loader from '../Loader';
import './index.scss';

const Newproduct = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const history = useHistory();

  const { alert, loading, error } = useSelect();

  const submitNewProduct = (event: React.FormEvent): void => {
    event.preventDefault();
    // validate form
    if (name.trim() === '' || price <= 0) {
      const alert: Imsg = {
        msg: 'All fields are required.',
      };
      showAlert(alert);
      return;
    }

    hideAlertAction();
    addProductAction({ name, price });
    history.push('/');
  };

  const goBack = () => {
    history.push('/');
  };

  return (
    <div>
      <h2 className="table__title">New product</h2>
      <form className="form" onSubmit={submitNewProduct}>
        <section className="form__section">
          <label>Product name</label>
          <input
            type="text"
            placeholder="Product name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </section>
        <section className="form__section">
          <label>Product price</label>
          <input
            type="number"
            name="price"
            min="0"
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
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
        {alert && <p className="alert-message">{alert.msg}</p>}
      </form>
      {loading && <Loader />}
      {error && <p>Ups! An error ocurred.</p>}
    </div>
  );
};

export default Newproduct;
