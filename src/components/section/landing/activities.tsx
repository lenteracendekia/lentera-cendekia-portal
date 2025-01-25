"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Header } from "@/components/ui/header";
import Image from "next/image";
import { useState, useMemo } from "react";

export const Activities: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setApi] = useState<CarouselApi>();

  return useMemo(
    () => (
      <section className={className} {...rest}>
        <Header
          id="activities"
          title="Aktivitas"
          subtitle="Mau Tahu Aktivitas Seru di Lentera Cendekia?"
          direction="center"
        />
        <div className="mx-auto max-w-2xl">
          <Carousel
            setApi={setApi}
            className="w-full min-w-2xl"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex items-center justify-center p-4">
                      <span className="text-4xl font-semibold">
                        <Image
                          src="/images/hero.png"
                          alt="Activity Image"
                          width={880}
                          height={880}
                          className="rounded-xl"
                        />
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="py-2 text-center text-sm text-muted-foreground hidden md:flex items-center justify-center gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>
    ),
    [className, rest]
  );
};
