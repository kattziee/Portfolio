"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const TITLES = [
  "Data Scientist",
  "Machine Learning",
  "Python Developer",
  "Power BI Analyst",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(TITLES[0]);
      return;
    }

    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex, reduceMotion]);

  return (
    <section className="pt-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16 lg:pb-28">
        <div>
          <p
            className="hero-fade flex items-center gap-2.5 text-sm text-mute"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
            Open to opportunities
          </p>

          <h1 className="mt-6 text-[clamp(2.6rem,7.2vw,6rem)] leading-[1.02] tracking-tight text-ink">
            <span className="hero-line">
              <span style={{ animationDelay: "0.05s" }}>Shahul Hameed</span>
            </span>
            <span className="hero-line">
              <span style={{ animationDelay: "0.17s" }}>Ali M</span>
            </span>
          </h1>

          <p
            className="hero-fade mt-6 h-10 font-display text-2xl text-gold sm:text-3xl"
            style={{ animationDelay: "0.45s" }}
          >
            <span className="sr-only">
              Data scientist, machine learning, Python developer and Power BI analyst.
            </span>
            <span aria-hidden="true">
              {displayed}
              <span className="typing-cursor ml-0.5">|</span>
            </span>
          </p>

          <p
            className="hero-fade mt-4 max-w-[46ch] text-lg leading-relaxed text-mute"
            style={{ animationDelay: "0.6s" }}
          >
            Turning raw data into decisions. Building intelligent systems from scratch.
          </p>

          <div
            className="hero-fade mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.75s" }}
          >
            <a
              href="#projects"
              className="rounded-md bg-gold px-6 py-3 font-semibold text-plum-800 transition-colors hover:bg-gold-400"
            >
              View projects
            </a>
            <a
              href="/Shahul%20Resume.pdf"
              download
              className="rounded-md border border-gold/60 px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Download resume
            </a>
          </div>

          <div
            className="hero-fade mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-mute"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="https://github.com/kattziee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <GitHubIcon className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shahulhameedalim/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="mailto:shahulhameedali8@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-gold"
            >
              <MailIcon className="h-5 w-5" />
              Email
            </a>
          </div>
        </div>

        {/* Portrait in an arch frame */}
        <div
          className="hero-fade mx-auto w-full max-w-[300px] lg:max-w-[340px] lg:justify-self-end"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="rounded-b-md rounded-t-[999px] border border-gold/70 p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-b-sm rounded-t-[999px] bg-plum-700">
              <Image
                src="/profile.png"
                alt="Portrait of Shahul Hameed Ali M"
                fill
                priority
                sizes="(min-width: 1024px) 340px, 300px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="zari" aria-hidden="true" />
    </section>
  );
}
