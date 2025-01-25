import { About } from "@/components/section/landing/about";
import { Activities } from "@/components/section/landing/activities";
import { Advantages } from "@/components/section/landing/advantages";
import { Facilities } from "@/components/section/landing/facilities";
import { FAQs } from "@/components/section/landing/faqs";
import { Hero } from "@/components/section/landing/hero";
import { Programs } from "@/components/section/landing/programs";
import { Teachers } from "@/components/section/landing/teachers";
import { Testimonials } from "@/components/section/landing/testimonials";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { CONTENT } from "@/constants/content";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero
          title={CONTENT.hero.title}
          subtitle={CONTENT.hero.subtitle}
          image={CONTENT.hero.image}
        />
        <div className="flex flex-col gap-y-24 px-5">
          <About />
          <Advantages />
          <Programs />
          <Facilities className="px-12" />
          <Activities />
          <Teachers />
          <Testimonials />
          <FAQs />
        </div>
        <Footer {...CONTENT.footer} />
      </main>
    </div>
  );
}
