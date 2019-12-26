import "./landingPage.scss";
import React, { Component} from 'react';
import Map from "../map/map";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';
import NavbarHider from "../navbar-hider/NavbarHider";

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
                        <Link to="/about">
                            <h3>First time exploring this site?</h3>
                            <p>Start Here</p>
                        </Link>
                    </div>
                    <div className="stone-paper-link">
                            <Link to="/stonePaper"><strong>What is Stone Paper?</strong> &emsp; Find out about eco-friendly travel postcards</Link>
                    </div>
                </div>
                <div className="landing-section">
                    <Map/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LandingPage;