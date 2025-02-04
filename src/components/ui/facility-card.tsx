import clsx from "clsx";
import { useMemo } from "react";

interface FacilityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
  base_icon_color?: string;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({
  icon,
  title,
  description,
  base_icon_color = "bg-warning-30 text-warning-60",
  ...rest
}) =>
  useMemo(
    () => (
      <div
        {...rest}
        className="flex flex-col justify-between w-full h-full gap-[48px] bg-neutral-10 rounded-xl md:p-6 p-3"
      >
        <div
          className={clsx(
            "flex items-center justify-center w-24 h-16 rounded-md",
            base_icon_color
          )}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-medium md:text-[28px] text-xl text-neutral-base">
            {title}
          </p>
          <p className="text-base text-neutral-40">{description}</p>
        </div>
      </div>
    ),
    [rest, base_icon_color, icon, title, description]
  );
