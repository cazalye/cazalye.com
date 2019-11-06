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
                    <div className="mainQuote">
                        <p>“It is easy in the world to live after the world’s opinion; it is easy in solitude to live after our own; but the great man is he who, in the midst of the world, keeps with perfect sweetness the independence of solitude.” ~Ralph Waldo Emerson</p>
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