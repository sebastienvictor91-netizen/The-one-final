import { Link } from "@tanstack/react-router";

export type Gamme = {
  slug: string;
  title: string;
  price: string;
  image: string;
  description: string;
  products: string[];
};

export function GammeCard({ g }: { g: Gamme }) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={g.image}
          alt={g.title}
          loading="lazy"
          width={1024}
          height={1280}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 rounded-full bg-card/95 backdrop-blur px-3 py-1 text-xs font-medium border border-border">
          {g.price}
        </span>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-serif text-xl md:text-2xl">{g.title}</h3>
        <p className="text-sm text-muted-foreground mt-1.5">{g.description}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {g.products.slice(0, 4).map((p) => (
            <li key={p} className="text-[11px] text-muted-foreground border border-border rounded-full px-2 py-0.5 bg-muted">
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            to="/metiers"
            hash={g.slug}
            className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition"
          >
            Voir la gamme
          </Link>
          <CatalogTriggerButton />
        </div>
      </div>
    </article>
  );
}

function CatalogTriggerButton() {
  // Lazy import to avoid circular: just trigger via custom event
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("tos:open-catalog"))}
      className="btn-devis inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
    >
      Demander le catalogue
    </button>
  );
}
