import React from "react";
import AddItemButton from "./add-item-button";
import RemoveItemButton from "./remove-item-button";

export default function ProductListItem(props) {
  return (
    <div className="product-list-item" id={props.product.id}>
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
      />
      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <div>
        <AddItemButton
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />
        {props.cartItem ? (
          <RemoveItemButton
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
}
