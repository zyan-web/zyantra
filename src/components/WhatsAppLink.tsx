"use client";

import type { ComponentProps } from "react";
import { handleWhatsappClick, hasWhatsapp, whatsappMobileUrl } from "@/lib/whatsapp";

/** Every WhatsApp button uses this. Renders nothing if no phone number is set in site.ts. */
export function WhatsAppLink(props: Omit<ComponentProps<"a">, "href" | "onClick" | "target" | "rel">) {
  if (!hasWhatsapp) return null;
  return (
    <a
      {...props}
      href={whatsappMobileUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsappClick}
    />
  );
}
