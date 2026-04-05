import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
    'https://images.unsplash.com/photo-1604152087112-5b1acd817c87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnx1eEhXSW1JbldUZ3x8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1631002724711-d1ae3cf651b0?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export default function Crousal() {
    return (
        <div className="w-full ">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt=""
                            className="w-full h-[80vh] md:h-[90vh] object-cover background-position-center"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}