import styles from './productsList.module.css'
import ProductCard from '../components/ProductCard'

export default async function ProductsList() {
    /*
    &skip=10&select=title,price not needed right now 
    limit: how many products to fetch, 
    skip: how many products to skip, this is for pagination, 
    select: which fields to select
    sortBy: which field to sort by,
    order: asc or desc
    everything is optional, and joins with &
   */
  const data = await fetch(
    "https://dummyjson.com/products?limit=12&sortBy=rating&order=desc"
  );
  const products = await data.json();

  return (
    <ul className={styles["products-list"]}>
      {products.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}
