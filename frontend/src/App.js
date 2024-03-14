import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Announcement from "./components/Announcement";
import Home from "./components/Home";
import Login from "./components/Loginpage";
<<<<<<< Updated upstream
import SignUp from "./components/Signuppage";
=======
import SignUp from "./Signuppage";
import Student from "./components/Student";
import Complaints from "./components/Complaints";
import Workers from "./components/Workers";
>>>>>>> Stashed changes

function App() {
  const handleSubmit = async (formData) => {
    // event.preventDefault();
    const { email, password } = formData;

    console.log("Submitted with values:", email, password);
    const jsonData = JSON.stringify({
      email,
      password,
    });
    console.log(jsonData);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: jsonData,
        credentials: "include",
      });

      if (response.ok) {
        console.log("Login successful");
        const jwtCookie = document.cookie
          .split("; ")
          .find((row) => row.startsWith("jwt="));

        if (jwtCookie) {
          const jwtToken = jwtCookie.split("=")[1];
          console.log("JWT Token:", jwtToken);
          // Check if the user is admin

          const extractValuesFromJWT = (jwtToken) => {
            const tokenParts = jwtToken.split(".");
            if (tokenParts.length !== 3) {
              throw new Error("Invalid JWT token");
            }
            const base64Payload = tokenParts[1];
            const decodedPayload = atob(base64Payload);
            const payloadObj = JSON.parse(decodedPayload);
            return payloadObj;
          };

          // Example usage:
          const payload = extractValuesFromJWT(jwtToken);

          console.log("Decoded Payload:", payload);
          console.log("Email:", payload.email);
          console.log("Is admin:", payload.admin);
          localStorage.setItem("cookie", jwtCookie);
          localStorage.setItem("Email", payload.email);
          localStorage.setItem("admin", payload.admin);
          localStorage.setItem("hostel_no", payload.hostel_no);
          console.log(localStorage.getItem("admin"));
          console.log(localStorage.getItem("hostel_no"));
          const isAdmin = localStorage.getItem("admin") === "true";

          if (isAdmin) {
            // Redirect to the admin dashboard
            window.location.href = "/dashboard";
          } else {
            // Redirect to the user dashboard
            window.location.href = "/announcement";
          }
        } else {
          console.log("JWT cookie not found");
        }
      } else {
        console.error("Login failed:", response.statusText);
        // Handle unsuccessful login (display error message, etc.)
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/announcement" element={<Announcement />} />
          {/* <Route path="/profile" element={<SignUpForm />} /> */}
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={<Login handleSubmit={handleSubmit} />}
          />
           <Route path="/signup" element={<SignUp />} />
          <Route path="/Student" element={<Student/>}/> 
          <Route path="/Complaints" element={<Complaints/>}/> 
          <Route path="/Workers" element={<Workers/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
