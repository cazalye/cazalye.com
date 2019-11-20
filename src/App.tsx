import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import LandingPage from './components/landingPage/landingPage';
import View from './components/view';
import Navbar from './components/navbar/navbar';


const App: React.FC = () => {

  return (
    <div className="App">
        <View/>
    </div>
  );
};

export default App;
