import { WhatsappIcon } from "./BrandIcons";
import { WhatsAppLink } from "./WhatsAppLink";

export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      aria-label="Chat with us on WhatsApp (opens in new tab)"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 motion-reduce:transition-none sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon width={28} height={28} />
    </WhatsAppLink>
  );
}
