import { createFileRoute } from "@tanstack/react-router";
import { GammeCard } from "@/components/GammeCard";
import { gammes } from "@/data/gammes";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue — Vêtements professionnels | THE ONE SURPRISE" },
      { name: "description", content: "Découvrez nos gammes : sécurité, BTP, restauration, santé, barber et outdoor. Tarifs entreprises et personnalisation." },
      { property: "og:title", content: "Catalogue — THE ONE SURPRISE" },
      { property: "og:description", content: "Toutes les gammes de vêtements professionnels premium français." },
    ],
  }),
  component: CataloguePage,
});

function CataloguePage() {
  return (
    <section className="container-tos py-14 md:py-20">
      <div className="max-w-3xl">
        <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Catalogue</div>
        <h1 className="mt-2 font-serif text-4xl md:text-6xl">
          Tout l'<span className="text-gold-gradient">univers TOS.</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Six gammes complètes pensées pour les professionnels du terrain. Demandez le catalogue PDF avec tarifs entreprises.
        </p>
        <div className="mt-6">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("tos:open-catalog"))}
            className="btn-devis rounded-full px-6 py-3 text-sm font-medium"
          >
            Recevoir le catalogue PDF
          </button>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {gammes.map((g) => <GammeCard key={g.slug} g={g} />)}
      </div>
    </section>
  );
}
