"use client";
import { useEffect, useRef } from "react";

const certs = [
  {
    title: "Data Science & Machine Learning",
    issuer: "Internship Certificate — Dot Com Infoway",
    date: "Jun 2026",
    description: "Built churn prediction and salary estimation models; applied EDA, feature engineering, and regression/classification algorithms on real-world datasets.",
    color: "blue",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL / Coursera",
    date: "2025",
    description: "Covered Python fundamentals, data manipulation with Pandas, and statistical analysis for data science applications.",
    color: "blue",
  },
  {
    title: "Power BI — Data Analytics",
    issuer: "Microsoft Learn",
    date: "2025",
    description: "Dashboard design, DAX functions, data modelling, and business intelligence reporting with Power BI Desktop.",
    color: "blue",
  },
  {
    title: "SQL for Data Analysis",
    issuer: "HackerRank",
    date: "2026",
    description: "Advanced SQL queries, joins, aggregations, and window functions for analytical workloads.",
    color: "blue",
  },
];

export default function Certifications() {
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
    <section id="certifications" ref={ref} className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-2">Credentials</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Certifications</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Continuous learning across data science, machine learning, and analytics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <div
              key={c.title}
              className="reveal group flex gap-5 p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-blue-500 font-medium mt-0.5">{c.issuer}</p>
                <p className="text-xs text-gray-400 mt-0.5">{c.date}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}