import React, { use } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewsCard from './ReviewsCard';


export default function Reviews({ reviewsPromise }) {
    const reviews = use(reviewsPromise);
    console.log(reviews)
    return (
        <div>
            <div className='text-center my-24'>
                <h2 className='text-3xl font-bold my-2'>What our customers are sayings</h2>
                <p className='text-sm'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper my-10"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <ReviewsCard review={review} />
                        </SwiperSlide>)
                    }



                </Swiper>
            </>
        </div>
    )
}
