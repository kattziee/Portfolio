"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Employee Salary Prediction",
    description:
      "End-to-end ML web app that estimates employee salaries based on experience, skills, and job attributes. Includes interactive dashboard with real-time prediction.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    github: "https://github.com/kattziee",
    demo: "#",
    highlight: true,
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Classification model identifying customers likely to churn, enabling data-driven retention strategies. Built with full EDA pipeline and feature engineering.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/kattziee",
    demo: null,
  },
  {
    title: "Sales Dashboard — Power BI",
    description:
      "Interactive Power BI dashboard visualising regional sales performance, KPIs, and month-over-month trends for business decision-making.",
    tech: ["Power BI", "DAX", "SQL"],
    github: "https://github.com/kattziee",
    demo: null,
  },
  {
    title: "Exploratory Data Analysis — Titanic",
    description:
      "Deep-dive EDA on the Titanic dataset uncovering survival patterns by class, age, and gender using statistical visualisations.",
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    github: "https://github.com/kattziee",
    demo: null,
  },
  {
    title: "House Price Prediction",
    description:
      "Regression model predicting house prices using feature engineering on location, area, and amenities with comprehensive model evaluation.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    github: "https://github.com/kattziee",
    demo: null,
  },
  {
    title: "Student Performance Analysis",
    description:
      "Statistical analysis and visualisation of factors influencing student academic performance, with actionable insights presented via Seaborn plots.",
    tech: ["Python", "Pandas", "Seaborn", "Statistics"],
    github: "https://github.com/kattziee",
    demo: null,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-blue-600 font-semibold text-xl uppercase tracking-widest mb-2">Work</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            A selection of ML and data science projects — from raw datasets to deployed applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                p.highlight
                  ? "border-blue-500/40 bg-blue-50/70 dark:bg-blue-950/20 backdrop-blur-sm hover:shadow-blue-500/10"
                  : "border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm hover:shadow-gray-200/60 dark:hover:shadow-gray-900"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {p.highlight && (
                <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500 text-white">
                  Featured
                </span>
              )}

              <div className="flex-1">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-blue-500 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                  Code
                </a>
                {p.demo && p.demo !== "#" && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <a
            href="https://github.com/kattziee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-emerald-500 hover:text-emerald-500 transition-all duration-200"
          >
            View all on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
