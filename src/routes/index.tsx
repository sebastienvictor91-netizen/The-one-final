import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  Clock,
  Sparkles,
  MessageCircle,
  Check,
  ArrowRight,
  Scissors,
  Layers,
  Award,
} from "lucide-react";

import heroImg from "@/assets/hero-pros.jpg";
import perso from "@/assets/perso.jpg";
import qualite from "@/assets/qualite.jpg";
import { GammeCard } from "@/components/GammeCard";
import { gammes } from "@/data/gammes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE ONE SURPRISE — Vêtements professionnels premium français" },
      {
        name: "description",
        content:
          "Vêtements professionnels, sécurité, BTP, restauration, santé, barber et personnalisation textile. Devis 48h. Livraison France. Marque française.",
      },
      {
        property: "og:title",
        content: "THE ONE SURPRISE — Vêtements professionnels premium",
      },
      {
        property: "og:description",
        content: "Pensé pour les professionnels. Conçu pour durer.",
      },
    ],
  }),
  component: HomePage,
});

const WA =
  "https://wa.me/33782301346?text=Bonjour%2C%20je%20souhaite%20recevoir%20des%20informations%20sur%20vos%20v%C3%AAtements%20professionnels.";

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.97_0.012_85)] via-background to-background" />

        <div className="container-tos grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-center pt-24 md:pt-28 lg:pt-24 pb-10 md:pb-14 lg:pb-12 min-h-auto lg:min-h-[620px]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-muted-foreground border border-border rounded-full px-3 py-1 bg-card">
              <span className="size-1.5 rounded-full bg-gold" />
              Marque française premium
            </div>

            <h1 className="mt-5 font-serif text-[38px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1] tracking-[-0.03em]">
              Pensé pour les
              <br />
              professionnels.
              <br />
              <span className="text-gold-gradient">Conçu pour durer.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Vêtements professionnels, sécurité, restauration et personnalisation textile
              pour entreprises et indépendants.
            </p>

            <ul className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-sm">
              {[
                { icon: Truck, label: "Livraison France" },
                { icon: Clock, label: "Réponse rapide" },
                { icon: Sparkles, label: "Personnalisation" },
                { icon: MessageCircle, label: "Devis WhatsApp" },
              ].map((f) => (
                <li key={f.label} className="flex items-center gap-2 text-foreground/80">
                  <f.icon className="size-4 shrink-0 text-gold" />
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition hover:bg-foreground/90"
              >
                Voir le catalogue <ArrowRight className="size-4" />
              </Link>

              <Link
                to="/contact"
                className="btn-devis inline-flex items-center rounded-full px-6 py-3 text-sm font-medium"
              >
                Demander un devis
              </Link>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-secondary"
              >
                <MessageCircle className="size-4 text-[#25D366]" />
                WhatsApp rapide
              </a>
            </div>
          </div>

          <div className="relative z-0 w-full">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[oklch(0.92_0.04_75)] via-transparent to-transparent blur-2xl opacity-70" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-card h-[360px] sm:h-[430px] lg:h-[540px]">
              <img
                src={heroImg}
                alt="Professionnels équipés THE ONE SURPRISE"
                width={1280}
                height={1280}
                className="block h-full w-full object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-card">
              <div className="size-10 rounded-full fr-stripe" />
              <div>
                <div className="text-xs text-muted-foreground">Qualité professionnelle</div>
                <div className="font-serif text-sm">Pour les pros du terrain</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChiffresSection />
      <GammesSection />
      <PersonnalisationSection perso={perso} />
      <ConfianceSection />
      <QualiteSection qualite={qualite} />
      <ProcessSection />
      <CtaFinal />
    </>
  );
}

function ChiffresSection() {
  const items = [
    { k: "500+", v: "Entreprises équipées" },
    { k: "48h", v: "Devis personnalisé" },
    { k: "🇫🇷", v: "Service client français" },
    { k: "✔", v: "Qualité professionnelle" },
  ];

  return (
    <section className="border-y border-border bg-[oklch(0.96_0.012_82)]">
      <div className="container-tos py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.v} className="text-center">
            <div className="font-serif text-3xl md:text-5xl text-gold-gradient">{i.k}</div>
            <div className="mt-1 text-xs md:text-sm text-muted-foreground">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GammesSection() {
  return (
    <section className="container-tos py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
            Nos gammes
          </div>

          <h2 className="mt-2 font-serif text-3xl md:text-5xl max-w-2xl">
            Des vêtements <span className="text-gold-gradient">pensés métier</span> par métier.
          </h2>
        </div>

        <Link
          to="/catalogue"
          className="text-sm font-medium inline-flex items-center gap-1 transition-all hover:gap-2"
        >
          Voir tout le catalogue <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {gammes.map((g) => (
          <GammeCard key={g.slug} g={g} />
        ))}
      </div>
    </section>
  );
}

function PersonnalisationSection({ perso }: { perso: string }) {
  const items = [
    { icon: Scissors, t: "Broderie", d: "Logo durable et premium" },
    { icon: Layers, t: "Sérigraphie", d: "Couleurs vives, tirages volume" },
    { icon: Sparkles, t: "Flocage", d: "Effet net et tenue dans le temps" },
    { icon: Award, t: "Patchs & écussons", d: "Identité d'équipe affirmée" },
  ];

  return (
    <section className="bg-[oklch(0.96_0.012_82)] border-y border-border">
      <div className="container-tos py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 rounded-[1.5rem] overflow-hidden border border-border shadow-card">
          <img
            src={perso}
            alt="Broderie premium sur polo professionnel"
            loading="lazy"
            width={1280}
            height={1024}
            className="block w-full h-auto object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
            Personnalisation textile
          </div>

          <h2 className="mt-2 font-serif text-3xl md:text-5xl">
            Votre identité <span className="text-gold-gradient">sur le terrain.</span>
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl">
            Broderie, sérigraphie, flocage, patchs : nous habillons vos équipes avec votre logo,
            vos couleurs, votre niveau d'exigence.
          </p>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {items.map((i) => (
              <div key={i.t} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <div className="size-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <i.icon className="size-4 text-gold" />
                </div>

                <div>
                  <div className="font-medium">{i.t}</div>
                  <div className="text-xs text-muted-foreground">{i.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <Link
              to="/personnalisation"
              className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition hover:bg-foreground/90"
            >
              Demander un projet personnalisé
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConfianceSection() {
  const points = [
    "Livraison France",
    "Service client français",
    "Textile professionnel premium",
    "Réponse rapide",
    "Personnalisation textile",
    "Commandes petites & grandes quantités",
  ];

  return (
    <section className="container-tos py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
          Confiance
        </div>

        <h2 className="mt-2 font-serif text-3xl md:text-5xl">
          Une marque <span className="text-gold-gradient">française</span> au service des pros.
        </h2>

        <p className="mt-3 text-muted-foreground">
          Déjà choisi par artisans, sécurité, restaurants, salons barber et entreprises.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {points.map((p) => (
          <div key={p} className="flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3">
            <Check className="size-4 text-gold" />
            <span className="text-sm">{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function QualiteSection({ qualite }: { qualite: string }) {
  return (
    <section className="container-tos pb-20 md:pb-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center rounded-[1.5rem] overflow-hidden border border-border bg-card shadow-soft">
        <div className="p-8 md:p-12">
          <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
            Qualité
          </div>

          <h2 className="mt-2 font-serif text-3xl md:text-5xl">
            Une qualité <span className="text-gold-gradient">pensée pour durer.</span>
          </h2>

          <p className="mt-4 text-muted-foreground max-w-md">
            Tissus résistants, confort terrain, coupes professionnelles, textiles respirants,
            finitions premium.
          </p>

          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Tissus résistants & respirants",
              "Coutures renforcées",
              "Coupes ergonomiques",
              "Finitions premium",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="size-4 text-gold" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[5/4] lg:aspect-auto lg:h-full min-h-[360px]">
          <img
            src={qualite}
            alt="Détail textile premium"
            loading="lazy"
            width={1280}
            height={1024}
            className="absolute inset-0 block h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    "Choisissez votre gamme",
    "Envoyez votre logo",
    "Recevez votre devis",
    "Validation production",
    "Livraison entreprise",
  ];

  return (
    <section className="bg-[oklch(0.96_0.012_82)] border-y border-border">
      <div className="container-tos py-20 md:py-28">
        <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
          Process
        </div>

        <h2 className="mt-2 font-serif text-3xl md:text-5xl max-w-2xl">
          Comment ça <span className="text-gold-gradient">fonctionne.</span>
        </h2>

        <ol className="mt-10 grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <li key={s} className="relative rounded-2xl bg-card border border-border p-5">
              <div className="font-serif text-3xl text-gold-gradient">0{i + 1}</div>
              <div className="mt-2 text-sm">{s}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section className="container-tos py-20 md:py-28">
      <div className="rounded-[1.5rem] bg-foreground text-background p-10 md:p-16 text-center overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-[2px] fr-stripe opacity-70" />

        <h2 className="font-serif text-3xl md:text-5xl">
          Prêt à équiper vos équipes ?
        </h2>

        <p className="mt-3 text-background/70 max-w-xl mx-auto">
          Devis sous 48h, personnalisation incluse, livraison partout en France.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-full px-8 py-3.5 text-sm font-medium border border-white/10 shadow-soft transition-all duration-300 hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.18) 0%, rgba(255,255,255,1) 50%, rgba(239,68,68,0.18) 100%)",
              color: "#111",
            }}
          >
            Demander un devis
          </Link>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-background/20 px-6 py-3 text-sm font-medium transition hover:bg-background/10 inline-flex items-center gap-2"
          >
            <MessageCircle className="size-4" />
            WhatsApp +33 7 82 30 13 46
          </a>
        </div>
      </div>
    </section>
  );
}