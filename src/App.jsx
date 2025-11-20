import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bundles from "./components/Bundles";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Bundles />
      <footer className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-white/60">© {new Date().getFullYear()} Moniqué. All rights reserved.</p>
          <div className="text-white/60">Crafted with care.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
