"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const skills = [
  { category: "Languages", items: ["Python", "SQL"] },
  { category: "ML & Data Science", items: ["Scikit-learn", "Pandas", "NumPy", "Regression", "Classification"] },
  { category: "Visualization", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Jupyter Notebook", "Streamlit"] },
];

export default function About() {
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
    <section id="about" ref={ref} className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="reveal flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/30 translate-x-4 translate-y-4" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Shahul Hameed Ali M"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 border border-gray-100 dark:border-gray-700">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for work</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="reveal">
              <p className="text-blue-500 font-semibold text-sm uppercase tracking-widest mb-2">About Me</p>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Turning Data into<br />
                <span className="text-blue-500">Decisions</span>
              </h2>
            </div>

            <div className="reveal">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m an Aspiring Data Scientist with a strong foundation in Machine Learning, Statistics, 
                Artificial Intelligence, and Data Analytics. Currently pursuing a Bachelor of Science in
                Computer Science at Jamal Mohamed College, Tiruchirappalli.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                I recently Completed a Data Science Internship at Dot Com Infoway, where I developed and
                deployed end-to-end machine learning solutions, including Customer Churn 
                Prediction and Employee Salary Prediction models using Python, Scikit-learn, and Streamlit.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                Skilled in Data Preprocessing, Exploratory Data Analysis (EDA), Feature Engineering,
                Predictive Modeling, Model Evaluation, and Interactive Dashboard Development. 
                Passionate about transforming complex datasets into actionable insights and building
                scalable, data-driven solutions that solve real-world business problems.
              </p>
            </div>

            {/* Skills grid */}
            <div className="reveal space-y-3 pt-2">
              {skills.map((s) => (
                <div key={s.category}>
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">
                    {s.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal pt-2">
              <a
                href="/Shahul Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
