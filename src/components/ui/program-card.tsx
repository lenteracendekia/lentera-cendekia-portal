import { useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface ProgramCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  short_description: string;
  image: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  name,
  short_description,
  image,
}) =>
  useMemo(
    () => (
      <Drawer>
        <DrawerTrigger>
          <Card>
            <Image
              src={image}
              alt={`Top Program Image ${name}`}
              className="object-cover w-full h-40 rounded-xl"
              width={375}
              height={160}
            />
            <div className="flex-1 mt-3 text-left">
              <h3 className="text-xl font-semibold text-neutral-base">
                {name}
              </h3>
              <p className="mt-2 text-md text-neutral-40">
                {short_description}
              </p>
            </div>
          </Card>
        </DrawerTrigger>
        <DrawerContent>
          <div className="w-full max-w-sm mx-auto">
            <DrawerHeader>
              <DrawerTitle>{name}</DrawerTitle>
              <DrawerDescription>
                <Image
                  src={image}
                  alt={`Top Program Image ${name}`}
                  width={432}
                  height={123}
                />
                {short_description}
              </DrawerDescription>
            </DrawerHeader>
          </div>
        </DrawerContent>
      </Drawer>
    ),
    [name, short_description, image],
  );
