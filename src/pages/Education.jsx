/***********************************************/
/* This page contains the Education background */
/* which are stored in a constant array        */
/***********************************************/

const qualifications = [
  {
    year: "2026",
    credential: "Software Engineering Technician",
    institution: "Centennial College",
    description:
      "Current studies focused on software development, databases, programming, and modern application development.",
  },
  {
    year: "2023",
    credential: "AWS Certified Cloud Practitioner",
    institution: "Professional Development",
    description:
      "Training focused on foundational, high-level understanding of Amazon Web Services (AWS) cloud concepts.",
  },
  {
    year: "2023",
    credential: "Certified in Cybersecurity",
    institution: "Professional Development",
    description:
      "Training focused on cybersecurity principles, security practices, and protecting information systems.",
  },
  {
    year: "2021",
    credential: "Machine Learning Certificate",
    institution: "York University",
    description:
      "Certificate studies covering machine learning concepts, Python programming, and applied artificial intelligence.",
  },
  
];

function Education() {
  return (
    <section className="education-page">
      <div className="page-header">
        <p className="section-label">MY BACKGROUND</p>

        <h1>Education & Qualifications</h1>

        <p>
          My academic background and professional development have provided
          a foundation in engineering, software development, information
          technology, and cybersecurity.
        </p>
      </div>

      <div className="education-list">
        {qualifications.map((item) => (
          <article className="education-item" key={`${item.year}-${item.credential}`}>
            <div className="education-year">
              {item.year}
            </div>

            <div className="education-details">
              <h2>{item.credential}</h2>

              <h3>{item.institution}</h3>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Exports so it can be imported and used by other files
export default Education;