"use client";

import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { WhatsappIcon } from "./BrandIcons";
import { WhatsAppLink } from "./WhatsAppLink";
import { Reveal } from "./Reveal";
import { buttonPrimary, buttonSecondary, container } from "./ui";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-foreground placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-accent";

export function Contact() {
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleInterest = (interest: string) =>
    setInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage("The contact form isn't configured yet. Please reach out by email or WhatsApp instead.");
      return;
    }

    const data = new FormData(form);
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New portfolio enquiry from ${data.get("name")}`,
          from_name: site.name,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          interests: interests.join(", ") || "Not specified",
          botcheck: data.get("botcheck") ? true : undefined,
        }),
      });
      const json = (await res.json()) as { success: boolean; message?: string };
      if (!res.ok || !json.success) throw new Error(json.message || "Something went wrong.");
      setStatus("success");
      setInterests([]);
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className={`${container} py-14 md:py-28`}>
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-10 md:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full bg-accent opacity-20 blur-[120px]"
        />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="mb-3 text-sm font-medium tracking-wide text-accent-strong uppercase">Contact</p>
            <h2 id="contact-title" className="text-[clamp(1.75rem,6.5vw,3rem)] leading-tight font-semibold tracking-tight text-balance">
              {site.contact.heading} <span className="accent-word">{site.contact.accent}</span>
            </h2>
            <p className="mt-4 text-muted sm:text-lg">{site.contact.subtext}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <WhatsAppLink className={buttonSecondary}>
                <WhatsappIcon width={18} height={18} /> Chat on WhatsApp
              </WhatsAppLink>
              {site.links.email && (
                <a href={`mailto:${site.links.email}`} className={buttonSecondary}>
                  <Mail size={18} aria-hidden /> Email us
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-6">
              <fieldset>
                <legend className="mb-3 text-sm font-medium">What can we help with?</legend>
                <div className="flex flex-wrap gap-2">
                  {site.contact.interests.map((interest) => {
                    const selected = interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleInterest(interest)}
                        className={`min-h-11 rounded-full border px-4 py-2 text-sm transition-colors ${
                          selected
                            ? "border-accent bg-accent text-white"
                            : "border-line bg-surface-2 text-muted hover:border-accent/60 hover:text-foreground"
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you building, and what's the timeline?"
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* Honeypot for spam bots */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

              <button type="submit" disabled={status === "sending"} className={`${buttonPrimary} w-full sm:w-auto`}>
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden /> Sending…
                  </>
                ) : (
                  <>
                    Send message <Send size={16} aria-hidden />
                  </>
                )}
              </button>

              <div aria-live="polite" role="status">
                {status === "success" && (
                  <p className="flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden />
                    Thanks! Your message is on its way. We&apos;ll get back to you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
                    {errorMessage || "Something went wrong. Please try again or use email/WhatsApp."}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
