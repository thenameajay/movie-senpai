"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import './ComponentsStyles/Slider.css'
import Image from "next/image";

export default function Slider({ sliderData }) {
    console.log("sliderdata: ",sliderData)
    return (
        <div className="slider-div">
            <h2 className="slider-heading">{sliderData?.type}</h2>
            <Swiper
                modules={[Navigation]}
                navigation // enables next/prev buttons
                spaceBetween={20}
                slidesPerView={4} // visible slides
                draggable={true}
                grabCursor={true}
                // mousewheel={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="slider-swiper"
            >
                {
                    sliderData?.slides?.map((slide, i) => (
                        <SwiperSlide className="swiper-slide" key={i}>
                            <div className="swiper-slide-outer-div">
                                <div className="slide-image-div">
                                    {/* <Image
                                        className="slide-image"
                                        src={slide?.img}
                                        alt={slide?.title}
                                        height={800}
                                        width={800}
                                    /> */}
                                    <div className="slide-image">

                                    </div>
                                </div>
                                <h4 className="slide-title">
                                    {slide?.title}
                                </h4>
                                {console.log(slide)}
                                <p>{slide?.genere?.join(", ")}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
}