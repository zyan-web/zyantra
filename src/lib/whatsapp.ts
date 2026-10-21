import type { MouseEvent } from "react";
import { site } from "@/data/site";

const { phone, message } = site.whatsapp;
const text = encodeURIComponent(message);

/** Opens the WhatsApp app on phones. Also the href, so the link works without JavaScript. */
export const whatsappMobileUrl = phone ? `https://wa.me/${phone}?text=${text}` : "";

/** WhatsApp Web, for desktops that may not have the app installed (wa.me shows "No apps available" there). */
export const whatsappWebUrl = phone ? `https://web.whatsapp.com/send?phone=${phone}&text=${text}` : "";

export const hasWhatsapp = Boolean(phone);

export function isMobileDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/** onClick for WhatsApp links: phones follow the wa.me href, desktops open WhatsApp Web in a new tab. */
export function handleWhatsappClick(event: MouseEvent<HTMLAnchorElement>) {
  if (isMobileDevice()) return;
  event.preventDefault();
  window.open(whatsappWebUrl, "_blank", "noopener,noreferrer");
}
