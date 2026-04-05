const textColor = "text-[rgb(157,82,72)]";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="bg-[#f0ece6] w-full aspect-square flex items-center justify-center overflow-hidden rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-[75%] h-[75%] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 text-sm tracking-wide text-[#2c2c2c] font-normal">
        {product.name}
      </h3>
      <p className={`mt-1 text-xs tracking-wide ${textColor}`}>
        {product.material}
      </p>

      {/* Extra details — hidden by default, slide in on hover */}
      <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-400 ease-in-out group-hover:max-h-20 group-hover:opacity-100">
        <p className="mt-2 text-xs tracking-wide text-[#2c2c2c]">
          {product.gender}
        </p>
        <p className={`mt-1 text-xs font-medium ${textColor}`}>
          {product.price}
        </p>
      </div>
    </div>
  );
}
