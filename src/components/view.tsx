import React from 'react';
import LandingPage from './landingPage/landingPage';
import {Switch, Route} from 'react-router-dom';
import BlogListPage from './blog/blogListPage';
import BlogDetail from './blog/blogDetail';
import About from './about/about';
import AboutMe from './about/aboutMe';
import PhotoDiariesDetail from './photoDiaries/photoDiariesDetail';
import PhotoDiariesList from './photoDiaries/photoDiariesList';
import StonePaper from './stonePaper/stonePaper';
import SearchResults from './searchResults/searchResults';
import Categories from './categories/categories';



const View = () => (
    <Switch>
        <Route exact={true} path="/" component={LandingPage}/>
        <Route exact={true} path='/blog' component={BlogListPage}/>
        <Route exact={true} path='/about' component={About}/>
        <Route exact={true} path='/aboutMe' component={AboutMe}/>
        <Route exact={true} path='/blog/:slug' component={BlogDetail}/>
        <Route exact={true} path='/photoDiaries' component={PhotoDiariesList}/>
        <Route exact={true} path='/photoDiaries/:slug' component={PhotoDiariesDetail}/>
        <Route exact={true} path='/stonePaper' component={StonePaper}/>
        <Route exact={true} path='/search/:searchQuery' component={SearchResults}/>
        <Route exact={true} path='/categories' component={Categories}/>
    </Switch>
);

export default View;