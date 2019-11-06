import React from 'react';
import LandingPage from './landingPage/landingPage';
import {Switch, Route} from 'react-router-dom';


const View = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
    </Switch>
)

export default View;