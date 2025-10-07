"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import './ComponentsStyles/Slider.css'
import Image from "next/image";

export default function TopAutoSlider({ sliderData }) {
    return (
        <div className="top-slider-div">
            <Swiper
                modules={[Navigation]}
                navigation // enables next/prev buttons
                // spaceBetween={20}
                slidesPerView={1} // visible slides
                draggable={true}
                grabCursor={true}
                // mousewheel={true}
                // breakpoints={{
                //     640: { slidesPerView: 2 },
                //     768: { slidesPerView: 3 },
                //     1024: { slidesPerView: 4 },
                // }}
                className="top-slider-swiper"
            >
                {
                    sliderData?.slides?.map((slide, i) => (
                        <SwiperSlide className="top-swiper-slide" key={i}>
                            <div className="top-swiper-slide-outer-div">
                                {/* <div className="top-slide-image-div"> */}
                                    {/* <Image
                                        className="slide-image"
                                        src={slide?.img}
                                        alt={slide?.title}
                                        height={800}
                                        width={800}
                                    /> */}
                                {/* </div> */}
                                <div className="top-slider-details">
                                    <h4 className="top-slide-title">
                                        {slide?.title}
                                    </h4>
                                    <p>
                                        {slide?.genere?.join(", ")}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
}