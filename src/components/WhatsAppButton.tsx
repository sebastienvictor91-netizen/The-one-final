const WA_URL =
  "https://wa.me/33782301346?text=Bonjour%2C%20je%20souhaite%20recevoir%20des%20informations%20sur%20vos%20v%C3%AAtements%20professionnels.";

export function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      {/* Glow premium bleu blanc rouge */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/35 via-white/40 to-red-600/35 blur-xl opacity-70 transition-all duration-300 group-hover:opacity-100" />

      {/* Bouton glass premium */}
      <span className="relative flex items-center gap-2 rounded-full border border-white/60 bg-white/35 px-5 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:bg-white/45">
        {/* Bande bleu blanc rouge derrière */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/45 via-white/55 to-red-600/45 opacity-90" />

        {/* Voile blanc premium pour lisibilité */}
        <span className="absolute inset-[2px] rounded-full bg-white/35 backdrop-blur-md" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          className="relative size-6 text-[#C9A24A] drop-shadow-sm"
          fill="currentColor"
          aria-hidden
        >
          <path d="M19.11 17.27c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.94.92-.94 2.24 0 1.32.97 2.6 1.1 2.78.13.18 1.9 2.9 4.6 4.07.64.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.22-.62.22-1.16.16-1.28-.06-.11-.24-.18-.51-.31zM16.01 5C9.93 5 5 9.93 5 16.01c0 1.95.51 3.84 1.48 5.51L5 27l5.65-1.48a10.96 10.96 0 0 0 5.36 1.37h.01c6.07 0 11-4.93 11-11S22.08 5 16.01 5zm0 19.86h-.01a9.03 9.03 0 0 1-4.6-1.26l-.33-.2-3.35.88.89-3.27-.21-.34a9.04 9.04 0 0 1-1.4-4.85c0-4.99 4.06-9.05 9.05-9.05 2.42 0 4.69.94 6.4 2.65a8.98 8.98 0 0 1 2.65 6.4c0 4.99-4.06 9.04-9.05 9.04z" />
        </svg>

        <span className="relative hidden text-sm font-semibold text-[#C9A24A] drop-shadow-sm sm:inline">
          WhatsApp
        </span>
      </span>
    </a>
  );
}