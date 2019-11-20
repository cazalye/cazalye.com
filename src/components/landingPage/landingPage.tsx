import "./landingPage.scss";
import React, { Component } from 'react';
import Map from "../map/map";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

class LandingPage extends Component {
    render() {
        return (
            <div id="landing">
                <Navbar/>
                <div id="landing1">
                    <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>
                    </div>
                    <div className="start-here">
                        <p>Start Here</p>
                    </div>
                    <div className="coffee">
                        <h3>The Best Coffee & Brunch <br/> Spots Around the World</h3>
                        <hr/>
                        {/* <h3> Travel Budgets</h3> */}
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