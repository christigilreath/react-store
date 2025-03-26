import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <header>
      <h1>My Store</h1>
      <div className={styles.navigation}>
        <div>
          <p>Home</p>
          <p>Store</p>
        </div>
        <div>
          <p>Cart</p>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
