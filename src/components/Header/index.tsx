import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header: React.FC = () => {
  return (
    <nav className="header">
      <div>
        <h1 className="header__title">Juice store</h1>
      </div>
      <button className="button button--new">
        <Link to={'/products/new'}>Add product</Link>
      </button>
    </nav>
  );
};

export default Header;
