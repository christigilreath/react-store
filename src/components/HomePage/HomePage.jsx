import styles from "./HomePage.module.css";
import imageURL from "../../assets/homepageImg.jpg";
function HomePage() {
  return (
    <section>
      <img src={imageURL} alt="homepage image" />
      <div className={styles.description}>
        <h2>Welcome to My Fake Store!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          a, tempora tempore porro, sunt iure deleniti ullam eligendi veniam
          mollitia assumenda id voluptas! Minus quibusdam rerum molestias soluta
          illo eius.
        </p>
      </div>
    </section>
  );
}

export default HomePage;
