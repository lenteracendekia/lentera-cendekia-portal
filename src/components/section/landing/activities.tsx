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
import { useState, useMemo, useEffect } from "react";

export const Activities: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setApi] = useState<CarouselApi>();

  const [activityImages, setActivityImages] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("/api/activities");
      const data = await res.json();
      setActivityImages(data);
    }
    fetchImages();
  }, []);

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
              {activityImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="h-[390px] flex items-center justify-center">
                    <CardContent className="flex min-w-full min-h-full flex-col items-center justify-center gap-4 p-3">
                      <Image
                        src={image}
                        alt={`Activity ${index + 1}`}
                        width={300}
                        height={300}
                        className="rounded-xl min-w-full min-h-full object-cover"
                      />
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
    [className, activityImages, rest]
  );
};
