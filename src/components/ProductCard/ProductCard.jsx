import { useState } from "react";
import { useOutletContext } from "react-router-dom";
function ProductCard({ id, title, src, price, styles }) {
  const [cart, setCart] = useOutletContext();
  const [inputValue, setInputValue] = useState(0);
  const item = {
    id: id,
    src: src,
    title: title,
    src: src,
    price: price,
    quantity: Number(inputValue),
  };
  function increaseItemQuantity() {
    return setInputValue(inputValue + 1);
  }

  function decreaseItemQuantity() {
    if (inputValue > 0) {
      return setInputValue(inputValue - 1);
    }
  }

  function handleAddToCart(item) {
    console.log(item);
    if (item.quantity === 0) {
      return;
    }
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            const newQuantity = cartItem.quantity + item.quantity;
            return { ...cartItem, quantity: newQuantity };
          } else {
            return { ...cartItem };
          }
        })
      );
      return;
    }

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
          <button className={styles.amountBtn} onClick={decreaseItemQuantity}>
            -
          </button>
          <input
            className={styles.amountInput}
            type="number"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button className={styles.amountBtn} onClick={increaseItemQuantity}>
            +
          </button>
        </div>
        <button className={styles.add} onClick={() => handleAddToCart(item)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
