import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, Instagram, Facebook, Linkedin, FileDown } from "lucide-react";
import logo from "@/assets/logo-tos.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.96_0.012_82)]">
      <div className="container-tos py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="TOS" width={48} height={48} className="h-12 w-12 rounded-full ring-1 ring-border bg-card" />
            <div>
              <div className="font-serif text-lg text-gold-gradient">THE ONE SURPRISE</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">Vêtements professionnels</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Marque française dédiée aux professionnels du terrain. Sécurité, BTP, restauration, santé, barber & personnalisation textile.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1 bg-card">
            🇫🇷 Chaque détail compte
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Accueil</Link></li>
            <li><Link to="/catalogue" className="hover:text-foreground">Catalogue</Link></li>
            <li><Link to="/personnalisation" className="hover:text-foreground">Personnalisation</Link></li>
            <li><Link to="/metiers" className="hover:text-foreground">Métiers</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="size-4" /> +33 7 82 30 13 46</li>
            <li className="flex items-center gap-2"><Mail className="size-4" /> contact@theonesurprise.fr</li>
            <li>
              <a
                href="https://wa.me/33782301346?text=Bonjour%2C%20je%20souhaite%20recevoir%20des%20informations%20sur%20vos%20v%C3%AAtements%20professionnels."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <MessageCircle className="size-4" /> WhatsApp direct
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex items-center gap-2 hover:text-foreground">
                <FileDown className="size-4" /> Catalogue PDF
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Suivez-nous</h4>
          <div className="flex gap-2">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-border hover:bg-card transition"><Instagram className="size-4" /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-border hover:bg-card transition"><Facebook className="size-4" /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-border hover:bg-card transition"><Linkedin className="size-4" /></a>
          </div>
          <div className="mt-6 text-xs text-muted-foreground space-y-1">
            <a href="#" className="block hover:text-foreground">Mentions légales</a>
            <a href="#" className="block hover:text-foreground">Politique de confidentialité</a>
            <a href="#" className="block hover:text-foreground">CGV</a>
          </div>
        </div>
      </div>
      <div className="h-[2px] fr-stripe opacity-60" />
      <div className="container-tos py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} THE ONE SURPRISE — Tous droits réservés.</span>
        <span>Made with care in France 🇫🇷</span>
      </div>
    </footer>
  );
}
