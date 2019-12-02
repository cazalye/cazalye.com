import "./landingPage.scss";
import React, { Component} from 'react';
import Map from "../map/map";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';

class LandingPage extends Component<any, any> {
    render() {
        return (
            <div id="landing">
                <div id="landing1">
                    <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>
                    </div>
                    <div className="start-here">
                        <Link to="/about"><p>Start Here</p></Link>
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