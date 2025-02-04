import clsx from "clsx";
import React, { useMemo } from "react";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  subtitle: string;
}

export const Hero: React.FC<HeroProps> = ({
  image,
  title,
  subtitle,
  className,
  ...rest
}) =>
  useMemo(
    () => (
      <section
        {...rest}
        id="hero"
        className={clsx("relative h-[100dvh] bg-cover bg-center", className)}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />
        <div className="relative z-10 flex flex-col justify-end w-full h-full gap-4 p-5 md:p-12">
          <p
            className="font-medium text-[32px] md:text-[48px] text-white leading-[110%] md:w-[580px] w-full"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-base md:text-xl text-white md:w-[532px] w-full">
            {subtitle}
          </p>
        </div>
      </section>
    ),
    [rest, className, image, title, subtitle]
  );
