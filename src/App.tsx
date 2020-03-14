import React, { Component} from 'react';
import './styles/App.scss';
import View from './components/view';
import Navbar from './components/navbar/navbar';
import ReactGA from 'react-ga';
import { withRouter } from "react-router";

ReactGA.initialize('UA-159926883-1', {debug: false});

class App extends Component<any, any> {

  unlisten: any;

  componentWillMount() {
    // detect page changes and send info to google analytics
    ReactGA.pageview(this.props.location.pathname);
    this.unlisten = this.props.history.listen((location: any, action: any) => {
      ReactGA.pageview(location.pathname);
    });
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    return (
      <div className="App">
          <Navbar/>
          <View/>
      </div>
    );

  }
}

export default withRouter(App);
