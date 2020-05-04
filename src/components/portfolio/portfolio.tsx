import React, { Component } from 'react';
import "./portfolio.scss";
import Footer from "../footer/footer";
import NavbarHider from "../navbar-hider/NavbarHider";

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <NavbarHider hideMenu={true}/>
                <div className="job-title">
                    <h1> Emma Cazaly</h1>
                    <h2>Web Designer & Front-end Developer</h2>
                    <p> HTML/CSS | JavaScript | React | e-commerce | Adobe Suite | Photography </p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Portfolio;