import { WhatsappIcon } from "./BrandIcons";
import { WhatsAppLink } from "./WhatsAppLink";

export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      aria-label="Chat with us on WhatsApp (opens in new tab)"
      className="fixed right-4 bottom-[88px] z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform hover:scale-105 motion-reduce:transition-none md:right-6 md:bottom-6"
    >
      <WhatsappIcon width={28} height={28} />
    </WhatsAppLink>
  );
}
