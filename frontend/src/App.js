import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
function Home() {
  return <h1>Home Page</h1>; 
}

function About() {
  return <h1>About Page</h1>; 
}

function App() {
  return (
      <div className="bg-black h-screen">
        <Signup />
      </div>
  );
}

export default App;

