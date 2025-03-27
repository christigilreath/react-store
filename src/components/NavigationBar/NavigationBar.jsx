import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";
function NavigationBar() {
  return (
    <header>
      <h1>My Store</h1>
      <div className={styles.navigation}>
        <div>
          <Link to="/">Home</Link>
          <Link to="productpage">Store</Link>
        </div>
        <div>
          <Link to="cartpage">Cart</Link>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
