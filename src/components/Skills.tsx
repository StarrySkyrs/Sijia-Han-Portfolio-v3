import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical, } from '@fortawesome/free-solid-svg-icons';
import { faDocker, faPython} from '@fortawesome/free-brands-svg-icons';

import Chip from '@mui/material/Chip';
import '../assets/styles/Skills.scss';

const dataAnalyticsCode = [
    "Python",
    "R",
    "SQL",
];

const dataAnalyticsTools = [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Jupyter Notebooks",
    "RStudio",
    "Tableau",
    "Docker",
    "GitHub",
    "REST APIs",
    "Elasticsearch",
    "Excel",
];

const dataAnalyticsLibraries = [
    "Selenium",
    "BeautifulSoup",
    "Scrapy",
    "Pandas",
    "NumPy",
    "SciPy",
    "dplyr",
    "tidyr",
    "Seaborn",
    "Matplotlib",
    "Plotly",
    "Altair",
    "ggplot",
    "Shiny",
];

const machineLearningCode = [
    "Python",
    "SQL"
];

const machineLearningTools = [
    "Microsoft Azure",
    "Docker",
    "GitHub",
    "Jupyter Notebooks",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "FastAPI",
    "Flask",
    "Elasticsearch",
    "Excel",
    "Weights & Biases",
];

const machineLearningLibraries = [
    "scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "XGBoost",
    "LightGBM",
    "CatBoost",
    "Hugging Face Transformers", 
    "spaCy", 
    "NLTK",
    "OpenCV",
    "YOLO",
];

const llmCode = [
    "Python",
];

const llmTools = [
    "OpenAI",
    "Microsoft Azure",
    "GitHub",
    "Excel",
    "GPT-3.5 Turbo",
    "OpenAI GPT-4",
    "Jupyter Notebooks",
];

const llmLibraries = [
    "OpenAI",
    "LangChain",
    "Streamlit",
    "Hugging Face Transformers",
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faSquarePollVertical} size="3x"/>
                    <h3>Data Analytics</h3>
                    <p>I have a solid foundation in data analytics, 
                        leveraging tools such as Python, R, and SQL to extract, 
                        analyze, and visualize data. My experience spans the 
                        full analytics lifecycle, from data cleaning and 
                        preprocessing to advanced statistical analysis and reporting, 
                        enabling data-driven decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Program Languages:</span>
                        {dataAnalyticsCode.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {dataAnalyticsTools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Libraries:</span>
                        {dataAnalyticsLibraries.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Machine Learning Engineering</h3>
                    <p>I have developed and deployed machine learning models 
                        using Python libraries like TensorFlow, Scikit-learn, 
                        and PyTorch. My expertise covers the entire ML pipeline, 
                        including data preprocessing, feature engineering, 
                        model training, evaluation, and deployment, 
                        enabling the creation of scalable and 
                        production-ready AI solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Program Languages:</span>
                        {machineLearningCode.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {machineLearningTools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Libraries:</span>
                        {machineLearningLibraries.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I have extensive experience in fine-tuning Generative AI models 
                        and Large Language Models (LLMs) to create domain-specific 
                        expertise. My work focuses on customizing these models for 
                        specialized applications, ensuring they deliver precise and 
                        contextually relevant outputs. Additionally, I leverage 
                        prompt engineering techniques to optimize model interactions, 
                        enhancing the performance and reliability of AI-driven 
                        solutions in targeted fields.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Program Languages:</span>
                        {llmCode.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {llmTools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Libraries:</span>
                        {llmLibraries.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;