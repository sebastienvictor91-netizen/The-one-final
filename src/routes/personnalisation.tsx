import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Layers, Sparkles, Award, Check } from "lucide-react";
import perso from "@/assets/perso.jpg";

export const Route = createFileRoute("/personnalisation")({
  head: () => ({
    meta: [
      { title: "Personnalisation textile — Broderie, flocage, sérigraphie | THE ONE SURPRISE" },
      { name: "description", content: "Personnalisez vos vêtements professionnels : broderie, sérigraphie, flocage, patchs et logos entreprise." },
      { property: "og:title", content: "Personnalisation textile — THE ONE SURPRISE" },
      { property: "og:description", content: "Votre identité sur le terrain. Broderie, sérigraphie, flocage, patchs." },
    ],
  }),
  component: Page,
});

const WA = "https://wa.me/33782301346?text=Bonjour%2C%20je%20souhaite%20un%20projet%20de%20personnalisation%20textile.";

function Page() {
  const techniques = [
    { icon: Scissors, t: "Broderie premium", d: "Fil de qualité, rendu durable et professionnel. Idéal pour polos, vestes et tabliers." },
    { icon: Layers, t: "Sérigraphie", d: "Pour grandes séries et couleurs vives. Excellente tenue dans le temps." },
    { icon: Sparkles, t: "Flocage", d: "Effet net et précis, parfait pour les noms, numéros et logos." },
    { icon: Award, t: "Patchs & écussons", d: "Identité d'équipe affirmée, finition couture ou velcro." },
  ];
  return (
    <>
      <section className="container-tos py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Personnalisation</div>
          <h1 className="mt-2 font-serif text-4xl md:text-6xl">
            Votre identité <span className="text-gold-gradient">sur le terrain.</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Habillez vos équipes avec votre logo, vos couleurs et votre niveau d'exigence. Petites comme grandes séries.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition">
              Demander un projet personnalisé
            </a>
            <button onClick={() => window.dispatchEvent(new CustomEvent("tos:open-catalog"))} className="btn-devis rounded-full px-6 py-3 text-sm font-medium">
              Demander un devis
            </button>
          </div>
        </div>
        <div className="rounded-[1.5rem] overflow-hidden border border-border shadow-card">
          <img src={perso} alt="Broderie premium" loading="lazy" width={1280} height={1024} className="w-full h-auto object-cover" />
        </div>
      </section>

      <section className="container-tos pb-20 md:pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techniques.map((t) => (
            <div key={t.t} className="rounded-2xl bg-card border border-border p-6 shadow-soft">
              <div className="size-11 rounded-full bg-secondary flex items-center justify-center">
                <t.icon className="size-5 text-gold" />
              </div>
              <h3 className="mt-4 font-serif text-xl">{t.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[oklch(0.96_0.012_82)] border-y border-border">
        <div className="container-tos py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl">Exemples de réalisations</h2>
          <p className="mt-2 text-muted-foreground">Polos brodés, vestes logo entreprise, tabliers personnalisés, tenues d'équipe.</p>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["Polo brodé", "Veste logo entreprise", "Tablier personnalisé", "Tenues d'équipe"].map((p) => (
              <li key={p} className="rounded-xl bg-card border border-border px-4 py-4 text-sm flex items-center gap-2">
                <Check className="size-4 text-gold" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
