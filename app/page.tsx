import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Timeline } from './components/Timeline';
import { ClientCursorWrapper } from './components/ClientCursorWrapper';

export default function Home() {
  return (
    <>
      <ClientCursorWrapper />
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
