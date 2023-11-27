import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css'; 
import ProductDetail from './ProductDetail.jsx';

const CustomApp = () => {
  return (
    <div className="container">
      <h1 className='title'>Tienda en línea</h1>
      <ProductDetail />
    </div>
  );
};

export default CustomApp;
