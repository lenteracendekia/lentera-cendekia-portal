import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/ui/header";
import { CONTENT } from "@/constants/content";
import Image from "next/image";
import { useMemo } from "react";

export const FAQs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return useMemo(
    () => (
      <section className={className} {...rest}>
        <Header
          id="faqs"
          title="FAQs"
          subtitle="Pertanyaan yang Sering Diajukan"
          direction="center"
        />
        <div className="flex flex-col items-center gap-12 max-w-[60dvw] lg:flex-row lg:w-[990px] mx-auto">
          <Image
            src="/images/frequently_asked_question.svg"
            alt="Frequently Asked Question Image"
            width={275}
            height={275}
          />
          <Accordion type="single" collapsible className="w-[80dvw]">
            {CONTENT.faqs.map((faq, index) => (
              <AccordionItem value={`faq-${index}`} key={index}>
                <AccordionTrigger className="text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 border-t-2 text-neutral-40 bg-neutral-10 border-neutral-20">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    ),
    [className, rest]
  );
};
