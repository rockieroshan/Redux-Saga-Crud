import React from 'react';
import './index.scss';
import Spinner from '../../assets/img/Spinner.svg';

const Loader: React.FC = () => {
  return (
    <div className="Loader">
      <img src={Spinner} alt={Spinner} />
    </div>
  );
};

export default Loader;
