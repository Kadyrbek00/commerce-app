import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import Products from '../Products/Products';


export default function HomePage() {

    return (
        <div>
            <Swiper
                speed={1000}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <img
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        src="https://boulevardone.com/cdn/shop/files/WhatsApp_Image_2023-07-20_at_11.57.29_AM.jpg?v=1689846430&width=1500"
                        alt="someimage"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        src="https://iamthatlady.com/wp-content/uploads/2022/05/Untitled-design-2022-05-17T082803.593.jpg"
                        alt="someimage"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        src="https://cdn11.bigcommerce.com/s-gv80all3e/product_images/uploaded_images/flateamshop-headers-sale-1500x500.jpg"
                        alt="someimage"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        src="https://www.valentinaboutique.ch/cdn/shop/files/slide_01.jpg?v=1683920698&width=1500"
                        alt="someimage"
                    />
                </SwiperSlide>
            </Swiper>

            <Products />
        </div>
    );
};
