// client/src/App.tsx
import { Navbar } from './components/navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D13] text-zinc-100 flex flex-col selection:bg-violet-500/30 selection:text-cyan-200 relative overflow-x-hidden font-sans">
      {/* Background Grid & Dot Matrix Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-dot-matrix opacity-30 pointer-events-none -z-20" />

      {/* Ambient Top Violet Light */}
      <div className="fixed -top-40 left-1/4 w-[700px] h-[450px] bg-violet-600/10 blur-[160px] pointer-events-none -z-10 rounded-full" />
      
      {/* Ambient Right Cyan Light */}
      <div className="fixed top-1/3 -right-32 w-[600px] h-[400px] bg-cyan-500/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
