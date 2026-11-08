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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-x-hidden font-sans">
      {/* Subtle Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

      {/* Top Subtle Ambient Light */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 relative z-10">
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
