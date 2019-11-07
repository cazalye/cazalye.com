import "./landingPage.scss";
import React, { Component } from 'react';

class LandingPage extends Component {
    render() {
        return (
            <div id="landing">
                <div id="landing1">
                    {/* DO I WANT PHOTO DIARIES ON LANDING PAGE??? */}
                    {/* <div className="photoDiaries">
                        <h1>Photo Diaries</h1>
                    </div> */}
                    <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>
                    </div>
                    <div className="leftLinks">
                        {/* <hr/> */}
                        <h3>Destinations</h3>
                        <hr/>
                        {/* <h3>Photo Diaries</h3> */}
                        {/* <hr/> */}
                        <h3>City Guides</h3>
                        <hr/>
                        <h3>Best Coffee & Brunch Spots</h3>
                        {/* <hr/> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;