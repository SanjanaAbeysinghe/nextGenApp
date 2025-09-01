import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import AboutUs from "./Pages/AboutUs";
import Courses from "./Pages/Courses";
import Faculty from "./Pages/Faculty";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import SignIn from "./Login/SignIn";
import Register from "./Login/Register";
import WebDev from "./Pages/WebDev";
import DataScience from "./Pages/DataScience";
import GraphicD from "./Pages/GraphicD";
import CyberS from "./Pages/CyberS";
import Payment from "./Pages/Payment";

function App() {
  return (
    <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/course" element={<Courses />}></Route>
          <Route path="/faculty" element={<Faculty />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/course/webdev" element={<WebDev />}></Route>
          <Route path="/course/datascience" element={<DataScience />}></Route>
          <Route path="/courser/graphicd" element={<GraphicD />}></Route>
          <Route path="/course/cybers" element={<CyberS />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
