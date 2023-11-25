
import React from 'react';

const BuyButton = ({ onClick }) => {
  return (
    <button
      className="btn btn-primary rounded-pill"
      onClick={onClick}
    >
      Comprar
    </button>
  );
};

export default BuyButton;
