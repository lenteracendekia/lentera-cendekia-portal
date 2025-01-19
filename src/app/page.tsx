import { About } from "@/components/section/landing/about";
import { Advantages } from "@/components/section/landing/advantages";
import { Facilities } from "@/components/section/landing/facilities";
import { Hero } from "@/components/section/landing/hero";
import { Programs } from "@/components/section/landing/programs";
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
        <About />
        <Advantages className="mt-24" />
        <Programs className="mt-24" />
        <Facilities className="mt-24 px-12" />
        <Footer {...CONTENT.footer} />
      </main>
    </div>
  );
}
