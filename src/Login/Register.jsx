import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    DOB: "",
    district: "",
    gender: "",
    address1: "",
    address2: "",
    address3: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      DOB: "",
      district: "",
      gender: "",
      address1: "",
      address2: "",
      address3: "",
      course: "",
    });
  };

  return (
    <div
      style={{
        margin: "20px",
        marginLeft: "14%",
        display: "flex",
        width: "950px",
        height: "850px",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ flex: 1, padding: "10px" }}
            />
            <input
              type="text"
              name="middle"
              placeholder="Middle Name"
              value={formData.middle}
              onChange={handleChange}
              required
              style={{ flex: 1, padding: "10px" }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ flex: 1, padding: "10px" }}
            />
          </div>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: "10px", marginBottom: "15px" }}
          />
          <br />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: "10px", marginBottom: "15px" }}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br />
          <div>
            <input
              type="text"
              name="address1"
              placeholder="Address Line 1"
              value={formData.address1}
              onChange={handleChange}
              required
              style={{
                width: "50%",
                flex: 1,
                padding: "10px",
                marginBottom: "15px",
              }}
            />
            <br />
            <input
              type="text"
              name="address2"
              placeholder="Address Line 2"
              value={formData.address2}
              onChange={handleChange}
              style={{
                width: "50%",
                flex: 1,
                padding: "10px",
                marginBottom: "15px",
              }}
            />
            <br />
            <input
              type="text"
              name="address3"
              placeholder="Address Line 3"
              value={formData.address3}
              onChange={handleChange}
              style={{
                width: "50%",
                flex: 1,
                padding: "10px",
                marginBottom: "15px",
              }}
            />
          </div>

          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: "10px", marginBottom: "15px" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Eg. example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          />

          <input
            type="text"
            name="phone"
            placeholder="Eg. 07X-XXX XXXX"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            style={{ padding: "10px", marginBottom: "15px" }}
          >
            <option value="" disabled>
              Select Course
            </option>
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="cyber-security">Cyber Security</option>
          </select>

          <br />
          <br />

          <button
            type="submit"
            style={{
              width: "30%",
              padding: "12px",
              backgroundColor: "#c0bcbc",
              color: "black",
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
