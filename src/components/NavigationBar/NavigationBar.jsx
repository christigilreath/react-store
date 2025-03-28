import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavigationBar({ cart }) {
  let itemCount = 0;
  if (cart.length > 0) {
    itemCount = cart
      .map((item) => item.amount)
      .reduce((acc, curr) => acc + curr);
  }
  return (
    <header>
      <h1>My Store</h1>
      <div className={styles.navigation}>
        <div>
          <Link to="/">Home</Link>
          <Link to="productpage">Store</Link>
        </div>
        <div>
          <Link to="cartpage">{`Cart(${itemCount})`}</Link>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
