import securite from "@/assets/cat-securite.jpg";
import btp from "@/assets/cat-btp.jpg";
import resto from "@/assets/cat-resto.jpg";
import sante from "@/assets/cat-sante.jpg";
import barber from "@/assets/cat-barber.jpg";
import outdoor from "@/assets/cat-outdoor.jpg";
import type { Gamme } from "@/components/GammeCard";

export const gammes: Gamme[] = [
  {
    slug: "securite",
    title: "Sécurité & Terrain",
    price: "À partir de 15 €",
    image: securite,
    description: "Polos, t-shirts et vestes terrain pour agents de sécurité et SSIAP.",
    products: ["T-shirts sécurité", "Polos terrain", "Vestes sécurité", "Haute visibilité", "Accessoires SSIAP"],
  },
  {
    slug: "btp",
    title: "BTP & Chantier",
    price: "À partir de 19 €",
    image: btp,
    description: "Vêtements robustes, renforcés et pensés pour le terrain.",
    products: ["Pantalons renforcés", "Vestes chantier", "Coupe-vent", "Vêtements robustes"],
  },
  {
    slug: "restauration",
    title: "Restauration",
    price: "À partir de 12 €",
    image: resto,
    description: "Tenues de cuisine et de service pour restaurants et brigades.",
    products: ["Tabliers", "Vestes cuisine", "Polos restauration", "Tenues service"],
  },
  {
    slug: "sante",
    title: "Santé",
    price: "À partir de 14 €",
    image: sante,
    description: "Blouses, tuniques et vêtements médicaux confortables.",
    products: ["Blouses", "Tuniques", "Vêtements médicaux"],
  },
  {
    slug: "barber",
    title: "Barber & Esthétique",
    price: "À partir de 10 €",
    image: barber,
    description: "Tabliers, polos et tenues élégantes pour salons & instituts.",
    products: ["Tabliers barber", "Polos premium", "Tenues professionnelles"],
  },
  {
    slug: "outdoor",
    title: "Outdoor & Terrain",
    price: "À partir de 18 €",
    image: outdoor,
    description: "Gilets utilitaires et vêtements techniques pour le terrain.",
    products: ["Gilets utilitaires", "Vestes outdoor", "Sacs techniques", "Multi-poches"],
  },
];
