import React from 'react';
import LandingPage from './landingPage/landingPage';
import {Switch, Route} from 'react-router-dom';
import BlogListPage from './blog/blogListPage';
import BlogDetail from './blog/blogDetail';
import About from './about/about';
import AboutMe from './about/aboutMe';
import PhotoDiariesDetail from './photoDiaries/photoDiariesDetail';
// import PhotoDiariesDetailMobile from './photoDiaries/photoDiariesDetailMobile';
// import PhotoDiariesList from './photoDiaries/photoDiariesList';
import PhotoDiariesListPage from './photoDiaries/photoDiariesListPage';
// import StonePaper from './stonePaper/stonePaper';
import SearchResults from './searchResults/searchResults';
import Categories from './categories/categories';
// import Portfolio from './portfolio/portfolio';
// import PortfolioContact from './portfolio/portfolioContact';
// import PortfolioAbout from './portfolio/portfolioAbout';
// import PhotographyTravel from './portfolio/photographyTravel';
// import Resume from './portfolio/resume';



const View = () => (
    <Switch>
        <Route exact={true} path="/" component={LandingPage}/>
        <Route exact={true} path='/blog' component={BlogListPage}/>
        <Route exact={true} path='/about' component={About}/>
        <Route exact={true} path='/aboutMe' component={AboutMe}/>
        <Route exact={true} path='/blog/:slug' component={BlogDetail}/>
        <Route exact={true} path='/photoDiaries' component={PhotoDiariesListPage}/>
        <Route exact={true} path='/photoDiaries/:slug' component={PhotoDiariesDetail}/>
        {/* <Route exact={true} path='/photoDiaries/:slug' component={PhotoDiariesDetailMobile}/> */}
        {/* <Route exact={true} path='/stonePaper' component={StonePaper}/> */}
        <Route exact={true} path='/search/:searchQuery' component={SearchResults}/>
        <Route exact={true} path='/categories' component={Categories}/>
        {/* <Route exact={true} path='/portfolio' component={Portfolio}/> */}
        {/* <Route exact={true} path='/contact' component={PortfolioContact}/> */}
        {/* <Route exact={true} path='/portfolioabout' component={PortfolioAbout}/> */}
        {/* <Route exact={true} path='/photography' component={PhotographyTravel}/> */}
        {/* <Route exact={true} path='/resume' component={Resume}/> */}
    </Switch>
);

export default View;