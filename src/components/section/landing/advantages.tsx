import { useMemo } from "react";
import { CONTENT } from "@/constants/content";
import { Advantage } from "@/components/ui/advantage";
import { Header } from "@/components/ui/header";

export const Advantages: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) =>
  useMemo(
    () => (
      <section {...rest}>
        <Header
          id="advantages"
          title="Keunggulan"
          subtitle="Kenapa harus pilih LC?"
          direction="center"
        />
        <div className="flex flex-col items-center gap-12 md:gap-4 text-sm">
          {CONTENT.advantages.map((advantage, index) => (
            <Advantage key={index} reverse={index % 2 == 1} {...advantage} />
          ))}
        </div>
      </section>
    ),
    [rest]
  );
