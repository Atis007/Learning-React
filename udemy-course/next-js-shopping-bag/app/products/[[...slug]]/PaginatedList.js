'use client'
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

export default function PaginatedList({ initialProducts, totalProducts, category }) {
    const [products, setProducts] = useState(initialProducts);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLoadMore = async () => {
        setError("");
        setLoading(true);
        try {
        const response = await fetch(`https://dummyjson.com/products${category ? '/category/' + category : ''}?limit=8&skip=${products.length}`);
        const data = await response.json(); //response can be res for short
        setProducts([...products, ...data.products]); // Append new products to existing list
        } catch(error) {
            setError('Failed to load more products.');
        } finally { {/* the finally is executing, no matter what */}
            setLoading(false);
        }
    }
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      { products.length < totalProducts ? <button disabled={loading} onClick={handleLoadMore}>{ loading ? <Loader /> : 'Load more' }</button> : '' }
      { error && <p>{error}</p> }
    </>
  );
}
