// src/components/ProductDetail.jsx
import React, { useState } from 'react';
import BuyButton from './BuyButton.jsx';

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
    <div>
      <h1>{productData.name}</h1>
      <p>{productData.description}</p>
      <p>Precio: {productData.price}</p>
      <p>SKU: {productData.sku}</p>
      <p>Cantidad disponible: {productData.quantity}</p>

      <BuyButton onClick={handlePurchase} />

      {isPurchased && <p>"Gracias por su compra"</p>}
    </div>
  );
};

export default ProductDetail;
