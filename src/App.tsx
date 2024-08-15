import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Skills,
  Project,
  Contact,
  Navigation,
  Footer,
  About,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={900}>
            <Main/>
            <About/>
            <Skills/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;