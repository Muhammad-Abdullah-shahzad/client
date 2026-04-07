const textColor = "text-[rgb(157,82,72)]";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="bg-[var(--bg-color-main)] w-full aspect-[3/4] flex items-center justify-center overflow-hidden rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="bg-[var(--bg-color-main)] transition-all ease-in-out duration-300 px-16 py-2 group-hover:translate-y-[-50px] ">
        <h3 className="mt-3 text-sm tracking-wide text-[#2c2c2c] font-normal">
          {product.name}
        </h3>
        <p className={`mt-1 text-xs tracking-wide ${textColor}`}>
          {product.material}
        </p>
      </div>



    </div>
  );
}
