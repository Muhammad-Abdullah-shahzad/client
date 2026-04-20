import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDescription from '../../components/ProductDetails/ProductDescription';
import useGET from '../../hooks/useGET';

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, loading, error } = useGET(`${import.meta.env.VITE_API_URL}/myecom/products/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color-main)]">
        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 animate-pulse">
          Loading product...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color-main)]">
        <p className="text-red-500 tracking-widest uppercase text-xs">
          Error loading product: {error}
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color-main)]">
        <p className="tracking-widest uppercase text-xs">
          Product not found
        </p>
      </div>
    );
  }

  return (
    <div className="product-details-page min-h-screen">
      <ProductDescription product={product} />
    </div>
  );
}
