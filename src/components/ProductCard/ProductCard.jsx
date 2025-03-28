import { useState } from "react";

function ProductCard({ title, src, price, setCart, styles }) {
  const [inputValue, setInputValue] = useState(0);
  const item = { title: title, src: src, price: price, amount: inputValue };
  function increaseItemAmount() {
    return setInputValue(inputValue + 1);
  }

  function decreaseItemAmount() {
    if (inputValue > 0) {
      return setInputValue(inputValue - 1);
    }
  }

  function addItemToCart(item) {
    setCart((cart) => {
      [...cart, item];
    });
  }

  return (
    <>
      <h4>{title}</h4>
      <img src={src} alt={title} />
      <div>
        <div>
          <p>
            {"$"}
            {price}
          </p>
          <button onClick={decreaseItemAmount}>-</button>
          <input type="number" value={inputValue} />
          <button onClick={increaseItemAmount}>+</button>
        </div>
        <button className={styles.add} onClick={() => addItemToCart(item)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
