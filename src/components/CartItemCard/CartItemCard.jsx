import { useOutletContext } from "react-router-dom";

function CartItemCard({ item, styles }) {
  const [cart, setCart] = useOutletContext();

  function handleRemoveItem(id) {
    setCart(cart.filter((cartItem) => id !== cartItem.id));
  }
  return (
    <>
      <div>
        <img className={styles.thumbnail} src={item.src} alt={item.title} />
      </div>
      <h4>{item.title}</h4>

      <p>
        {"$"}
        {item.price}
      </p>
      <p>{`Quantity: ${item.quantity}`}</p>
      <div>
        <button
          className={styles.removeBtn}
          onClick={(e) => handleRemoveItem(item.id)}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default CartItemCard;
