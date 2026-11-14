import { GitHubIcon } from "./Icons";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string | null;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Automated Analyzer",
    description:
      "Automated Analyzer is a web-based application that streamlines data analysis by automating data validation, processing, and report generation. It enables users to upload datasets, perform statistical analysis, and visualize results through interactive dashboards and charts. Built with a responsive interface and secure backend, the system improves accuracy, reduces manual effort, and supports faster decision-making for educational, business, and research applications.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Plotly", "Streamlit"],
    featured: true,
  },
  {
    title: "Customer Churn Prediction",
    description:
      "A machine learning web app that predicts customer churn risk in real time. Built with a Python-trained model served via ONNX and a Next.js dashboard featuring customer risk scoring, drill-down insights, and model performance tracking. Deployed on Vercel.",
    tech: ["Python", "Scikit-learn", "Pandas", "ONNX", "TypeScript", "Vercel"],
    featured: true,
  },
  {
    title: "Employee Salary Prediction",
    description:
      "Developed an end-to-end machine learning application to predict employee salaries based on experience, education, job role, and other professional attributes. Implemented data preprocessing, feature engineering, and regression models to deliver accurate salary estimates. Built an interactive web interface for real-time predictions, enabling users to analyse salary trends and support data-driven compensation decisions.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    github: "https://github.com/kattziee",
  },
  {
    title: "Human vs LLM Detection",
    description:
      "Developed a machine learning application to distinguish between human-written and AI-generated text using Natural Language Processing (NLP) techniques. The system preprocesses text, extracts linguistic features, and classifies content using trained machine learning models. It helps identify AI-generated content with high accuracy, supporting academic integrity, content verification, and digital authenticity.",
    tech: ["Python", "Pandas", "JupyterNotebook", "Scikit-Learn"],
    github: "https://github.com/kattziee",
  },
];

function ProjectLinks({ project }: { project: Project }) {
  const hasDemo = project.demo && project.demo !== "#";
  if (!project.github && !hasDemo) return null;

  return (
    <div className="mt-5 flex gap-6 text-sm font-medium">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code on GitHub`}
          className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
        >
          <GitHubIcon className="h-4 w-4" />
          Code
        </a>
      )}
      {hasDemo && (
        <a
          href={project.demo as string}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className="text-gold underline-offset-4 hover:underline"
        >
          Live demo
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-plum-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl text-ink md:text-5xl">Projects</h2>
        <p className="mt-4 max-w-[52ch] text-lg text-mute">
          A selection of ML and data science projects, from raw datasets to deployed applications.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-md border-t-2 border-gold bg-plum-800 p-8"
            >
              <h3 className="text-2xl text-ink">{p.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-mute">{p.description}</p>
              <p className="mt-6 text-sm text-ink">{p.tech.join(", ")}</p>
              <ProjectLinks project={p} />
            </article>
          ))}
        </div>

        <ul className="mt-12 border-b border-plum-600">
          {others.map((p) => (
            <li
              key={p.title}
              className="grid gap-4 border-t border-plum-600 py-8 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10"
            >
              <h3 className="text-xl text-ink">{p.title}</h3>
              <div>
                <p className="max-w-[68ch] leading-relaxed text-mute">{p.description}</p>
                <p className="mt-4 text-sm text-ink">{p.tech.join(", ")}</p>
                <ProjectLinks project={p} />
              </div>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/kattziee"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2.5 rounded-md border border-gold/60 px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold/10"
        >
          <GitHubIcon className="h-5 w-5" />
          View all on GitHub
        </a>
      </div>
    </section>
  );
}
