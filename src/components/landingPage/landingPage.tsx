import "./landingPage.scss";
import React, { Component} from 'react';
import Map from "../map/map";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';
import NavbarHider from "../navbar-hider/NavbarHider";
import PostsSlideshow from "../postsSlideshow/postsSlideshow";
import Blog from "../blog/blogList";
import Spinner from '../spinner/spinner';


class LandingPage extends Component<any, any> {

// How do I write the spinner code when there is no API call?
    // async componentDidMount() {
    //     this.setState({
    //         dataLoaded: true
    //     });
    // }
    render() {
        // if (!this.state.dataLoaded) {
        //     return(
        //         <Spinner/>
        //     );
        // } else {
        return (
            <div id="landing">
                <NavbarHider transparentRowHide={false} />
                <div id="landing1">
                    <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>
                    </div>
                    <div className="start-here">
                        <h3>First time exploring this site?</h3>
                        <Link to="/about">
                            <p>Start Here <i className="fas fa-hiking"></i></p>
                        </Link>
                    </div>
                    <div className="stone-paper-link">
                            <Link to="/stonePaper"><strong>What is Stone Paper?</strong> &emsp; Find out about eco-friendly travel postcards</Link>
                    </div>
                </div>
                <div className="section-divider1"><hr/></div>
                <div className="landing2-map">
                    <Map/>
                </div>
                <div className="section-divider2"/>
                <div className="landing3-photo-diary">
                    <PostsSlideshow/>
                </div>
                <div className="section-divider2"/>
                <div className="landing4-blog">
                    <Blog/>
                </div>
                <div className="section-divider2"/>
                <Footer/>
            </div>
        );
    }
}

export default LandingPage;