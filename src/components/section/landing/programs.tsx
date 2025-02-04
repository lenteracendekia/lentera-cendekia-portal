import { Header } from "@/components/ui/header";
import { ProgramCard } from "@/components/ui/program-card";
import { CONTENT } from "@/constants/content";
import React, { useMemo } from "react";

export const Programs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) =>
  useMemo(
    () => (
      <section {...rest} className={className}>
        <Header
          id="programs"
          title="Program Kami"
          subtitle="Program Unggulan Kami"
          direction="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mx-auto md:w-[60%]">
          {CONTENT.programs.map((program, index) => (
            <ProgramCard
              key={index}
              name={program.name}
              short_description={program.short_description}
              image={program.image}
              className="p-4 w-full max-w-sm min-h-[320px] flex flex-col justify-between"
            />
          ))}
        </div>
      </section>
    ),
    [className, rest]
  );
