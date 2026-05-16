import { Link } from "@tanstack/react-router";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-tos.png";
import { useCatalogPopup } from "./CatalogPopupProvider";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/personnalisation", label: "Personnalisation" },
  { to: "/metiers", label: "Métiers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { openPopup } = useCatalogPopup();

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] border-b border-border/60 bg-background/95 backdrop-blur-md shadow-sm">
      <div className="container-tos flex items-center justify-between gap-3 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <img
            src={logo}
            alt="TOS"
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-1 ring-border/70 bg-card shrink-0"
          />
          <div className="leading-tight block min-w-0">
            <div className="font-serif text-[16px] sm:text-xl md:text-[22px] text-gold-gradient font-medium tracking-wide whitespace-nowrap">
              THE ONE SURPRISE
            </div>
            <div className="text-[7px] sm:text-[10px] md:text-[11px] tracking-[0.10em] sm:tracking-[0.18em] text-muted-foreground uppercase whitespace-nowrap">
              Vêtements professionnels premium
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium fr-bar" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1 bg-card">
            <span>🇫🇷</span> Marque française
          </span>

          <button aria-label="Recherche" className="p-2 rounded-full hover:bg-secondary transition">
            <Search className="size-4" />
          </button>

          <button aria-label="Compte" className="p-2 rounded-full hover:bg-secondary transition hidden sm:inline-flex">
            <User className="size-4" />
          </button>

          <button
            onClick={openPopup}
            className="btn-devis hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
          >
            Demander un devis
          </button>

          <button
            aria-label="Menu"
            className="lg:hidden p-2 rounded-full hover:bg-secondary transition"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-tos flex flex-col py-4 gap-1">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-foreground/90 hover:text-foreground"
                activeProps={{ className: "font-semibold text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                openPopup();
              }}
              className="btn-devis mt-3 rounded-full px-4 py-2.5 text-sm font-medium self-start"
            >
              Demander un devis
            </button>
          </nav>
        </div>
      )}

      <div className="h-[2px] fr-stripe opacity-60" />
    </header>
  );
}