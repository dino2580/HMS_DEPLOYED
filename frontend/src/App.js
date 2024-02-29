import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function Home() {
  return <h1>Home Page</h1>; 
}

function About() {
  return <h1>About Page</h1>; 
}

function App() {
  return (
      <div className="bg-black h-screen">
        <Navbar />
      </div>
  );
}

export default App;

