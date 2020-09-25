import { useSelector } from 'react-redux';
import { IAlertState, IProductState } from '../state/state-types';

export const useSelect = () => {
  const { products, currentProduct, loading, error } = useSelector(
    ({ products }: { products: IProductState }) => ({
      products: products.products,
      loading: products.loading,
      error: products.error,
      currentProduct: products.currentProduct,
    })
  );

  //Alert
  const { alert } = useSelector(({ alert }: { alert: IAlertState }) => ({
    alert: alert.alert,
  }));

  return { products, currentProduct, loading, error, alert } as const;
};
