import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CatalogPopupProvider } from "@/components/CatalogPopupProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-gold-gradient">404</h1>

        <h2 className="mt-4 font-serif text-2xl">
          Page introuvable
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium transition hover:bg-foreground/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl">
          Cette page n'a pas pu se charger
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Réessayez ou retournez à l'accueil.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium transition hover:bg-foreground/90"
          >
            Réessayer
          </button>

          <a
            href="/"
            className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium transition hover:bg-accent"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{
    queryClient: QueryClient;
  }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          title:
            "THE ONE SURPRISE — Vêtements professionnels premium français",
        },

        {
          name: "description",
          content:
            "Vêtements professionnels, sécurité, BTP, restauration, santé, barber et personnalisation textile. Marque française premium pour entreprises et indépendants.",
        },

        {
          name: "author",
          content: "THE ONE SURPRISE",
        },

        {
          property: "og:title",
          content:
            "THE ONE SURPRISE — Vêtements professionnels premium",
        },

        {
          property: "og:description",
          content:
            "Marque française dédiée aux professionnels du terrain.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:locale",
          content: "fr_FR",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>

      <body className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CatalogPopupProvider>
        <div className="relative min-h-screen overflow-x-hidden">
          <Header />

          <main className="min-h-screen overflow-x-hidden">
            <Outlet />
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </CatalogPopupProvider>
    </QueryClientProvider>
  );
}

