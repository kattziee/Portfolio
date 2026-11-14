import { LinkedInIcon } from "./Icons";

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
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl text-ink md:text-5xl">Certifications</h2>
        <p className="mt-4 max-w-[52ch] text-lg text-mute">
          Continuous learning across data science, machine learning, and analytics.
        </p>

        <ul className="mt-12 border-b border-plum-600">
          {certs.map((c) => (
            <li
              key={c.title}
              className="grid gap-3 border-t border-plum-600 py-8 md:grid-cols-[minmax(0,1fr)_9rem] md:gap-10"
            >
              <div>
                <h3 className="text-xl text-ink">{c.title}</h3>
                <p className="mt-1 font-medium text-gold">{c.issuer}</p>
                <p className="mt-3 max-w-[62ch] leading-relaxed text-mute">{c.description}</p>
              </div>
              <p className="text-mute md:text-right">{c.date}</p>
            </li>
          ))}
        </ul>

        <a
          href="https://www.linkedin.com/in/shahulhameedalim/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all certifications on LinkedIn"
          className="mt-12 inline-flex items-center gap-2.5 rounded-md border border-gold/60 px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold/10"
        >
          <LinkedInIcon className="h-5 w-5" />
          View all certifications
        </a>
      </div>
    </section>
  );
}
