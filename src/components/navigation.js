import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Carrito de compras</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
