import React from "react";
import "./FacultyPage.css";

const facultyMembers = [
  {
    name: "Dr. Nimal Perera",
    title: "Senior Lecturer - IT",
    image:
      "https://i.pinimg.com/736x/59/af/9c/59af9cd100daf9aa154cc753dd58316d.jpg",
    bio: "Expert in Software Engineering with 15+ years of teaching experience.",
  },
  {
    name: "Ms. Anusha Fernando",
    title: "Lecturer - Graphic Designing",
    image:
      "https://i.pinimg.com/736x/59/af/9c/59af9cd100daf9aa154cc753dd58316d.jpg",
    bio: "Expert in Software Engineering with 15+ years of teaching experience.",
  },
  {
    name: "Mr. Sajith premadasa",
    title: "Lecturer - Web Development",
    image:
      "https://i.pinimg.com/736x/59/af/9c/59af9cd100daf9aa154cc753dd58316d.jpg",
    bio: "Expert in Software Engineering with 15+ years of teaching experience.",
  },
  {
    name: "Mr. Mahinda Rajapaksha",
    title: "Lecturer - Programming",
    image:
      "https://i.pinimg.com/736x/59/af/9c/59af9cd100daf9aa154cc753dd58316d.jpg",
    bio: "Expert in Software Engineering with 15+ years of teaching experience.",
  },
  {
    name: "Mr. Ranil Wikramasinghe",
    title: "Lecturer - Front-End Development",
    image:
      "https://i.pinimg.com/736x/59/af/9c/59af9cd100daf9aa154cc753dd58316d.jpg",
    bio: "Expert in Software Engineering with 15+ years of teaching experience.",
  },
  {
    name: "Mr. Anura Kumara",
    title: "Lecturer - Back-End Development",
    image:
      "https://i.pinimg.com/736x/59/af/9c/59af9cd100daf9aa154cc753dd58316d.jpg",
    bio: "Expert in Software Engineering with 15+ years of teaching experience.",
  },
];

function Faculty() {
  return (
    <div id="facultycard">
      <div className="faculty-container">
        <h2>Meet Our Faculty</h2>
        <div className="faculty-grid">
          {facultyMembers.map((faculty, index) => (
            <div className="faculty-card" key={index}>
              <img src={faculty.image} alt={faculty.name} />
              <h3>{faculty.name}</h3>
              <p className="title">{faculty.title}</p>
              <p className="bio">{faculty.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;
