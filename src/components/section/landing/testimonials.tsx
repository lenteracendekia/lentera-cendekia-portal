"use client";

import { Header } from "@/components/ui/header";
import { TestimonyCard } from "@/components/ui/testimony-card";
import { CONTENT } from "@/constants/content";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const Testimonials: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) =>
  useMemo(
    () => (
      <section className={className} {...rest}>
        <Header
          id="testimonials"
          title="Testimoni"
          subtitle="Apa Kata Mereka Tentang Lentera Cendekia?"
          direction="center"
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay
          className="w-[70dvw] h-full"
        >
          {CONTENT.testimonials.map((testimony, index) => (
            <SwiperSlide key={index}>
              <TestimonyCard {...testimony} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    ),
    [className, rest]
  );
