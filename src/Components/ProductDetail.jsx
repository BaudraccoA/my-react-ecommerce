import React, { useState } from 'react';
import BuyButton from './BuyButton';

const ProductDetail = () => {
  const [isPurchased, setPurchased] = useState(false);

  const productData = {
    name: 'Nombre del Producto',
    description: 'Descripción del Producto',
    price: '$100.00',
    sku: 'ABC123',
    quantity: 10,
  };

  const handlePurchase = () => {
    // Lógica de compra aquí
    // ...

    // Actualizar el estado para mostrar el mensaje
    setPurchased(true);
  };

  return (
    <div className="card-container">
      <h2 className="font-weight-bold">{productData.name}</h2>
      <p className="text">{productData.description}</p>
      <p className="text">Precio: {productData.price}</p>
      <p className="text">SKU: {productData.sku}</p>
      <p className="text">Cantidad disponible: {productData.quantity}</p>
      {!isPurchased && <BuyButton onClick={handlePurchase} />}
      {isPurchased && (
        <p className="text text-success">
          ¡Gracias por su compra!
        </p>
      )}
    </div>
  );
};

export default ProductDetail;