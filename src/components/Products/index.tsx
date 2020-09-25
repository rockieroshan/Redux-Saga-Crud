import React, { useEffect } from 'react';
import { useSelect } from '../../hooks/UseSelect';
import { downloadProductsAction } from '../../state/actions/products-action';
import './index.scss';
import Product from '../Product/index';
import { IProduct } from '../../state/state-types';
import Loader from '../Loader/index';

const Products: React.FC = () => {
  useEffect(() => {
    downloadProductsAction();
  }, []);

  const { products, loading } = useSelect();
  if (loading || products?.length === 0) {
    return <Loader />;
  }
  return (
    <div className="products">
      <h2 className="table__title">Products</h2>
      {/* {error && <p>An error ocurred</p>} */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th id="table__title-price">Price</th>
            <th id="table__title-action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product: IProduct) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
