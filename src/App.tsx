import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import LandingPage from './components/landingPage/landingPage';

const App: React.FC = () => {
  return (
    <div className="App">
        <LandingPage/>
    </div>
  );
};

export default App;
