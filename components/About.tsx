const skills = [
  { category: "Languages", items: ["Python", "SQL"] },
  {
    category: "ML & Data Science",
    items: ["Scikit-learn", "Pandas", "NumPy", "Regression", "Classification"],
  },
  { category: "Visualization", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Jupyter Notebook", "Streamlit"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <h2 className="text-4xl text-ink md:text-5xl">About me</h2>
          <div className="mt-8 max-w-[62ch] space-y-5 text-[1.0625rem] leading-[1.75] text-mute">
            <p>
              I&apos;m an Aspiring Data Scientist with a strong foundation in Machine Learning,
              Statistics, Artificial Intelligence, and Data Analytics. Currently pursuing a
              Bachelor of Science in Computer Science at Jamal Mohamed College, Tiruchirappalli.
            </p>
            <p>
              I recently completed a Data Science Internship at Dot Com Infoway, where I developed
              and deployed end-to-end machine learning solutions, including Customer Churn
              Prediction and Employee Salary Prediction models using Python, Scikit-learn, and
              Streamlit.
            </p>
            <p>
              Skilled in Data Preprocessing, Exploratory Data Analysis (EDA), Feature Engineering,
              Predictive Modeling, Model Evaluation, and Interactive Dashboard Development.
              Passionate about transforming complex datasets into actionable insights and building
              scalable, data-driven solutions that solve real-world business problems.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-ink">Skills</h3>
          <dl className="mt-6 border-b border-plum-600">
            {skills.map((s) => (
              <div
                key={s.category}
                className="grid gap-1 border-t border-plum-600 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <dt className="font-medium text-gold">{s.category}</dt>
                <dd className="text-ink">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
