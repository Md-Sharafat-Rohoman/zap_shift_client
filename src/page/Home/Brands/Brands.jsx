import React from 'react'
// import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import casio from "../../../assets/brands/casio.png"
import amazon from "../../../assets/brands/amazon.png"
import moonstar from "../../../assets/brands/moonstar.png"
import star from "../../../assets/brands/star.png"
import startPeople from "../../../assets/brands/start_people.png"
import randstad from "../../../assets/brands/randstad.png"


const brandsLogos = [casio, amazon, moonstar, star, startPeople, randstad,];

export default function Brands() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                '@0.00': {

                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '@1.50': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper my-10"
        >
            {
                brandsLogos.map((brands, index) => <SwiperSlide key={index}><img src={brands} alt="" /></SwiperSlide>)
            }
        </Swiper>
    )
}
