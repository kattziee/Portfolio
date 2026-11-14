"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const RESUME = "/Shahul%20Resume.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently in the middle of the screen
  useEffect(() => {
    const targets = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          setActive((prev) =>
            entry.isIntersecting ? id : prev === id ? "" : prev
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-gold/20 bg-plum-800/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Primary"
      >
        <a
          href="#"
          aria-label="Back to top"
          className="font-display text-xl text-gold transition-colors hover:text-gold-400"
        >
          SHA<span className="text-ink">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "location" : undefined}
              className="border-b-2 border-transparent py-1 text-sm font-medium text-mute transition-colors hover:text-ink aria-[current=location]:border-gold aria-[current=location]:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={RESUME}
            download
            className="rounded-md border border-gold/60 px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-plum-800"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="rounded-md p-2 text-mute transition-colors hover:text-ink md:hidden"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-gold/20 px-6 py-4 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-ink transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={RESUME}
            download
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-md border border-gold/60 px-4 py-3 text-center font-medium text-gold transition-colors hover:bg-gold hover:text-plum-800"
          >
            Download resume
          </a>
        </div>
      )}
    </header>
  );
}
