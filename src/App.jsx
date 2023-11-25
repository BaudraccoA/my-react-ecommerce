
import React from 'react';
import ProductDetail from './Components/ProductDetail';
import './Components/Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="container">
      <h1>Tienda en línea</h1>
      <ProductDetail />
    </div>
  );
};

export default App;
