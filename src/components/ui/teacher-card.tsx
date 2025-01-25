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
        className="flex flex-col items-center justify-end w-full h-[450px] p-4 mx-4 rounded-xl"
      >
        <div className="relative flex justify-center items-center w-full h-full">
          <div className="absolute -bottom-6 w-[200px] h-[250px] bg-warning-base rounded-t-full z-[-1]"></div>
          <Image
            src={image}
            alt={`Profile Picture ${name}`}
            width={250}
            height={250}
            className="absolute -bottom-10 z-[-1] rounded-full"
          />
        </div>
        <div className="w-[270px] bg-gray-800 text-white rounded-lg p-4 mt-4 max-w-sm text-center">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-300">{role}</p>
          <p className="mt-2 text-sm">Lulusan {graduated_at}</p>
        </div>
      </div>
    ),
    [rest, image, name, role, graduated_at]
  );
