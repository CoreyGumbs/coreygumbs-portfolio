import React from 'react';

import Navigation from './components/Navigation/Navigation';
import IntroCard  from './components/IntroCard/IntroCard';
import Biography from './components/Biography/Biography';
import Projects from './components/Projects/Projects';

import './css/App.css';

const App = () => {
  
  return (
      <div className="container">
        <Navigation />
        <IntroCard />
        <section className="information-section">
          <Biography />
          <Projects/>
        </section>
      </div>
  );
}

export default App;
