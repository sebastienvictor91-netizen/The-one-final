import { createFileRoute } from "@tanstack/react-router";
import { gammes } from "@/data/gammes";
import { Check } from "lucide-react";

export const Route = createFileRoute("/metiers")({
  head: () => ({
    meta: [
      { title: "Métiers — Sécurité, BTP, Santé, Restauration | THE ONE SURPRISE" },
      { name: "description", content: "Vêtements professionnels par métier : sécurité, BTP, restauration, santé, barber, outdoor." },
      { property: "og:title", content: "Métiers — THE ONE SURPRISE" },
      { property: "og:description", content: "Une gamme pensée pour chaque métier du terrain." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="container-tos py-14 md:py-20">
      <div className="max-w-3xl">
        <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Métiers</div>
        <h1 className="mt-2 font-serif text-4xl md:text-6xl">
          Une gamme par <span className="text-gold-gradient">métier.</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Chaque secteur a ses exigences. Découvrez la sélection pensée pour votre activité.
        </p>
      </div>

      <div className="mt-14 space-y-16">
        {gammes.map((g, idx) => (
          <article key={g.slug} id={g.slug} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center scroll-mt-28">
            <div className={`rounded-[1.5rem] overflow-hidden border border-border shadow-card ${idx % 2 ? "lg:order-2" : ""}`}>
              <img src={g.image} alt={g.title} loading="lazy" width={1024} height={1280} className="w-full h-auto object-cover" />
            </div>
            <div>
              <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">{g.price}</div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">{g.title}</h2>
              <p className="mt-3 text-muted-foreground max-w-md">{g.description}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                {g.products.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-gold" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => window.dispatchEvent(new CustomEvent("tos:open-catalog"))} className="btn-devis rounded-full px-5 py-2.5 text-sm font-medium">
                  Demander le catalogue
                </button>
                <a
                  href={`https://wa.me/33782301346?text=${encodeURIComponent(`Bonjour, je souhaite des informations sur la gamme ${g.title}.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
