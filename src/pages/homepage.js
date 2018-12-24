import React from "react";
import ProductListing from "../components/products/product-listing";
import Data from "../data/products.json";

export default function Homepage(props) {
  return (
    <div>
      <h2>Inicio</h2>
      <ProductListing products={Data.products} />
    </div>
  );
}
