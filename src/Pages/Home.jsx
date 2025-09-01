import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <img
          src="https://i.pinimg.com/736x/ac/de/f1/acdef1797a7b28347bedbac696303a04.jpg"
          alt="Placeholder"
          style={{
            width: "450px",
            height: "450px",
            right: "10px",
            position: "absolute",
            right: "180px",
            top: "100px",
            borderRadius: "75px",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      <div>
        <div style={{ marginTop: "10px" }}>
          <h1
            style={{
              margintop: "25px",
              marginLeft: "130px",
              width: "60%",
              textAlign: "left",
              fontFamily: "Trebuchet Ms, sans-serif",
              fontWeight: "bold",
              color: "#0a996eff",
            }}
          >
            Welcome to NextGen Academy
          </h1>
          <p
            style={{
              marginLeft: "155px",
              width: "60%",
              textAlign: "left",
              fontFamily: "Trebuchet Ms, sans-serif",
            }}
          >
            Empowering the Next Generation of Innovators, Leaders, and Thinkers
          </p>
          <p
            style={{
              marginLeft: "170px",
              border: "1px solid #0a996eff",
              padding: "30px",
              borderRadius: "60px",
              width: "450px",
              height: "450px",
              textAlign: "center",
            }}
          >
            At NextGen Academy, we’re redefining education for a new era. Our
            mission is to provide students with future-ready skills, hands-on
            learning experiences, and a mindset of innovation and growth.
            Whether you're preparing for academic excellence, mastering
            cutting-edge technologies, or exploring creative passions, NextGen
            Academy is your launchpad to success.
            <p>
              With a focus on personalized learning, expert mentorship, and
              real-world application, we help students go beyond the classroom —
              and into a future they’re excited to lead.
            </p>
            <br />
            <p>Learn. Grow. Lead. The next generation starts here.</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
