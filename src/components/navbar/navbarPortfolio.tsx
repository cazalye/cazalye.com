import "./navbarPortfolio.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation} from 'react-mdl';
import {Link} from 'react-router-dom';

class NavbarPortfolio extends Component<any, any> {
    render() {
        return (
            <Layout>
                <Header transparent={true} title={<Link to="/" className="header-title">cazalye </Link>}>
                    <Navigation className="portfolio-nav">
                        <p className="portfolio-nav-link">Resume</p>
                        <Link to="/projects">Projects</Link>
                        <Link to="/photography">Photography</Link>
                        <Link to="/portfolioAbout">About Me</Link>
                        <Link to="/portfolioContact">Contact</Link>

                        {/* <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/photography">Photography</Link>
                        <Link to="/portfolioAbout">About Me</Link>
                        <Link to="/portfolioContact">Contact</Link> */}
                    </Navigation>
                </Header>
            </Layout>
        );
    }
}
export default NavbarPortfolio;