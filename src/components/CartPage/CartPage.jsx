import { useOutletContext } from "react-router-dom";
import CartItemCard from "../CartItemCard/CartItemCard";
import styles from "./CartPage.module.css";
import { Link } from "react-router-dom";
function CartPage() {
  const [cart, setCart] = useOutletContext();
  const total = cart.reduce((acc, curr) => {
    return (acc += curr.quantity * curr.price);
  }, 0);
  if (cart.length === 0) {
    return (
      <>
        <p>No Items In Cart</p>
        <Link to={"../productpage"}>Click Here To Shop</Link>
      </>
    );
  }

  return (
    <div className={styles.content}>
      {cart.length > 0 &&
        cart.map((item) => (
          <div className={styles.cartCard} key={item.id}>
            <CartItemCard item={item} styles={styles} />
          </div>
        ))}
      <div>Total: {total}</div>
    </div>
  );
}

export default CartPage;
