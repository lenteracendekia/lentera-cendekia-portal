import { useMemo } from "react";

interface FacilityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({
  icon,
  title,
  description,
}) =>
  useMemo(
    () => (
      <div className="flex flex-col justify-between w-full h-full gap-[48px] bg-neutral-10 rounded-xl md:p-6 p-3">
        <div className="flex items-center justify-between w-full">{icon}</div>
        <div className="flex flex-col gap-3">
          <p className="font-medium md:text-[28px] text-xl text-neutral-base">
            {title}
          </p>
          <p className="text-base text-neutral-40">{description}</p>
        </div>
      </div>
    ),
    [icon, title, description],
  );
