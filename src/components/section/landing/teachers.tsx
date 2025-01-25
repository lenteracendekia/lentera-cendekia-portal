"use client";

import { TeacherCard } from "@/components/ui/teacher-card";
import { CONTENT } from "@/constants/content";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Header } from "@/components/ui/header";

export const Teachers: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return useMemo(
    () => (
      <section {...props} className={className}>
        <Header
          id="teachers"
          title="Guru"
          subtitle="Guru-guru yang berpengalaman dan berdedikasi"
          direction="center"
        />
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500 }}
          draggable
          breakpoints={{
            540: { slidesPerView: 1, spaceBetween: 0 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            792: { slidesPerView: 3, spaceBetween: 60 },
            992: { slidesPerView: 4, spaceBetween: 120 },
          }}
          className="w-full lg:w-[70dvw] mx-auto px-4"
        >
          {CONTENT.teachers.map((teacher, index) => (
            <SwiperSlide key={index}>
              <TeacherCard {...teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    ),
    [className, props]
  );
};
