import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { News } from '@/components/News';
import { Blog } from '@/components/Blog';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { Separator } from '@/components/Separator';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <News />
      <Separator />
      <Blog />
      <Separator />
      <Projects />
      <Separator />
      <Education />
      <Footer />
    </main>
  );
}
