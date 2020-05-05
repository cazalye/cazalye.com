import React, { Component } from 'react';
import "./portfolioAbout.scss";
import Footer from "../footer/footer";
import NavbarHider from "../navbar-hider/NavbarHider";

class PortfolioAbout extends Component {
    render() {
        return(
            <div className="aboutme-background">
                <NavbarHider hideMenu={true}/> 
                <div className="aboutme-text">
                    <h2>I'm a designer and front-end developer with a passion for photography and travel. </h2>
                    <p>I create evocative websites, catchy copy and inspiring stationery, centered around adventure, conscious living and environmental awareness. </p>
                    <p> I hold both Australian and Italian citzenship.</p>
                    <p>Visit me at <a href="https://www.cazalye.com">cazalye.com</a></p>
                </div>
                <Footer/>
            </div>

        )
    }
}
export default PortfolioAbout;