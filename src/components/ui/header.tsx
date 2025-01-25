import clsx from "clsx";
import { useMemo } from "react";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  direction: "left" | "center" | "right";
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  direction,
  ...rest
}) =>
  useMemo(
    () => (
      <div
        {...rest}
        className={clsx(
          "flex flex-col justify-center gap-2 py-5",
          {
            "items-start": direction === "left",
            "items-center": direction === "center",
            "items-end": direction === "right",
          },
          "-scroll-m-96"
        )}
      >
        <span className="px-4 py-2 font-bold rounded-full bg-warning-20 text-warning-60">
          {title}
        </span>
        <p className={`text-3xl font-medium text-${direction}`}>{subtitle}</p>
      </div>
    ),
    [title, subtitle, direction, rest]
  );
