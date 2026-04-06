import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    season: "SPRING/SUMMER 2026",
    title: "Loom",
    gender: "Women",
    // Handbag image from Unsplash
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=1200&fit=crop",
  },
  {
    id: 2,
    season: "SPRING/SUMMER 2026",
    title: "Shirts",
    gender: "Men",
    // Man wearing a shirt from Unsplash
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&h=1200&fit=crop",
  },
  {
    id: 3,
    season: "SPRING/SUMMER 2026",
    title: "Shoes",
    gender: "Women",
    // Women's shoes from Unsplash
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1200&fit=crop",
  },
];

export default function MainCategories() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-[#faf9f5]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
