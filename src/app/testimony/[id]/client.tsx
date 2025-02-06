"use client";

import { Navbar } from "@/components/ui/navbar";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Testimony {
  name: string;
  from: string;
  accepted_at: string;
  testimony: string;
}

export default function TestimonyDetailClient({
  name,
  from,
  // accepted_at,
  testimony,
}: Testimony) {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <header className="max-w-3xl mx-16 mt-28 lg:mx-auto mb-20">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center gap-2 text-2xl text-neutral-base  w-14 h-14 rounded-full bg-neutral-20"
        >
          <ChevronLeft size={24} />
        </button>
      </header>
      <main className="flex flex-col lg:flex-row gap-8 lg:gap-8 max-w-4xl mx-16 lg:mx-auto mt-8">
        <div className="flex flex-col  gap-5">
          <div className="relative lg:w-[400px]">
            <Image
              src="/images/person__one.webp"
              alt="Testimony Image"
              width={300}
              height={300}
            />
            {/* <div className="absolute top-0 z-[-1] w-[300px] h-[300px] rounded-full bg-warning-50 opacity-70" />
            <div className="absolute -bottom-2 z-[-3] w-[350px] h-[350px] rounded-full bg-warning-80" /> */}
          </div>
          <div className="bg-neutral-10 rounded-lg p-4">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-lg text-neutral-40">dari {from}</p>
          </div>
        </div>
        <div className="lg:h-[70dvh] lg:overflow-scroll scrollbar-hidden">
          <p
            className="text-2xl text-neutral-40 text-justify"
            dangerouslySetInnerHTML={{ __html: testimony }}
          />
        </div>
      </main>
    </div>
  );
}
