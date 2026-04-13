import React from 'react';
import useGET from '../../hooks/useGET';
import { IoCloseOutline } from 'react-icons/io5';

const Filters = ({ 
  isOpen, 
  onClose, 
  selectedGender, 
  setSelectedGender, 
  selectedCategory, 
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice
}) => {
  const { data: categories, loading } = useGET(`${import.meta.env.VITE_API_URL}/myecom/products/categories`);

  const genders = ['Man', 'Women', 'Unisex'];
  const priceOptions = [
    { label: 'High to Low', value: 'high_to_low' },
    { label: 'Low to High', value: 'low_to_high' }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-[101] transform transition-transform duration-500 ease-in-out shadow-2xl p-10 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl" style={{ fontFamily: '"Playwrite IE", cursive', color: 'rgb(141, 23, 23)' }}>
              My Ecommerce
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#2c2c2c]">
              <IoCloseOutline size={28} />
            </button>
          </div>
          <h2 className="text-[10px] tracking-[0.5em] uppercase font-light text-gray-400">Filters</h2>
        </div>

        <div className="space-y-16 pb-32">
          {/* Gender Filter */}
          <div>
            <h3 className="text-[13px] tracking-[0.3em] uppercase mb-10 text-[#2c2c2c] font-semibold border-b border-gray-100 pb-3">Gender</h3>
            <div className="flex flex-col space-y-4">
              {['All', ...genders].map(gender => (
                <button
                  key={gender}
                  onClick={() => setSelectedGender(gender === 'All' ? '' : gender)}
                  className={`text-left text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
                    (selectedGender === gender || (gender === 'All' && !selectedGender))
                      ? 'text-[#2c2c2c] font-bold border-l-2 border-[#2c2c2c] pl-6' 
                      : 'text-gray-400 pl-0 hover:text-[#2c2c2c] hover:pl-2'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-[13px] tracking-[0.3em] uppercase mb-10 text-[#2c2c2c] font-semibold border-b border-gray-100 pb-3">Price</h3>
            <div className="relative group">
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full bg-white text-[#2c2c2c] text-xs tracking-[0.2em] uppercase border border-gray-200 p-4 outline-none focus:border-[#2c2c2c] transition-all duration-500 appearance-none cursor-pointer"
              >
                {priceOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-white">
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-[#2c2c2c] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-[13px] tracking-[0.3em] uppercase mb-10 text-[#2c2c2c] font-semibold border-b border-gray-100 pb-3">Category</h3>
            <div className="flex flex-col space-y-4 max-h-[40vh] overflow-y-auto pr-4 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory('')}
                className={`text-left text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
                  !selectedCategory 
                    ? 'text-[#2c2c2c] font-bold border-l-2 border-[#2c2c2c] pl-6' 
                    : 'text-gray-400 pl-0 hover:text-[#2c2c2c] hover:pl-2'
                }`}
              >
                All Categories
              </button>
              {loading ? (
                <div className="space-y-3">
                    {[1,2,3].map(i => <div key={i} className="h-4 bg-gray-100 animate-pulse w-3/4"></div>)}
                </div>
              ) : (
                categories?.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
                      selectedCategory === cat 
                        ? 'text-[#2c2c2c] font-bold border-l-2 border-[#2c2c2c] pl-6' 
                        : 'text-gray-400 pl-0 hover:text-[#2c2c2c] hover:pl-2'
                    }`}
                  >
                    {cat}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 left-0 right-0 bg-white pt-6 pb-10 border-t border-gray-50 px-2 mt-auto">
           <button 
            onClick={() => {
                setSelectedGender('');
                setSelectedCategory('');
                setSelectedPrice('high_to_low');
            }}
            className="w-full py-5 text-[10px] tracking-[0.5em] uppercase border border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white transition-all duration-700 font-medium"
           >
             Reset Filters
           </button>
        </div>
      </div>
    </>
  );
};

export default Filters;
