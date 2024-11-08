import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // Set a valid image URL for dark mode background
      document.body.style.backgroundImage = 'url("https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg")';
      document.body.style.backgroundSize = 'cover'; // Make sure image covers the screen
      document.body.style.backgroundColor = '#2b2d42'; // Dark background color
      document.body.style.color = 'white'; // Text color for dark mode
    } else {
      setMode('light');
      // Set a valid image URL for light mode background
      document.body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/old-camera-notebook-laptop-with-blue-pencil-cup-cappuccino-white-background_23-2147979092.jpg")';
      document.body.style.backgroundSize = 'cover'; // Make sure image covers the screen
      document.body.style.backgroundColor = '#f3f3f3'; // Light background color
      document.body.style.color = '#333'; // Text color for light mode
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;

