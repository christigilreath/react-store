import { useState, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";

import styles from "./ProductPage.module.css";

function ProductPage() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getProducts();

    return () => {
      abortController.abort();
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className={styles.products}>
        {products && (
          <>
            {products.map((product) => (
              <div key={product.id} className={styles.card}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  src={product.image}
                  price={product.price}
                  styles={styles}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
export default ProductPage;
