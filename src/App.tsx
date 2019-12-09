import React from 'react';
import './styles/App.scss';
import View from './components/view';
import Navbar from './components/navbar/navbar';


const App: React.FC = () => {

  return (
    <div className="App">
        <Navbar/>
        <View/>
    </div>
  );
};

export default App;
