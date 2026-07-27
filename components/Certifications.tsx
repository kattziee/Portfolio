"use client";

import { useEffect, useRef } from "react";

const certs = [
  {
    title: "Data Science & Machine Learning",
    issuer: "Internship Certificate — Dot Com Infoway",
    date: "June 2026",
    description:
      "Built churn prediction and salary estimation models; applied EDA, feature engineering, and regression/classification algorithms on real-world datasets.",
  },
  {
    title: "Python Course for Mastering the Essentials",
    issuer: "Scaler",
    date: "July 2026",
    description:
      "Covered Python fundamentals, control flow, functions, OOP, file handling, and problem-solving through hands-on coding exercises.",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.target.classList.toggle("visible", entry.isIntersecting)
        ),
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-24 px-6 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-14">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-2">
            Credentials
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Certifications
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Continuous learning across data science, machine learning, and
            analytics.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className="reveal group flex gap-5 p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {c.title}
                </h3>

                <p className="text-sm text-blue-500 font-medium mt-0.5">
                  {c.issuer}
                </p>

                <p className="text-xs text-gray-400 mt-0.5">{c.date}</p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Button */}
        <div className="reveal text-center mt-12">
          <a
            href="https://www.linkedin.com/in/shahulhameedalim/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all certifications on LinkedIn"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0A66C2] text-white font-semibold shadow-lg hover:bg-[#004182] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
            </svg>

            <span>View All Certifications</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5H19.5V10.5M19.5 4.5L10.5 13.5M5.25 6.75V18.75H17.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
