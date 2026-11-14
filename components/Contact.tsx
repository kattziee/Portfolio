"use client";
import { useState } from "react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

// Replace YOUR_FORMSPREE_ID below with your actual Formspree form ID when ready
const FORMSPREE_ID = "mqevlqjr";

const details = [
  {
    label: "Email",
    value: "shahulhameedali8@gmail.com",
    href: "mailto:shahulhameedali8@gmail.com",
  },
  { label: "Phone", value: "+91 7550398255", href: "tel:+917550398255" },
  { label: "Location", value: "Madurai, Tamil Nadu, India", href: null },
];

const inputClass =
  "w-full rounded-md border border-plum-600 bg-plum-950 px-4 py-3 text-ink placeholder:text-mute/60 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-plum-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl text-ink md:text-5xl">Contact</h2>
        <p className="mt-4 max-w-[52ch] text-lg text-mute">
          Open to data science roles, freelance projects, and collaboration. Let&apos;s talk.
        </p>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <dl className="border-b border-plum-600">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 border-t border-plum-600 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6"
                >
                  <dt className="text-mute">{item.label}</dt>
                  <dd className="text-ink">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="underline-offset-4 transition-colors hover:text-gold hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/kattziee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-md border border-gold/60 px-5 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shahulhameedalim/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-md border border-gold/60 px-5 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the opportunity or project..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "success" && (
              <p
                role="status"
                className="rounded-md border border-gold/50 bg-plum-800 px-4 py-3 text-sm text-ink"
              >
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="rounded-md border border-rose-300/50 bg-plum-800 px-4 py-3 text-sm text-rose-200"
              >
                Your message didn&apos;t send. Please email me directly at
                shahulhameedali8@gmail.com.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-md bg-gold px-6 py-3 font-semibold text-plum-800 transition-colors hover:bg-gold-400 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
