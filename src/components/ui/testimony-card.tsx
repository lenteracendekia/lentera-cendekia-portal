import clsx from "clsx";
import { useMemo } from "react";
import { QuoteIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface TestimonyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  testimony: string;
  name: string;
  accepted_at: string;
  profile_image: string;
  from: string;
}

export const TestimonyCard: React.FC<TestimonyCardProps> = ({
  testimony,
  name,
  from,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  accepted_at,
  profile_image,
  ...rest
}) => {
  return useMemo(
    () => (
      <Card
        {...rest}
        className="relative flex flex-col h-full mt-8 overflow-visible first:ml-8"
      >
        <div className="absolute flex items-center justify-center w-12 h-12 rounded-full shadow-md -top-6 -left-6 md:w-14 md:h-14 bg-warning-20">
          <QuoteIcon className="w-5 h-5 md:w-6 md:h-6 text-neutral-base" />
        </div>
        <CardContent className="flex flex-col flex-1 pt-6">
          {/* <div className="mb-5 text-xs text-right md:text-sm text-neutral-base">
            Diterima di <b>{accepted_at}</b>
          </div> */}
          <div className="flex-1 mt-4">
            <p
              className={clsx(
                "text-neutral-40 mb-3 text-xs md:text-sm line-clamp-3"
              )}
              dangerouslySetInnerHTML={{ __html: testimony }}
            ></p>
            <Link
              href={`/testimony/${name.toLowerCase().replace(/\s/g, "-")}`}
              className="text-xs text-blue-600 md:text-sm hover:underline"
            >
              Baca Lengkapnya &rarr;
            </Link>
          </div>
          <div className="flex items-center mt-3 text-xs text-gray-700 md:text-sm">
            <Image
              src={profile_image}
              alt={`${name}'s profile image`}
              width={50}
              height={50}
              className="mr-2 rounded-xl"
            />
            <div className="ms-2">
              <span className="font-semibold text-md">{name}</span>
              <p>dari {from}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
    [rest, testimony, profile_image, from, name]
  );
};
