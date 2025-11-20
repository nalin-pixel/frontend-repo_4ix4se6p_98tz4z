import { Menu, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-400 via-pink-400 to-rose-400 shadow-lg shadow-rose-500/20 ring-1 ring-white/20" />
          <span className="text-white font-semibold text-lg tracking-wide">
            Moniqué
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#bundles" className="hover:text-white transition">Bundles</a>
          <a href="#sport" className="hover:text-white transition">Sport</a>
          <a href="#luxury" className="hover:text-white transition">Luxury</a>
        </nav>
        <button className="inline-flex items-center gap-2 text-white/90 hover:text-white px-3 py-2 rounded-md bg-white/10 hover:bg-white/15 transition border border-white/10">
          <ShoppingBag size={18} />
          <span className="hidden sm:inline">Bag</span>
        </button>
        <button className="md:hidden text-white/80" aria-label="menu">
          <Menu />
        </button>
      </div>
    </header>
  );
}
