import "./landingPage.scss";
import React, { Component } from 'react';

class LandingPage extends Component {
    render() {
        return (
            <div id="landing">
                <div id="landing1">
                    <div className="photoDiaries col4">
                        <h1>Photo Diaries</h1>
                    </div>
                    <div className="mission">
                        <p>Inspiration for your adventures- at home and abroad</p>
                    </div>
                    <div className="leftLinks col7">
                        <h2>Destinations</h2>
                        <hr/>
                        <h2>City Guides</h2>
                        <hr/>
                        <h2>Coffee & Brunch</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;