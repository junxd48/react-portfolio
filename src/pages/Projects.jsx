const projects = [
  {
    title: "Student Disability & Accommodation Services System",
    image: "/images/projects/disability-system.jpg",
    description:
      "A proposed system for managing student disability accommodations, appointments, resources, notifications, and communication with support staff.",
    role: "System Analyst / Developer",
    outcome:
      "Designed a centralized solution that organizes accommodation-related services and provides students and support staff with easier access to information and services.",
  },
  {
    title: "Fake Review Detection API",
    image: "/images/projects/fake-review.jpg",
    description:
      "A machine-learning REST API designed to identify potentially fake online reviews using natural language processing.",
    role: "Machine Learning / Software Developer",
    outcome:
      "Developed a working REST API using Python, Flask, and BERT-based language processing to classify review content.",
  },
  {
    title: "Retail Payment Technology Support",
    image: "/images/projects/payment-system.jpg",
    description:
      "Enterprise payment technology support involving point-of-sale systems, payment terminals, APIs, transaction messaging, and troubleshooting.",
    role: "Payment Technology Analyst",
    outcome:
      "Supported payment applications and devices in a large retail environment while investigating transaction issues and maintaining reliable payment operations.",
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <div className="page-header">
        <p className="section-label">MY WORK</p>
        <h1>Projects</h1>
        <p>
          A selection of academic and professional projects demonstrating
          my experience with software development, systems analysis, and
          enterprise technology.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <p>
                <strong>Role:</strong> {project.role}
              </p>

              <p>
                <strong>Outcome:</strong> {project.outcome}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;