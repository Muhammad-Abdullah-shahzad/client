import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Nicole Jacket",
    gender: "Women",
    material: "Silk, Wool",
    price: "$1,250",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
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
    material: "Silk, Wool",
    price: "$890",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop",
    stock: 8,
    rating: 4.5,
    category: "Pants",
    colors: ["Grey", "Navy"],
    sellCount: 89,
    tags: ["formal", "classic", "wool"],
  },
  {
    id: 3,
    name: "Loom Bag L25",
    gender: "Women",
    material: "Calfskin",
    price: "$2,100",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    stock: 3,
    rating: 4.9,
    category: "Accessories",
    colors: ["Tan", "Black"],
    sellCount: 34,
    tags: ["bestseller", "leather", "luxury"],
  },
  {
    id: 4,
    name: "Seaside Walk",
    gender: "Men",
    material: "Suede",
    price: "$650",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    stock: 20,
    rating: 4.7,
    category: "Footwear",
    colors: ["Brown", "Sand"],
    sellCount: 256,
    tags: ["summer", "casual", "suede"],
  },
  {
    id: 5,
    name: "Elara Dress",
    gender: "Women",
    material: "Cashmere",
    price: "$1,480",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    stock: 5,
    rating: 5.0,
    category: "Dresses",
    colors: ["Red", "White"],
    sellCount: 67,
    tags: ["evening", "cashmere", "elegant"],
  },
  {
    id: 6,
    name: "Atlas Sneakers",
    gender: "Men",
    material: "Leather",
    price: "$720",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    stock: 15,
    rating: 4.6,
    category: "Footwear",
    colors: ["White", "Black"],
    sellCount: 420,
    tags: ["trending", "sport", "leather"],
  },
  {
    id: 7,
    name: "Luna Scarf",
    gender: "Women",
    material: "Silk",
    price: "$380",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=500&fit=crop",
    stock: 25,
    rating: 4.8,
    category: "Accessories",
    colors: ["Blue", "Pink", "Yellow"],
    sellCount: 150,
    tags: ["gift", "silk", "accessory"],
  },
  {
    id: 8,
    name: "Orion Watch",
    gender: "Men",
    material: "Stainless Steel",
    price: "$3,200",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop",
    stock: 2,
    rating: 4.9,
    category: "Jewelry",
    colors: ["Silver", "Gold"],
    sellCount: 12,
    tags: ["limited", "jewelry", "premium"],
  },
];

export default function Products() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-center text-2xl tracking-widest uppercase mb-12 text-[#2c2c2c] font-normal">
        Our Collection
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
