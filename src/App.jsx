import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Results from './components/Results';
import ServiceIntroduction from './components/ServiceIntroduction';
import FAQ from './components/FAQ';

function App() {
  const [matchingResult, setMatchingResult] = useState(null);
  const [isResultVisible, setIsResultVisible] = useState(false);

  const handleAnalysisComplete = (result) => {
    setMatchingResult(result);
    setIsResultVisible(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection onAnalysisComplete={handleAnalysisComplete} />
        </section>
        
        <Results 
          matchingResult={matchingResult} 
          isVisible={isResultVisible} 
        />

        <section id="service">
          <ServiceIntroduction />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>
    </div>
  );
}

export default App;
