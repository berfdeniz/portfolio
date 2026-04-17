import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#about" className={active === "about" ? "active" : ""}>
          About me
        </a>
        <a href="#portfolio" className={active === "portfolio" ? "active" : ""}>
          Portfolio
        </a>
        <a href="#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </a>
      </nav>

      {/* SECTION 1 — HERO */}
      <section id="about" className="section hero">
        <div className="content">
          <h1>
            Hello <br />
            world. 👩🏼‍💻
          </h1>
          <p>Hi, it's Deniz. I'm a passionate and enthusiastic Computer Engineer</p>
          <p>who loves building software and turning ideas into real products.</p>
          <p>I enjoy learning new technologies and continuously improving my skills.</p>
          <p>With my attention to detail and perfectionist mindset,</p>
          <p>I strive to deliver high-quality solutions and bring your ideas to life.</p>
        </div>
      </section>

      {/* SECTION 2 — PROJECTS */}
      <section id="portfolio" className="section portfolio">
        <div className="content">
          <h2>
            My <br />
            Works.
          </h2>

          <ProjectCard
            title="Telecom Customer Behaviour & Prediction System (Current)"
            description={"In this project, I work as a Data Lake Developer and Solution Architect / Project Manager. I optimize query performance and manage indexing, oversee materialized views and curated datasets, and design the overall system architecture and data flows. I also coordinate the integration of Oracle, machine learning, and frontend components."}
          />

          <ProjectCard
            title="AI Voice Assistant"
            description="Real-time voice assistant built with Python and ElevenLabs API."
          />

          <ProjectCard
            title="Cafe Finder"
            description="Swipe-based cafe discovery app using Google Places API."
          />

          <ImageProjectCard
            image="/images/tl-project.png"
            title="Turkish Lira Value Analysis Platform"
            description="Built a backend service using Node.js and Express to fetch and process historical economic data (inflation and exchange rates) from the TCMB EVDS API. Designed RESTful APIs, handled data transformation, and prepared datasets for visualization of Turkish Lira value trends over time."
            githubLink="https://github.com/berfdeniz/turkish-liras-value-by-time"
          />
          <div className="see-more">
                <a
                  href="https://github.com/berfdeniz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See more →
                </a>
              </div>
        </div>
      </section>

      {/* SECTION — EXPERIENCE & CERTIFICATES */}
      <section id="experience" className="section portfolio">
        <div className="content">
          <h2>
            Education <br />
            & Experience.
          </h2>

          {/* CERTIFICATES */}

          <div className="exp-item">
            <h3>Computer Engineering Bachelor’s Degree<br />
            Antalya Bilim University </h3>
          </div>

          <div className="cert-item">
            <a
              href="https://stdaiu-my.sharepoint.com/:b:/g/personal/berfindeniz_dogan_std_antalya_edu_tr/IQDaX_AHaV8zTL-USkYxOwrpAZRPaLcfgg9B8Vq4B7Y_4cw?e=augU6u"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intensivkurs Deutsch an der Universität Wien →
            </a>
          </div>

          {/* EXPERIENCE */}

          <div className="exp-item">
            <h3> </h3>
          </div>

          <div className="exp-item">
            <h3>Electroweb — Computer Engineering Intern</h3>
          </div>

          <div className="exp-item">
            <h3>Eticsoft — Computer Engineering Intern (Current)</h3>
          </div>

        </div>
      </section>

      {/* SECTION 3 — CONTACT */}
      <section id="contact" className="section contact">
        <div className="content">
          <h2>Contact <br />
              me.
          </h2>
          <p>Email: berfindenizdogan@gmail.com</p>
          <p>GitHub: github.com/berfdeniz</p>
          <p>LinkedIn: linkedin.com/in/deniz-doğan-a2585a292</p>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description }) {
  const toggle = (e) => {
    const desc = e.currentTarget.nextSibling;
    desc.classList.toggle("show");
  };

  return (
    <div className="project-card">
      <div className="project-header" onClick={toggle}>
        <h3>{title}</h3>
        <span>+</span>
      </div>
      <p className="project-desc">{description}</p>
    </div>
  );
}

function ImageProjectCard({ image, title, description, githubLink }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="image-project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="image-project-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span>{open ? "−" : "+"}</span>
      </div>

      <div className={`image-project-desc ${open ? "show" : ""}`}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default App;