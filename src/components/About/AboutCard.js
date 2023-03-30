import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mabo Mbebeta </span>
            from <span className="purple">Mwense , Zambia.</span>
            <br />I am a Software Developer Specialized in Backend developement.
            <br />
            <br />I am a Data Scientist and Supply Chain Specialist.
            <br />
            <br />
            Apart from coding, analysing data, developing machine learning
            models and optimizing supply chain systems some other activities
            that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Web Series
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Excellence is never an accident. It is always the result of high
            intention, sincere effort, and intelligent execution; it represents
            the wise choice of many alternatives - choice, not chance,
            determines your destiny"{" "}
          </p>
          <footer className="blockquote-footer">Aristotle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
