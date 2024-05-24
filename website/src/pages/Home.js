import React from 'react';
import StylizedBox from '../components/StylizedBox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'; 
import profileImage from '../photo.jpg'; 
import './Home.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="header">
          <Typography variant="h2" style={{ marginRight: '20px' }}>
            Ethan Hyde
          </Typography>
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="subheader">
        <Typography variant="h5" >
          Computer science student at the University of Oregon
        </Typography>
      </div>
        <div className="projects-header">
          <Typography variant="h4">
          My Projects
        </Typography>
      </div>
        <div className="projects">
          <div className="project-item">
            <StylizedBox text="AI Voice Detection" href="https://github.com/ethanhyde/AI_Voice_Detection" />
            <ul>
              <li>Developed using TensorFlow and React</li>
              <li>Trains a neural network to detect AI-generated voices</li>
              <li>Achieved 96% accuracy</li>
            </ul>
          </div>
          <div className="project-item">
            <StylizedBox text="MNIST Neural Network" href="https://github.com/ethanhyde/MNIST_NeuralNetwork" />
            <ul>
              <li>Classifies handwritten digits</li>
              <li>Compared serial and parallel implementations of SGD/AdaGrad algorithms</li>
              <li>Accuracy of 98%</li>
            </ul>
          </div>
          <div className="project-item">
            <StylizedBox text="Unity Missile Game" href="https://github.com/ethanhyde/UnityMissileMayhem" />
            <ul>
              <li>Built with Unity</li>
              <li>Advanced physics and linear algebra</li>
              <li>Created assets in Blender</li>
            </ul>
          </div>
          <div className="project-item">
            <StylizedBox text="Pomodoro Timer" href="https://github.com/ethanhyde/PomodoroTimer" />
            <ul>
              <li>Productivity tool</li>
              <li>Customizable session lengths, to-do lists, animations</li>
              <li>Built with SwiftUI in XCode</li>
            </ul>
          </div>
          <div className="project-item">
            <StylizedBox text="Active Reading Assistant" href="https://github.com/ethanhyde/CS422_Project1" />
            <ul>
              <li>Assists in active recall and textbook reading</li>
              <li>Built UI with TKinter, and backend with MongoDB using Python</li>
              <li>60+ pages of documentation </li>
            </ul>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
