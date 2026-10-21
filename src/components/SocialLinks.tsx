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

const MailIcon = (props: { width: number; height: number }) => <Mail size={props.width} aria-hidden />;

// Any link left empty in site.ts is hidden.
const socials = [
  { label: "LinkedIn", href: site.links.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: site.links.github, Icon: GithubIcon },
  { label: "Instagram", href: site.links.instagram, Icon: InstagramIcon },
  { label: "X", href: site.links.x, Icon: XIcon },
  { label: "Fiverr", href: site.links.fiverr, Icon: FiverrIcon },
  { label: "Upwork", href: site.links.upwork, Icon: UpworkIcon },
  { label: "WhatsApp", href: site.links.whatsapp, Icon: WhatsappIcon },
  { label: "Email", href: site.links.email && `mailto:${site.links.email}`, Icon: MailIcon },
].filter((s) => s.href);

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {socials.map(({ label, href, Icon }) => {
        const external = !href.startsWith("mailto:");
        return (
          <li key={label}>
            <a
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              aria-label={external ? `${label} (opens in new tab)` : label}
              className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              <Icon width={18} height={18} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
