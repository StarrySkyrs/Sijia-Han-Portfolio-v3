import React, { useState } from 'react';
import '../assets/styles/About.scss';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import headshot from '../assets/images/Sijia Han Headshot.jpg';

// Define types for props
interface InteractiveChipProps {
  label: string;
  extraInfo: string;
}

const InteractiveChip: React.FC<InteractiveChipProps> = ({ label, extraInfo }) => {
  const [hovered, setHovered] = useState(false);

  const shouldShowTooltip = extraInfo.trim() !== '';

  return (
    <Tooltip
      title=<div style={{ fontSize: '14px'}}>{extraInfo}</div>
      placement="top-start"
      arrow
      open={shouldShowTooltip && hovered}
    >
      <Chip
        className="zoom"
        variant="outlined"
        label={label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
          backgroundColor: hovered ? '#20B2AA' : '#F8F9FA', // Light sea green on hover
          borderColor: hovered ? '#1C6E6E' : '#B0BEC5', // Darker border color on hover
          borderWidth: '2px', // Increase the border thickness
          borderStyle: 'solid', // Set the border style
          // borderRadius: '8px', // Optional: adjust border radius
          fontWeight: 'bold', // Optional: make text bold
          padding: '8px', // Optional: adjust padding
        }}        
        onClick={() => NaN}
      />
    </Tooltip>
  );
};

const About: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const resumeUpdateDate = "Sep 25, 2024"; // Update this date accordingly

  const openURL = () => {
    window.open('https://drive.google.com/file/d/1Jdh-4tWfzVMYPioYgojbxIL74SQM4aXn/view?usp=sharing', '_blank'); // Replace with your actual resume link
  };

  return (
    <div className="about-me-container" id='about'>
      <div className="about-text-content">
        <h1>About</h1>
        <p>
          Hello! I am Sijia Han, living in Vancouver, BC, Canada. 
          I am currently working as a <strong>Prompt Engineer</strong> @ Meta via TEKsystems, 
          focusing on optimizing the quality of GenAI-generated advertising images. 
        </p>
        
        <p>
        I graduated with a <u><strong><a href='https://masterdatascience.ubc.ca/programs/computational-linguistics' target="_blank" rel="noreferrer">Master's in Data Science</a></strong></u> from the 
        University of British Columbia in November 2022. My strong 
        background in <strong>Computer Science</strong> and <strong>Mathematics</strong> from the 
        University of Dalhousie has provided me with a solid 
        foundation for my expertise in data science. I am eager to 
        learn more about data science and machine learning techniques 
        and apply my skills to new projects. 
        </p>
      
        <p>
        If you are interested in collaborating with me or have any inquiries, 
        please don't hesitate to contact me!
        </p>

        <Tooltip
          title=<div style={{ fontSize: '14px'}}>{`Last updated on ${resumeUpdateDate}`}</div>
          placement="right"
          arrow
        >
          <button
            className="zoom"
            onClick={openURL}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              color: 'black', // Set text color to black
              padding: '8px',
              transition: 'background-color 0.3s ease, border-color 0.3s ease',
              borderColor: hovered ? 'black' : '#B0BEC5', // Darker border color on hover
              borderWidth: '2px', // Increase the border thickness
              borderStyle: 'solid', // Set the border style
              fontWeight: 'bold', // Optional: make text bold
            }}
          >
            <u>View My Resume</u>
          </button>
        </Tooltip>
                
        <p className='flex-chips'>If I am not coding, you can find me: <br />
          <InteractiveChip
            label="📖 Learning"
            extraInfo="I'm currently studying for the Microsoft Certified Azure Data Scientist Associate (DP-100) certification."
          />
          <InteractiveChip
            label="🥽 Swimming"
            extraInfo=""
          />
          <InteractiveChip
            label="🏝️ Traveling"
            extraInfo="Planning on visiting places in BC!"
          />
          <InteractiveChip
            label="🎮 Gaming"
            extraInfo="Fishing in the Red Dead Redemption 2 and enjoying a moment with Arthur Morgan."
          />
          <InteractiveChip
            label="🍹 Dining Out"
            extraInfo=""
          />
          <InteractiveChip
            label="🎧 Listening Music"
            extraInfo="Bye Bye Bye - NSYNC"
          />
          <InteractiveChip
            label="🎥 Watching Movies"
            extraInfo="Deadpool 3, Despicadle Me 4"
          />
          <InteractiveChip
            label="🧑‍🤝‍👨 Chilling With Friends"
            extraInfo=""
          />
        </p>
      </div>

      <div className="mecat-wrapper">
          <img src={headshot} alt="Sijia Han" />
      </div>
    </div>
  );
};

export default About;
