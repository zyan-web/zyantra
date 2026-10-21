import { Mail } from "lucide-react";
import { site } from "@/data/site";
import {
  FiverrIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  UpworkIcon,
  WhatsappIcon,
  XIcon,
} from "./BrandIcons";
import { WhatsAppLink } from "./WhatsAppLink";
import { hasWhatsapp } from "@/lib/whatsapp";

// Any link left empty in site.ts is hidden.
const socials = [
  { label: "LinkedIn", href: site.links.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: site.links.github, Icon: GithubIcon },
  { label: "Instagram", href: site.links.instagram, Icon: InstagramIcon },
  { label: "X", href: site.links.x, Icon: XIcon },
  { label: "Fiverr", href: site.links.fiverr, Icon: FiverrIcon },
  { label: "Upwork", href: site.links.upwork, Icon: UpworkIcon },
].filter((s) => s.href);

const email = site.links.email && `mailto:${site.links.email}`;

const iconClass =
  "grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-foreground";

/** `whatsapp={false}` drops the WhatsApp icon, e.g. where the floating button already offers it. */
export function SocialLinks({ className = "", whatsapp = true }: { className?: string; whatsapp?: boolean }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in new tab)`} className={iconClass}>
            <Icon width={18} height={18} />
          </a>
        </li>
      ))}
      {whatsapp && hasWhatsapp && (
        <li>
          <WhatsAppLink aria-label="WhatsApp (opens in new tab)" className={iconClass}>
            <WhatsappIcon width={18} height={18} />
          </WhatsAppLink>
        </li>
      )}
      {email && (
        <li>
          <a href={email} aria-label="Email" className={iconClass}>
            <Mail size={18} aria-hidden />
          </a>
        </li>
      )}
    </ul>
  );
}
