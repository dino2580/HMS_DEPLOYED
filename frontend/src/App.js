import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Announcement from './components/Announcement';
import SignUp from "./components/Signuppage";
// import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Loginpage';
// import SignUp from './components/SignUp';
import RoomList from './components/RoomList';
import Contact from './components/Contact';
import Complaints from "./components/Complaints";
import Workers from "./components/Workers";
import FeeDetails from "./components/FeeDetails";
import Footer from "./components/Footer";
// import Student from './components/Student';
import ChatRoom from './components/Chatrooms';
import chatgroup from './components/Chatgroup';
// import Chatgroup from './components/Chatgroup';
import HomePage from './components/Homepage';
import Student from './components/Student';
import Rules from './components/Rules';
import Guest from './components/Guest';
import General from './components/General';
import Mess from './components/Mess';
import Ragging from './components/Ragging';
import Maintenance from './components/Maintenance';
import Chatgroup from './components/Chatgroup';
import AdminDashboard from './components/AdminDashboard';
import Chat from './components/chat/Chat';
import MessMenu from './components/MessMenu';

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

          // console.log("Decoded Payload:", payload);
          // console.log("Email:", payload.email);
          // console.log("Is admin:", payload.admin);
          // console.log("Is admin:", payload.userId);
          localStorage.setItem("cookie", jwtCookie);
          localStorage.setItem("Email", payload.email);
          localStorage.setItem("admin", payload.admin);
          localStorage.setItem("hostel_no", payload.hostel_no);
          localStorage.setItem("userId", payload.userId);
          localStorage.setItem("full_name", payload.full_name);
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
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/announcement" element={<Announcement />} />
          {/* <Route path="/profile" element={<SignUpForm />} /> */}
          <Route path="/home" element={<HomePage/>} />
          <Route path="/login" element={<Login handleSubmit={handleSubmit} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Student" element={<Student/>}/> 
          <Route path="/Complaints" element={<Complaints/>}/> 
          <Route path="/Workers" element={<Workers/>}/> 
          <Route path="/FeeDetails" element={<FeeDetails/>}/> 
          <Route path='/rooms' element= {<RoomList/>} ></Route>
          <Route path='/contact' element={<Contact/> }/>
          <Route path='/chatgroup' element={<Chat/> }/>
          {/* <Route path='/chatroom/:group_id' element={<Chat/> }/> */}
          <Route path='/profile' element={<AdminDashboard/> }/>
          <Route path='/mess' element={<MessMenu/> }/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
