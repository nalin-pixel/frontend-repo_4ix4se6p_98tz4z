import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute -inset-[35%] bg-[radial-gradient(circle_at_20%_-10%,rgba(244,114,182,.25),transparent_40%),radial-gradient(circle_at_80%_-10%,rgba(56,189,248,.25),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-semibold tracking-tight text-white"
            >
              Moniqué
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">
                Modern boutique energy.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-6 text-lg text-white/70 max-w-xl"
            >
              Curated selections for movement and indulgence. Discover three effortless bundles, a sport selection, and a luxury selection.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-10 flex items-center gap-3"
            >
              <a href="#bundles" className="px-5 py-3 rounded-full bg-white text-slate-900 font-medium hover:opacity-90 transition">
                Shop Bundles
              </a>
              <a href="#luxury" className="px-5 py-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/15 transition">
                Explore Luxury
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative h-[420px] lg:h-[520px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 via-pink-500/10 to-cyan-400/20 blur-3xl rounded-3xl" />
            <div className="relative h-full w-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur overflow-hidden">
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,.08),transparent_30%,rgba(255,255,255,.08),transparent_60%)] animate-[spin_14s_linear_infinite]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,.06),transparent_60%)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
