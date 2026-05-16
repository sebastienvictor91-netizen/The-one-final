import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";

type Ctx = { openPopup: () => void; closePopup: () => void };
const CatalogCtx = createContext<Ctx | null>(null);

export function useCatalogPopup() {
  const ctx = useContext(CatalogCtx);
  if (!ctx) throw new Error("useCatalogPopup must be used within CatalogPopupProvider");
  return ctx;
}

const WA_BASE = "https://wa.me/33782301346?text=";

export function CatalogPopupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [autoTriggered, setAutoTriggered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setOpen(true);
    window.addEventListener("tos:open-catalog", handler);
    let t: ReturnType<typeof setTimeout> | undefined;
    if (!autoTriggered) {
      t = setTimeout(() => {
        if (!sessionStorage.getItem("tos_popup_seen")) {
          setOpen(true);
          sessionStorage.setItem("tos_popup_seen", "1");
          setAutoTriggered(true);
        }
      }, 15000);
    }
    return () => {
      window.removeEventListener("tos:open-catalog", handler);
      if (t) clearTimeout(t);
    };
  }, [autoTriggered]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nom = String(fd.get("nom") ?? "");
    const societe = String(fd.get("societe") ?? "");
    const tel = String(fd.get("telephone") ?? "");
    const email = String(fd.get("email") ?? "");
    const metier = String(fd.get("metier") ?? "");
    const msg =
      `Bonjour, je souhaite recevoir le catalogue professionnel THE ONE SURPRISE.%0A` +
      `Nom: ${encodeURIComponent(nom)}%0A` +
      `Société: ${encodeURIComponent(societe)}%0A` +
      `Téléphone: ${encodeURIComponent(tel)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Métier: ${encodeURIComponent(metier)}`;
    window.open(WA_BASE + msg, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <CatalogCtx.Provider value={{ openPopup: () => setOpen(true), closePopup: () => setOpen(false) }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm" style={{ backgroundColor: "rgba(20,15,10,0.45)" }}>
          <div className="relative w-full max-w-lg rounded-2xl bg-card shadow-card border border-border overflow-hidden">
            <div className="h-1 fr-stripe" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-secondary transition"
            >
              <X className="size-4" />
            </button>
            <div className="px-7 pt-7 pb-6">
              <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Téléchargement gratuit</div>
              <h3 className="font-serif text-2xl md:text-3xl mt-1">
                Recevoir le <span className="text-gold-gradient">catalogue professionnel</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Tarifs entreprises, gammes complètes et options de personnalisation envoyés directement sur WhatsApp.
              </p>
              <form onSubmit={onSubmit} className="mt-5 grid gap-3">
                <Field name="nom" label="Nom" required />
                <Field name="societe" label="Société" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field name="telephone" label="Téléphone" type="tel" required />
                  <Field name="email" label="Email" type="email" required />
                </div>
                <Field name="metier" label="Métier (sécurité, BTP, restauration…)" />
                <button type="submit" className="btn-devis mt-2 rounded-full px-5 py-3 text-sm font-medium">
                  Recevoir le catalogue
                </button>
                <p className="text-[11px] text-muted-foreground text-center">
                  En validant, vous serez redirigé vers WhatsApp pour finaliser votre demande.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </CatalogCtx.Provider>
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
