import React from 'react';
import LandingPage from './landingPage/landingPage';
import {Switch, Route} from 'react-router-dom';
import Blog from './blog/blog';


const View = () => (
    <Switch>
        <Route exact={true} path="/" component={LandingPage}/>
        <Route exact={true} path='/blog' component={Blog}/>
    </Switch>
);

export default View;