import clsx from "clsx";
import Image from "next/image";
import { useMemo } from "react";

interface AdventageProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  reverse?: boolean;
  title: string;
  description: string;
}

export const Advantage: React.FC<AdventageProps> = ({
  image,
  reverse = false,
  title,
  description,
  ...rest
}) =>
  useMemo(
    () => (
      <div
        {...rest}
        className={clsx(
          "flex flex-col items-center gap-12",
          reverse && "md:flex-row-reverse",
          !reverse && "md:flex-row"
        )}
      >
        <Image
          src={image}
          alt={`Advantage ${title}`}
          width={321}
          height={321}
        />
        <div
          className={clsx(
            "flex flex-col justify-center gap-5 px-5 max-w-[770px]",
            reverse && "text-right"
          )}
        >
          <h3 className="text-3xl font-medium text-neutral-base">{title}</h3>
          <p className="text-2xl text-neutral-40">{description}</p>
        </div>
      </div>
    ),
    [title, description, image, reverse, rest]
  );
