import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const API = import.meta.env.VITE_BACKEND_URL || "";

function BundleCard({ b, anchor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      id={anchor}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-fuchsia-400/10 via-pink-400/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 blur-xl transition" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{b.name}</h3>
          {b.highlight && (
            <span className="inline-flex items-center gap-1 text-rose-200 text-xs"><Sparkles size={14} /> Featured</span>
          )}
        </div>
        <p className="mt-2 text-white/70 text-sm">{b.tagline || b.description}</p>
        <div className="mt-6 aspect-[16/9] rounded-xl bg-white/5 border border-white/10 overflow-hidden">
          <img src={b.image || "/placeholder.jpg"} alt={b.name} className="h-full w-full object-cover" />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-white text-lg font-medium">${b.price.toFixed(2)}</div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-medium hover:opacity-90 transition">
            Add to Bag <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Bundles() {
  const [bundles, setBundles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // attempt to fetch bundles; if none, call seed then fetch
        const res = await fetch(`${API}/bundles`);
        if (res.ok) {
          const data = await res.json();
          if (data.length === 0) {
            await fetch(`${API}/seed`, { method: "POST" });
            const res2 = await fetch(`${API}/bundles`);
            const data2 = await res2.json();
            setBundles(data2);
          } else {
            setBundles(data);
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const mapped = [
    { key: "bundles", title: "Bundles", filter: () => true },
    { key: "sport", title: "Sport Selection", filter: (b) => /sport/i.test(b.name) || /sport/i.test(b.tagline || "") },
    { key: "luxury", title: "Luxury Selection", filter: (b) => /luxury/i.test(b.name) || /luxury/i.test(b.tagline || "") },
  ];

  return (
    <section className="relative py-20" id="bundles">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {mapped.map((section) => (
          <div key={section.key} id={section.key} className="mt-12">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">{section.title}</h2>
              <div className="text-white/60 text-sm">Moniqué</div>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(loading ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-72 rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
              )) : bundles.filter(section.filter)).map((b, i) => (
                <BundleCard key={i} b={b} anchor={section.key === "bundles" ? undefined : section.key} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
