import React from 'react';
import '../assets/styles/Project.scss';
import chatbot from '../assets/images/chatbot.png'
import covidcorpus from '../assets/images/CovidCorpus.png'
import sentcovid19 from '../assets/images/SentAnalysisCovid19.png'
import covidsent from '../assets/images/covidsent.png'
import facebook from '../assets/images/facebook.png'
import spval from '../assets/images/spval.png'
import dualmap from '../assets/images/dualmap.png'
import ecosage from '../assets/images/ecosage.png'


function Project() {
  return  (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
      <div className="project">
          <a href="https://github.com/StarrySkyrs/EcoSage" target="_blank" rel="noreferrer"><img src={ ecosage } className="zoom" alt="thumbnail" style={{ width: '100%'}}/></a>
          <a href="https://github.com/StarrySkyrs/EcoSage" target="_blank" rel="noreferrer"><h2>EcoSage</h2></a>
          <p>Innovative recycling app that simplifies the recycling process by providing clear instructions on how to recycle various objects.</p>
          <p>Used: Python, Computer Vision, Web Scraping, Image Segmentation, Steamlit, LLMs,  Image-to-Text Generation</p>
          <p>The project won first place in the 2023 AltaML Sustainability Hackathon. I am sharing this to express my gratitude to my teammates and to satisfy my desire to share. :)</p>
        </div>
        <div className="project">
          <a href="https://public.tableau.com/app/profile/sijia.han/viz/DualLayerMaps_16975214768080/ADualLayerMap" target="_blank" rel="noreferrer"><img src={ dualmap } className="zoom" alt="thumbnail" style={{ width: '100%'}}/></a>
          <a href="https://public.tableau.com/app/profile/sijia.han/viz/DualLayerMaps_16975214768080/ADualLayerMap" target="_blank" rel="noreferrer"><h2>Dual Layer Maps</h2></a>
          <p>A tableau chart showing the dual layer map with info on sales and profit in each state on the map.</p>
          <p>Used: Tableau, Microsoft Excel</p>
        </div>
        <div className="project">
          <a href="https://github.com/StarrySkyrs/NegativeAwareNER" target="_blank" rel="noreferrer"><img src={ chatbot } className="zoom" alt="thumbnail" style={{ width: '100%'}}/></a>
          <a href="https://github.com/StarrySkyrs/NegativeAwareNER" target="_blank" rel="noreferrer"><h2>Negative Aware NER ChatBot System</h2></a>
          <p>Developed a Negation-Aware Named Entity Recognition (NER) system for chatbots in the E-Commerce domain in Python and deployed it with a user-friendly interface using FastAPI.</p>
          <p>Used: Python, Machine Learning, NLP, Data Analysis</p>
        </div>
        <div className="project">
          <a href="https://github.com/StarrySkyrs/COVID-Corpus" target="_blank" rel="noreferrer"><img src={ covidcorpus } className="zoom" alt="thumbnail" style={{ width: '100%'}}/></a>
          <a href="https://github.com/StarrySkyrs/COVID-Corpus" target="_blank" rel="noreferrer"><h2>COVID Corpus</h2></a>
          <p>A Covid-related corpus with sentiment and topic hashtags.</p>
          <p>Used: Python, Docker, React, FastAPI</p>
        </div>
        <div className="project">
          <a href="https://github.com/StarrySkyrs/Sentiment-Analysis-of-Twitter-Comments-Related-to-COVID19/tree/main" target="_blank" rel="noreferrer"><img src={ sentcovid19 } className="zoom" alt="thumbnail" style={{ width: '100%'}}/></a>
          <a href="https://github.com/StarrySkyrs/Sentiment-Analysis-of-Twitter-Comments-Related-to-COVID19/tree/main" target="_blank" rel="noreferrer"><h2>Sentiment Analysis on Twitter comments related to Covid-19</h2></a>
          <p>With the trend of the pandemic, analyzing public sentiment data in the comments can also help understand the public's emotional changes during the epidemic, helping understand the public's perception of the epidemic.</p>
          <p>Used: Python, Machine Learn, Sentiment Analysis, SVMs, Decision Trees</p>
        </div>
        <div className="project">
          <a href="https://github.com/StarrySkyrs/COVID-sentiment-analysis-in-Tweets" target="_blank" rel="noreferrer"><img src={ covidsent } className="zoom" alt="thumbnail" style={{ width: '100%'}}/></a>
          <a href="https://github.com/StarrySkyrs/COVID-sentiment-analysis-in-Tweets" target="_blank" rel="noreferrer"><h2>COVID Sentiment Analysis in Tweets</h2></a>
          <p>Sentiment analysis towards COVID-related tweets on specific topics, namely vaccines and masks.</p>
          <p>Used: Python, BERTweet, CNN-BiLSTM</p>
        </div>
        <div className="project">
          <a href="https://github.com/StarrySkyrs/Spotify_Popularity_Prediction" target="_blank" rel="noreferrer"><img src={ spval } className="zoom" alt="thumbnail" style={{ width: '100%'}}/></a>
          <a href="https://github.com/StarrySkyrs/Spotify_Popularity_Prediction" target="_blank" rel="noreferrer"><h2>Spotify Popularity Prediction</h2></a>
          <p>Built an ensemble model on the Spotify dataset to determine the popularity of songs and study feature importance using SHAP.</p>
          <p>Used: Python, Feature Importance, Ensemble Machine Learning, SHAP</p>
        </div>
        <div className="project">
          <a href="https://github.com/StarrySkyrs/Facebook_Linear_Regression_In_R" target="_blank" rel="noreferrer"><img src={ facebook } className="zoom" alt="thumbnail" style={{ width: '100%'}}/></a>
          <a href="https://github.com/StarrySkyrs/Facebook_Linear_Regression_In_R" target="_blank" rel="noreferrer"><h2>Facebook Linear Regression</h2></a>
          <p>Built single and multiple (Additive and Interaction) Linear Regression Models on the Facebook dataset to derive inferences or conclusions with the hypothesis testing.</p>
          <p>Used: R, Bootstrap, Linear Regression, Plotly, Hypothesis Testing, GGplot</p>
        </div>
      </div>
    </div>
  );
}

export default Project;