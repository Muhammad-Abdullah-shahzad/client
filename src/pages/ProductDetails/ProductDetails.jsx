import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDescription from '../../components/ProductDetails/ProductDescription';

// Temporary mock data (can be moved to a separate file later)
const products = [
  {
    id: 1,
    name: "Nicole Jacket",
    gender: "Women",
    material: "Silk, Wool",
    price: "$1,250",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1000&q=80",
      "https://images.unsplash.com/photo-1539109132381-31a15b2c3281?w=1000&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=1000&q=80",
    ],
    stock: 12,
    rating: 4.8,
    category: "Outerwear",
    colors: ["Black", "Beige"],
    sellCount: 145,
    tags: ["new arrival", "winter", "premium"],
  },
  {
    id: 2,
    name: "Hector Trousers",
    gender: "Men",
    material: "Silk",
    price: "€ 2,000.00",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1000&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1000&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&q=80",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=1000&q=80",
    ],
    stock: 8,
    rating: 4.5,
    category: "Pants",
    colors: ["Cherry Sangria", "Off White"],
    sellCount: 89,
    tags: ["formal", "classic", "wool"],
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === String(id)) || products[1]; // Handle string IDs from API

  return (
    <div className="product-details-page min-h-screen">
      <ProductDescription product={product} />
    </div>
  );
}
