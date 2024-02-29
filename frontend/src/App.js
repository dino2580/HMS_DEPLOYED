import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='bg-black'>
      <Navbar/>
    </div>
  );
}

export default App;
