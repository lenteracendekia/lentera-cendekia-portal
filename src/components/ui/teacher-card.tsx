import Image from "next/image";
import { useMemo } from "react";

interface TeacherCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  graduated_at: string;
  image: string;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  role,
  graduated_at,
  image,
  ...rest
}) =>
  useMemo(
    () => (
      <div
        {...rest}
        className="flex flex-col items-center w-full p-4 mx-4 rounded-xl"
      >
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="absolute w-[200px] h-[250px] bg-warning-base rounded-t-full"></div>
          <Image
            src={image}
            alt={`Profile Picture ${name}`}
            width={250}
            height={250}
            className="z-10 rounded-full"
          />
        </div>
        <div className="w-full bg-gray-800 text-white rounded-lg p-4 mt-[-40px] max-w-sm text-center mx-5 z-10">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-300">{role}</p>
          <p className="mt-2 text-sm">Lulusan {graduated_at}</p>
        </div>
      </div>
    ),
    [name, role, graduated_at, image],
  );
