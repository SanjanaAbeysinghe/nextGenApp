import React from "react";
import "../Login/SignIn.css";

function AboutUs() {
  return (
    <div>
      <div id="aboutUscard">
        <div id="Box1">
          <h3 id="aboutus">About Us</h3>
        </div>
        <br />
        <div style={{ padding: "10px", margin: "20px" }}>
          <h4>Empower. Innovate. Lead.</h4>
          <br />
          <p>
            <h6 id="mission">NextGen Academy</h6> is a cutting-edge IT
            educational platform dedicated to preparing the next generation of
            tech leaders. We blend local insight with global industry standards
            to deliver high-quality, hands-on training in software development,
            cybersecurity, data science, AI, cloud computing, and more.
          </p>

          <p>
            <h6 id="mission">Our mission</h6> is to empower learners of all
            backgrounds with the technical skills, creative thinking, and
            professional mindset required to thrive in today’s fast-evolving
            digital world.
          </p>

          <p>
            At NextGen Academy, we believe in more than just teaching code—we
            shape problem solvers, innovators, and future-ready professionals.
            Our industry-aligned courses are designed by experts and delivered
            through immersive, project-based learning to ensure real-world
            application.
          </p>

          <p>
            Whether you're a student, a career switcher, or a tech enthusiast,
            we stand by you at every step of your learning journey—helping you
            grow, build, and succeed.
          </p>
          <p>
            We've already helped dozens of students launch successful careers in
            tech, and we’re just getting started.
          </p>

          <div className="profile-section">
            <div className="profile-image">
              <img
                src="https://i.pinimg.com/736x/9b/ef/f6/9beff61da29f659e5eb09b51e74b1b7e.jpg"
                alt="Founder"
              />
            </div>
          </div>
          <p>
            <span>Sanjana Abeysinghe</span>
            <br />
            Founder / Managing Director
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
