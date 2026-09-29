import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="intro">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Building Technology Solutions
          <br />
          with Purpose
        </h1>

        <p className="hero-description">
          I am an IT and software professional with experience in
          infrastructure, networking, systems support, and application
          development.
        </p>

        <Link to="/about" className="primary-button">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}

export default Home;