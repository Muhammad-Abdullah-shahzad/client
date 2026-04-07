import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiHeart, FiPlus, FiMinus, FiChevronDown, FiChevronUp } from "react-icons/fi";

const ProductDescription = ({ product }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordions = [
    { title: "Product details", content: "With their relaxed, yet precisely tailored cut, the Hector trousers provide a softened take on transitional suiting. They are cut from a textured blend of silk and wool, and feature a mid-rise waist, pleated front and wide legs. Side and back pockets, and belt loops." },
    { title: "Care & Maintenance", content: "Professional dry clean only. Do not wash. Do not bleach. Do not tumble dry. Cool iron." },
    { title: "Return & Exchange", content: "Free returns within 30 days of purchase. Items must be in original condition with tags attached." },
    { title: "Payment Options & Security", content: "We accept all major credit cards, PayPal, and Apple Pay. Your transaction is secure and encrypted." },
    { title: "Shipping Information", content: "Complementary standard shipping on orders over $1,000. Express shipping available at checkout." }
  ];

  return (
    <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto bg-[var(--bg-color-main)] text-[#2c2c2c] font-light">
      {/* Left: Image Carousel */}
      <div className="lg:w-[60%] w-full h-[70vh] lg:h-[90vh] overflow-hidden relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          style={{
            "--swiper-navigation-color": "var(--main-color)",
            "--swiper-pagination-color": "var(--main-color)",
            "--swiper-navigation-size": "25px",
          }}
          className="h-full w-full"
          loop={true}
        >
          {product.images.map((img, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center bg-[var(--bg-color-main)]">
              <img
                src={img}
                alt={`${product.name} - View ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right: Product Details (Sticky) */}
      <div className="lg:w-[40%] w-full relative px-6 py-10 lg:px-12 lg:py-16">
        <div className="lg:sticky lg:top-[100px] flex flex-col gap-8">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl lg:text-2xl font-normal tracking-wide">{product.name}</h1>
              <p className="text-[rgb(157,82,72)] text-sm mt-1">{product.material}</p>
            </div>
            <FiHeart className="text-xl cursor-pointer hover:fill-[rgb(157,82,72)] hover:text-[rgb(157,82,72)] transition-colors" />
          </div>

          {/* Price */}
          <div className="text-lg lg:text-xl font-normal">
            {product.price}
          </div>

          <hr className="border-[#e0e0e0]" />

          {/* Color Selector */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-4">Color : Cherry Sangria (30LY)</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 border border-[#2c2c2c] p-[2px] cursor-pointer">
                <div className="w-full h-full bg-[#E5E4E2]"></div>
              </div>
              <div className="w-10 h-10 border border-transparent hover:border-[#2c2c2c] p-[2px] cursor-pointer">
                <div className="w-full h-full bg-[#B9444B]"></div>
              </div>
            </div>
          </div>

          <hr className="border-[#e0e0e0]" />

          {/* Size Selector */}
          <div className="flex justify-between items-center group cursor-pointer border-b border-[#e0e0e0] pb-2 hover:border-[#2c2c2c] transition-colors">
            <span className="text-sm tracking-wide">Select Size</span>
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase underline underline-offset-4 text-[rgb(157,82,72)] font-medium">Size Guide</span>
              <FiChevronDown className="text-sm" />
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col gap-3 text-xs tracking-wide">
            <p>Gift guide <a href="#" className="underline underline-offset-2 text-[rgb(157,82,72)] font-medium">Discover more</a></p>
            <p>You need help? <a href="#" className="underline underline-offset-2 text-[rgb(157,82,72)] font-medium">Contact us</a></p>
            <p>Our packaging <a href="#" className="underline underline-offset-2 text-[rgb(157,82,72)] font-medium">Discover more</a></p>
          </div>

          {/* Description Snippet */}
          <div className="text-sm leading-relaxed text-gray-600">
            <p>With their relaxed, yet precisely tailored cut, the Hector trousers provide a softened take on transitional suiting. They are cut from Te...</p>
            <button className="text-[rgb(157,82,72)] underline mt-1 font-medium">Read more</button>
          </div>

          {/* Accordion Sections */}
          <div className="flex flex-col border-t border-[#e0e0e0] mt-4">
            {accordions.map((item, idx) => (
              <div key={idx} className="border-b border-[#e0e0e0]">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center py-5 uppercase text-[10px] tracking-[0.2em] font-medium text-left"
                >
                  {item.title}
                  {activeAccordion === idx ? <FiMinus size={12} /> : <FiPlus size={12} />}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === idx ? "max-h-40 pb-5" : "max-h-0"
                    }`}
                >
                  <p className="text-xs leading-relaxed text-gray-600">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
