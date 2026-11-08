// client/src/App.tsx
import { Navbar } from './components/navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-emerald-500 selection:text-black">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}