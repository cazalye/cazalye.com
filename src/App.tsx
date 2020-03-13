import React, { Component} from 'react';
import './styles/App.scss';
import View from './components/view';
import Navbar from './components/navbar/navbar';


class App extends Component<any, any> {
  pageScrolled() {
    console.log("scrolling")
  }

  render() {
    return (
      <div onScroll={e => {this.pageScrolled();}} className="App">
          <Navbar/>
          <View/>
      </div>
    );

  }
};

export default App;
