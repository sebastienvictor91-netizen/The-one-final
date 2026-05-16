import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Devis & WhatsApp | THE ONE SURPRISE" },
      { name: "description", content: "Contactez THE ONE SURPRISE pour un devis professionnel : téléphone, email ou WhatsApp +33 7 82 30 13 46." },
      { property: "og:title", content: "Contact — THE ONE SURPRISE" },
      { property: "og:description", content: "Notre équipe française vous répond sous 48h." },
    ],
  }),
  component: Page,
});

const WA_BASE = "https://wa.me/33782301346?text=";

function Page() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nom = String(fd.get("nom") ?? "");
    const societe = String(fd.get("societe") ?? "");
    const tel = String(fd.get("telephone") ?? "");
    const email = String(fd.get("email") ?? "");
    const sujet = String(fd.get("sujet") ?? "");
    const message = String(fd.get("message") ?? "");
    const msg =
      `Demande THE ONE SURPRISE%0A` +
      `Nom: ${encodeURIComponent(nom)}%0A` +
      `Société: ${encodeURIComponent(societe)}%0A` +
      `Téléphone: ${encodeURIComponent(tel)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Sujet: ${encodeURIComponent(sujet)}%0A` +
      `Message: ${encodeURIComponent(message)}`;
    window.open(WA_BASE + msg, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="container-tos py-14 md:py-20 grid lg:grid-cols-2 gap-12">
      <div>
        <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Contact</div>
        <h1 className="mt-2 font-serif text-4xl md:text-6xl">
          Parlons de votre <span className="text-gold-gradient">projet.</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-md">
          Une équipe française à votre écoute pour vos commandes, devis et projets de personnalisation.
        </p>
        <ul className="mt-8 space-y-4">
          <li className="flex items-start gap-3">
            <div className="size-10 rounded-full bg-secondary flex items-center justify-center"><Phone className="size-4 text-gold" /></div>
            <div><div className="text-xs text-muted-foreground">Téléphone</div><div className="font-medium">+33 7 82 30 13 46</div></div>
          </li>
          <li className="flex items-start gap-3">
            <div className="size-10 rounded-full bg-secondary flex items-center justify-center"><MessageCircle className="size-4 text-[#25D366]" /></div>
            <div>
              <div className="text-xs text-muted-foreground">WhatsApp</div>
              <a href={`${WA_BASE}Bonjour%2C%20je%20souhaite%20recevoir%20des%20informations.`} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                Discuter sur WhatsApp
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="size-10 rounded-full bg-secondary flex items-center justify-center"><Mail className="size-4 text-gold" /></div>
            <div><div className="text-xs text-muted-foreground">Email</div><div className="font-medium">contact@theonesurprise.fr</div></div>
          </li>
          <li className="flex items-start gap-3">
            <div className="size-10 rounded-full bg-secondary flex items-center justify-center"><MapPin className="size-4 text-gold" /></div>
            <div><div className="text-xs text-muted-foreground">Livraison</div><div className="font-medium">Partout en France 🇫🇷</div></div>
          </li>
        </ul>
      </div>

      <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
        <h2 className="font-serif text-2xl">Demander un devis</h2>
        <p className="text-sm text-muted-foreground mt-1">Réponse sous 48h.</p>
        <div className="mt-5 grid gap-3">
          <Field name="nom" label="Nom" required />
          <Field name="societe" label="Société" />
          <div className="grid sm:grid-cols-2 gap-3">
            <Field name="telephone" label="Téléphone" type="tel" required />
            <Field name="email" label="Email" type="email" required />
          </div>
          <Field name="sujet" label="Sujet (gamme, métier…)" />
          <label className="block">
            <span className="text-xs text-muted-foreground">Message</span>
            <textarea name="message" rows={4} maxLength={1000} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground/40 focus:ring-2 focus:ring-ring/20 transition" />
          </label>
          <button type="submit" className="btn-devis mt-2 rounded-full px-6 py-3 text-sm font-medium">
            Envoyer la demande
          </button>
          {sent && (
            <p className="text-xs text-muted-foreground text-center">
              Merci ! Vous avez été redirigé vers WhatsApp pour finaliser.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}{required && " *"}</span>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={150}
        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground/40 focus:ring-2 focus:ring-ring/20 transition"
      />
    </label>
  );
}
