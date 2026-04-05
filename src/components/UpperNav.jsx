import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import './UpperNav.css';

const announcements = [
  "🌟 Free shipping on all orders over $50!",
  "🔥 Mid-Season Sale! Up to 50% off select items.",
  "✨ New arrivals just landed. Shop the latest trends.",
  "✉️ Subscribe to our newsletter for 10% off your first order."
];

const UpperNav = () => {
  return (
    <div className="upper-nav-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        allowTouchMove={false} // Prevents dragging since it's just a text carousel
        className="upper-nav-swiper"
      >
        {announcements.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="upper-nav-content">
              <p className="upper-nav-text">{text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpperNav;
