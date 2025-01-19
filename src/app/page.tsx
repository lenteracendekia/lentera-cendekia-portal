import { About } from "@/components/section/landing/about";
import { Hero } from "@/components/section/landing/hero";
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
      </main>
    </div>
  );
}
