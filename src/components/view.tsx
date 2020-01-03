import React from 'react';
import LandingPage from './landingPage/landingPage';
import {Switch, Route} from 'react-router-dom';
import BlogList from './blog/blogList';
import BlogDetail from './blog/blogDetail';
import About from './about/about';
import AboutMe from './about/aboutMe';
import PhotoDiariesDetail from './photoDiaries/photoDiariesDetail';
import PhotoDiariesList from './photoDiaries/photoDiariesList';
import StonePaper from './stonePaper/stonePaper';


const View = () => (
    <Switch>
        <Route exact={true} path="/" component={LandingPage}/>
        <Route exact={true} path='/blog' component={BlogList}/>
        <Route exact={true} path='/about' component={About}/>
        <Route exact={true} path='/aboutMe' component={AboutMe}/>
        <Route exact={true} path='/blog/:slug' component={BlogDetail}/>
        <Route exact={true} path='/photoDiaries' component={PhotoDiariesList}/>
        <Route exact={true} path='/photoDiaries/:slug' component={PhotoDiariesDetail}/>
        <Route exact={true} path='/stonePaper' component={StonePaper}/>
    </Switch>
);

export default View;