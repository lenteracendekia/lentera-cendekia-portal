import { Header } from "@/components/ui/header";
import { CONTENT } from "@/constants/content";
import { useMemo } from "react";

export function FAQs() {
  return useMemo(() => {
    return (
      <section
        id="faqs"
        className="md:px-[60px] md:py-[60px] bg-[#FFFFFF] px-5 py-8 scroll-m-5"
      >
        <div className="flex flex-col md:gap-[60px] gap-8 items-center">
          <div className="flex flex-col gap-4 items-center">
            <Header
              title="FAQs"
              subtitle="Beberapa pertanyaan yang mungkin buat anda bingung."
              direction="center"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-6 gap-3 w-full">
            {CONTENT.faqs.map((faq, index) => (
              <FaqCard key={index} title={faq.question} content={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    );
  }, []);
}

interface FaqCardProps {
  title: string;
  content: string;
}

const FaqCard = ({ title, content }: FaqCardProps) => {
  return (
    <div className="col-span-2 md:col-span-1 flex flex-col gap-3 bg-white border-[1px] border-neutral-20 rounded-xl md:p-6 p-3 w-fill">
      <p className="font-medium md:text-2xl text-xl text-[#1B1B1B]">{title}</p>
      <p className="text-base text-neutral-40">{content}</p>
    </div>
  );
};
