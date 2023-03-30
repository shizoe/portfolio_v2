import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import landing from "../../Assets/Projects/landing.png";
import malariaapp from "../../Assets/Projects/malaria.jpeg";
import mlinkme from "../../Assets/Projects/mlinkme.png";
import weatherapp from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mlinkme}
              isBlog={false}
              title="mLINKME"
              description="mLINKME is a web application that takes a long URL and creates a shorter, more manageable version that can be easily shared on social media, email, or other online platforms. This helps to save space and make links more visually appealing, while also tracking clicks and providing analytics. Technological used are Python - Flask Framework, Bootstrap, JQuery, Google Analytics, SQLite, uWSGI and orcale cloud including others. "
              link="https://github.com/shizoe/mlinkme"
              liveLink="https://mlinkme.click"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Landing Page"
              description="This project gives indepth information about the link shortener. Welcome to our link shortener application! Say goodbye to long, unwieldy URLs and hello to concise, shareable links. Our app helps you create shortened links that are perfect for social media, email, or any other online platform. Plus, with built-in tracking and analytics, you can see how your links are performing in real time. Try it today!"
              link="https://github.com/shizoe/landing"
              liveLink="https://about.mlinkme.click/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malariaapp}
              isBlog={false}
              title="Malaria Data Tool - Andriod"
              description="The malaria data collection application streamlines the process of gathering and analyzing malaria prevalence data. With user-friendly forms, real-time data syncing, and built-in quality control measures, our app makes it easy for healthcare professionals and researchers to collect accurate data on the prevalence and incidence of malaria, helping to inform better prevention and treatment strategies."
              link="https://github.com/shizoe/Mwense.Malaria.App"
              liveLink="https://about.mlinkme.click/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather Application"
              description="Our weather forecast website provides up-to-date information on local and global weather conditions. With accurate hourly and daily forecasts, detailed radar maps, and severe weather alerts, you'll always be prepared for what's ahead. Whether you're planning a weekend getaway or just need to know what to wear tomorrow, we've got you covered."
              link="https://github.com/shizoe/weatherapp"
              liveLink="https://weather.mabombebeta.ml/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
