import "./landingPage.scss";
import React, { Component} from 'react';
import Map from "../map/map";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';
import NavbarHider from "../navbar-hider/NavbarHider";
import PostsSlideshow from "../postsSlideshow/postsSlideshow";

class LandingPage extends Component<any, any> {
    render() {
        return (
            <div id="landing">
                <NavbarHider transparentRowHide={false} hamburgerMode={false} greenTitle={true} hideTitle={false}/>
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
                <div className="landing2-map">
                    <Map/>
                </div>
                <div className="landing3-photo-diary">
                    <PostsSlideshow/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LandingPage;