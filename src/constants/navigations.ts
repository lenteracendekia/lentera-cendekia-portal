import { scrollElement } from "@/utils/scroll-element";

const sections = [
  {
    id: "about",
    title: "Tentang Kami",
  },
  {
    id: "advantages",
    title: "Keunggulan",
  },
  {
    id: "programs",
    title: "Program",
  },
  {
    id: "facilities",
    title: "Fasilitas",
  },
  {
    id: "activities",
    title: "Kegiatan",
  },
  {
    id: "teachers",
    title: "Guru",
  },
  {
    id: "testimonials",
    title: "Testimoni",
  },
  {
    id: "faqs",
    title: "FAQs",
  },
];

export const NAVIGATIONS = sections.map((section) => ({
  ...section,
  action: () => scrollElement(section.id),
}));
