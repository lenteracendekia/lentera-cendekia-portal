import Image from "next/image";
import { useMemo } from "react";
import { Header } from "@/components/ui/header";
import { FacilityCard } from "@/components/ui/facility-card";
import { AirVent, FlaskConical, User, Video } from "lucide-react";

export const Facilities: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) =>
  useMemo(
    () => (
      <section className={className} {...rest}>
        <div className="flex flex-col md:gap-[60px] gap-8 items-center">
          <Header
            id="facilities"
            title="Fasilitas"
            subtitle="Fasilitas yang dapat menunjang proses pembelajaran"
            direction="center"
          />

          <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-3 md:gap-6">
            <div className="flex flex-col w-full gap-3 md:gap-6">
              <FacilityCard
                icon={<AirVent size={40} />}
                title="Full AC & Wifi"
                description="Kelas dil lengkapi dengan Air Conditioner dan Wifi yang akan menunjang kenyamanan belajar anak"
                base_icon_color="bg-primary-10 text-primary-60"
              />
              <FacilityCard
                icon={<FlaskConical size={40} />}
                title="Praktikum Kelas Offline/Online"
                description="Terdapat praktikum untuk dapat membantu siswa dalam memahami materi pembelajaran dengan mudah"
                base_icon_color="bg-error-10 text-error-base"
              />
            </div>
            <div className="relative overflow-hidden flex items-end justify-center w-full h-[500px] md:h-full bg-cover bg-center rounded-xl bg-[url('/images/cloud.jpg')] border-[1px] border-neutral-20">
              <Image
                src="/images/person__one.png"
                alt="mockup1"
                width={1000}
                height={1000}
                className="absolute object-contain w-11/12 top-20 h-fit"
              />
            </div>

            <div className="flex flex-col w-full gap-3 md:gap-6">
              <FacilityCard
                icon={<User size={40} />}
                title="Kelas Eksklusif Pendampingan Ujian Sekolah"
                description="Membuat kelompok belajar kecil dengan 5-6 anak, yang akan mendapatkan pendampingan khusus untuk memaksimalkan hasil ujian sekolah"
                base_icon_color="bg-warning-10 text-warning-60"
              />
              <FacilityCard
                icon={<Video size={40} />}
                title="Follow Up"
                description="Bimbingan via Whatsapp, G-Meet atau perantara lain yang dapat membantu siswa memahami tugas atau pun materi yang diberikan"
                base_icon_color="bg-primary-10 text-primary-60"
              />
            </div>
          </div>
        </div>
      </section>
    ),
    [className, rest]
  );
