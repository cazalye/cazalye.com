import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './about.scss';
import NavbarHider from '../navbar-hider/NavbarHider';
import Navbar from '../navbar/navbar';
import {Helmet} from "react-helmet";


class About extends Component {

    render() {
        return (
            <div className="about">
                 <Helmet>
                    <title>cazalye | ABOUT</title>
                </Helmet>
                <NavbarHider whiteTitle={true}/> 
                {/* <Navbar/> */}
                <div className="social-links">
                    <a href="https://www.instagram.com/cazalye" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="https://www.pinterest.com.au/cazalye/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-pinterest-p" aria-hidden="true" />
                    </a>
                    <a href="https://github.com/cazalye" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github" aria-hidden="true" />
                    </a>
                    <a href="mailto:e.cazaly7@gmail.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-envelope" aria-hidden="true" />
                    </a>
                </div>
                <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>
                </div>
                <div className="about-content">
                    <p className="para1"> When searching for travel and adventure inspiration online, we're often faced with an overwhelming flood of information, which can leave you feeling more overwhelmed than when you started.<strong className="opp-aim"> This site aims to do the opposite.</strong> </p>
                    <p className="para2">
                    Instead of trawling through long articles for a few key points of information, here you will find <strong>carefully curated, short posts </strong>with the most important and exciting information, each with a read time of less than 5 minutes.
                    </p>
                    {/* <p className="para3">
                    If you already have a destination in mind then head to the <Link to="/map">'Where to'</Link> section, where you can find all the places featured throughout the site on an interactive world map. If you would <strong>prefer to browse leisurely </strong> for inspiration, then follow the links below:
                    </p> */}
                    <p className="para3">
                    If you already have a destination in mind then head to the search option in the menu, where you can discover all the posts on your destination of interest. If you would <strong>prefer to browse leisurely </strong> for inspiration, then follow the links below:
                    </p>
                    <div className="post-icons">
                        <div className="photo-diaries-link">
                            <Link to="/photodiaries"><h3>Photo Diaries</h3></Link>
                            <Link to="/photodiaries"><p className="blog-post-text">Visual journeys<br/> around the world</p></Link>
                            <div className="diary-icon">
                                <Link to="/photoDiaries"><i className="fas fa-book-open"/></Link>
                            </div>
                        </div>
                        <div className="blog-post-link">
                            <Link to="/blog"><h3>Blog Posts</h3></Link>
                            <Link to="/blog"><p className="blog-post-text">The best activities, <br/>sites & coffee spots</p></Link>
                            <div className="blog-icon" >
                                <Link to="/blog"><i className="fas fa-list"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="about-me-link">
                        <Link to="/aboutMe">Who is <strong>cazalye?</strong></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;