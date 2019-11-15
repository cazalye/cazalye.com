import React from 'react';
import LandingPage from './landingPage/landingPage';
import {Switch, Route} from 'react-router-dom';
import Blog from './blog/blogList';
import About from './about/about';
import PhotoDiariesDetail from './photoDiaries/photoDiariesDetail';


const View = () => (
    <Switch>
        <Route exact={true} path="/" component={LandingPage}/>
        <Route exact={true} path='/blog' component={Blog}/>
        <Route exact={true} path='/about' component={About}/>
        <Route exact={true} path='/blog/:slug' component={Blog}/>
        <Route exact={true} path='/photoDiaries/:slug' component={PhotoDiariesDetail}/>
    </Switch>
);

export default View;