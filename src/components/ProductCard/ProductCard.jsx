import { useState } from "react";
import { useOutletContext } from "react-router-dom";
function ProductCard({ title, src, price, styles }) {
  const setCart = useOutletContext();
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

  function handleAddToCart() {
    setCart((prev) => [...prev, item]);
    setInputValue(0);
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
          <input
            type="number"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button onClick={increaseItemAmount}>+</button>
        </div>
        <button className={styles.add} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
