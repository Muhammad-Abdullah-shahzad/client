const textColor = "text-[rgb(157,82,72)]";

export default function CategoryCard({ category }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-6 text-center">
        <p className="text-[10px] sm:text-[11px] tracking-widest text-[#2c2c2c] uppercase mb-3">
          {category.season}
        </p>
        <h3 className="text-xl sm:text-[22px] font-serif text-[#1a1a1a] mb-2 font-medium">
          {category.title}
        </h3>
        <p className={`text-xs sm:text-[13px] tracking-wide ${textColor}`}>
          - {category.gender} -
        </p>
      </div>
    </div>
  );
}
