import React from 'react';

export default function MoreOfUs() {
  return (
    <section className="w-full max-w-[1400px] mx-auto bg-[var(--bg-color-main)] py-10">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Item 1: Full Image (Man) */}
        <div className="w-full h-[500px] md:h-[700px]">
          <img
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&h=1200&fit=crop"
            alt="Model in suit"
            className="w-full h-full object-cover p-8"
          />
        </div>

        {/* Item 2: Text / Product feature */}
        <div className="w-full h-[500px] md:h-[700px] flex flex-col items-center justify-center bg-[#fdfdfc] p-8">
          <div className="w-75 h-100 md:w-75 md:h-154 mb-8 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop"
              alt="Finishing accents"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-serif text-center mb-3 text-[#2c2c2c]">Delicate finishing accents</h3>
          <p className="text-[11px] md:text-xs text-center text-gray-500 mb-10 max-w-xs leading-relaxed font-serif italic">
            Spun from precious silks and cashmeres, our scarves combine the Maison's sartorial touch with a fluid shape.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="#" className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--main-color)] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[var(--main-color)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              - Women -
            </a>
            <a href="#" className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--main-color)] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[var(--main-color)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              - Men -
            </a>
          </div>
        </div>

        {/* Item 3: Image with vertical buttons */}
        <div className="w-full h-[500px] md:h-[700px] flex flex-col items-center justify-center bg-[#fdfdfc] p-8">
          <div className="w-75 h-100 md:w-75 md:h-154 mb-8 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop"
              alt="Finishing accents"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-serif text-center mb-3 text-[#2c2c2c]">Delicate finishing accents</h3>
          <p className="text-[11px] md:text-xs text-center text-gray-500 mb-10 max-w-xs leading-relaxed font-serif italic">
            Spun from precious silks and cashmeres, our scarves combine the Maison's sartorial touch with a fluid shape.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="#" className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--main-color)] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[var(--main-color)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              - Women -
            </a>
            <a href="#" className="text-[10px] sm:text-xs tracking-widest uppercase text-[var(--main-color)] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-[var(--main-color)] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              - Men -
            </a>
          </div>
        </div>

        {/* Item 4: Large Picture */}
        <div className="w-full h-[500px] md:h-[700px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=1200&fit=crop"
            alt="Scarf on chair setup"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section >
  );
}
