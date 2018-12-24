import React from "react";

export default function AddItemButton(props) {
  return (
    <button onClick={() => props.addToCart(props.product)}>
      Agregar al carrito de compras(
      {(props.cartItem && props.cartItem.quantity) || 0})
    </button>
  );
}
