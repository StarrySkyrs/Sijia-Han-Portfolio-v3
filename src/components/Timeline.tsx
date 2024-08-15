import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black'}}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2023 - Present"
            iconStyle={{ background: 'rgb(0, 128, 254)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faMeta} />}
          >
            <h3 className="vertical-timeline-element-title">
              💻 Prompt Engineer @ <a href="https://about.meta.com/company-info/" target="_blank" rel="noopener noreferrer"><u>Meta</u></a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Vancouver, BC</h4>
            <p>
              Python, SQL, Data Analysis, Data Engineering, Prompt Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black'}}
            date="May 2023 - Sep 2023"
            iconStyle={{ background: 'rgb(0, 128, 254)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              💻 Associate Machine Learning Developer @ <a href="https://altaml.com/" target="_blank" rel="noopener noreferrer"><u>AltaML</u></a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Calgary, AB</h4>
            <p>
              Python, Data Analytics, NLP, LLMs, Prompt Engineering, Git, Data Engineering, Azure Platform
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black'}}
            date="May 2022 - Jul 2022"
            iconStyle={{ background: 'rgb(0, 128, 254)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              💻 NLP Data Scientist @ <a href="https://www.hootsuite.com/" target="_blank" rel="noopener noreferrer"><u>Heyday by Hootsuite</u></a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Vancouver, BC</h4>
            <p>
              Python, Machine Learning, Data Analysis, Data Visualization, NLP, Computational Linguistics, Git, Data Science
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black'}}
            date="Sep 2021 - Nov 2022"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title">🎓 The University of British Columbia</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Vancouver, BC</h4>
            <p>
              <a href="https://masterdatascience.ubc.ca/programs/computational-linguistics" target="_blank" rel="noopener noreferrer"><u>Master of Data Science in Computational Linguistics</u></a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black'}}
            date="Aug 2019 - Sep 2019"
            iconStyle={{ background: 'rgb(0, 128, 254)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              💻 Information Technology Associate @ <a href="https://cmel.ca/" target="_blank" rel="noopener noreferrer"><u>CMEL</u></a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Halifax, NS</h4>
            <p>
              Java, React, JavaScript, HTML, MySQL
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black'}}
            date="Jan 2017 - Aug 2021"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title">🎓 Dalhousie University</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{marginTop: "10px"}}>Halifax, NS</h4>
            <p>
              Bachelor's degree of Computer Science with a Minor in Mathematics
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;