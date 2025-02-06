"use client";

import React, { useMemo } from "react";
import { Brand } from "@/components/ui/brand";
import { Facebook, Instagram, MapPin, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { scrollElement } from "@/utils/scroll-element";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  overview: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    address: string;
  };
}

export const Footer: React.FC<FooterProps> = ({
  overview,
  contact,
  ...rest
}) => {
  const memoizeLists = useMemo(
    () => [
      {
        list_title: "Mata Pelajaran",
        list_items: [
          {
            item_title: "Matematika",
            action: () => scrollElement("programs"),
          },
          {
            item_title: "Bahasa Indonesia",
            action: () => scrollElement("programs"),
          },
          {
            item_title: "Bahasa Inggris",
            action: () => scrollElement("programs"),
          },
          {
            item_title: "IPA",
            action: () => scrollElement("programs"),
          },
          {
            item_title: "IPS",
            action: () => scrollElement("programs"),
          },
        ],
      },
      {
        list_title: "Navigasi",
        list_items: [
          {
            item_title: "Beranda",
            action: () => scrollElement("hero"),
          },
          {
            item_title: "Tentang Kami",
            action: () => scrollElement("about"),
          },
          {
            item_title: "Program",
            action: () => scrollElement("programs"),
          },
          {
            item_title: "Testimoni",
            action: () => scrollElement("testimonials"),
          },
        ],
      },
    ],
    []
  );

  return useMemo(
    () => (
      <footer className="bg-gray-50 text-gray-800 p-10 mt-24" {...rest}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                <span className="flex gap-2 text-black">
                  <Brand />
                  {overview.title}
                </span>
              </h2>
              <p className="mt-4 text-sm text-gray-600">
                {overview.description}
              </p>
            </div>

            {memoizeLists.map((list, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg text-gray-900 mb-4">
                  {list.list_title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {list.list_items.map((item, itemIndex) => (
                    <li key={itemIndex} onClick={item.action}>
                      {item.item_title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                {contact.title}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Hubungi Kami:</strong> <br />
                <Link
                  href="https://wa.me/+6285749688821"
                  className="hover:text-neutral-30 transition-all duration-200"
                  aria-label="Hubungi Kami"
                  aria-description="Whatsapp Lentera Cendekia Kertajaya Surabaya"
                >
                  {contact.phone}
                </Link>
              </p>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Email Kami Pada:</strong> <br />
                <Link
                  href="mailto:lbblenteracendekia@gmail.com"
                  className="hover:text-neutral-30 transition-all duration-200"
                  aria-label="Kirim Email"
                  aria-description="Email Lentera Cendekia Kertajaya Surabaya"
                >
                  {contact.email}
                </Link>
              </p>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Alamat Kami:</strong> <br />
                <Link
                  href="https://www.google.com/maps/place/LBB+Lentera+Cendekia/@-7.2774383,112.755251,17z"
                  aria-label="Kunjungi Google Maps"
                  aria-description="Lentera Cendekia Kertajaya Surabaya"
                >
                  {contact.address}
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>© 2025 Lentera Cendekia, All Right Reserved.</p>
            <div className="flex justify-center space-x-4 mt-4 text-neutral-base">
              <Link
                href="https://www.facebook.com/profile.php?id=100071750721085"
                className="hover:text-warning-60"
                aria-label="Kunjungi Facebook kami"
                aria-description="Facebook Lembaga Bimbingan Belajar Lentera Cendekia Kertajaya Surabaya"
              >
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/lenteracendekiasby/"
                className="hover:text-warning-60"
                aria-label="Kunjungi Instagram kami"
                aria-description="Instagram Lembaga Bimbingan Belajar Lentera Cendekia Kertajaya Surabaya"
              >
                <Instagram />
              </Link>
              <Link
                href="https://wa.me/+6285749688821"
                className="hover:text-warning-60"
                aria-label="Hubungi kami disini"
                aria-description="Whatsapp Lentera Cendekia Kertajaya Surabaya"
              >
                <MessageCircleMore />
              </Link>
            </div>
          </div>

          <div className="fixed z-50 bottom-8 right-8 lg:bottom-12 lg:right-12 flex flex-col gap-4">
            <Link
              href="https://www.google.com/maps/dir//LBB+Lentera+Cendekia,+Jl.+Gubeng+Kertajaya+IX+B+Dalam+Dalam+No.15,+Airlangga,+Gubeng,+Surabaya,+East+Java+60286/@-7.2948046,112.7251968,15z"
              className="flex justify-center items-center text-neutral-base bg-warning-base w-16 h-16 rounded-full hover:brightness-75 transition-all duration-200 cursor-pointer shadow-lg"
              aria-label="Telusuri lokasi kami"
            >
              <MapPin size={32} />
            </Link>
            <Link
              href="https://wa.me/+6285749688821"
              className="flex justify-center items-center text-neutral-10 bg-success-base w-16 h-16 rounded-full hover:brightness-75 transition-all duration-200 cursor-pointer shadow-lg"
              aria-label="Hubungi kami disini"
            >
              <MessageCircleMore size={32} />
            </Link>
          </div>
        </div>
      </footer>
    ),
    [overview, contact, memoizeLists, rest]
  );
};
