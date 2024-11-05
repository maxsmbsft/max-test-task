"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselProps } from "@/types";

export default function Carousel({ images }: CarouselProps) {
  return (
    <Swiper
      navigation={true}
      pagination={{ type: "progressbar" }}
      modules={[Navigation, Pagination]}
      className={styles.swiper}
    >
      {images.map(({ _id, url }) => (
        <SwiperSlide key={_id} className={styles.swiperSlide}>
          <Image src={url} alt="Фото авто" width={881} height={763} priority />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
