import { Header } from "@/components/ui/header";
import { CONTENT } from "@/constants/content";
import Image from "next/image";
import React, { useMemo } from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  content: string[];
  image: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title = "",
  subtitle = "",
  content,
  image,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col-reverse ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12`}
    >
      <Image src={image} alt={title} width={432} height={432} />
      <div
        className={`flex flex-col justify-center px-5 max-w-[770px] ${
          reverse ? "text-start md:text-end" : "text-start"
        }`}
      >
        {title && (
          <Header
            title={title}
            subtitle={subtitle}
            direction={reverse ? "right" : "left"}
          />
        )}
        {content.map((text, index) => (
          <p
            key={index}
            className="text-2xl text-neutral-40"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </div>
  );
};

export const About: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) =>
  useMemo(
    () => (
      <section {...rest} className={className}>
        <div className="flex flex-col items-center gap-12">
          <Section
            title="Tentang Kami"
            subtitle="Belum mengenal kami?"
            content={CONTENT.about.one.contents}
            image={CONTENT.about.one.image}
          />
          <Section
            title=""
            subtitle=""
            content={CONTENT.about.two.contents}
            image={CONTENT.about.two.image}
            reverse
          />
        </div>
      </section>
    ),
    [className, rest]
  );
