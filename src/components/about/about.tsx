import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './about.scss';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import NavbarHider from '../navbar-hider/NavbarHider';

class About extends Component {
    render() {
        return (
            <div className="about">
                <NavbarHider hamburgerMode={true}/>
                <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>
                </div>
                <div className="about-content">
                    <p className="para1"> When searching for travel and adventure inspiration, we're often faced with an overwhelming flood of information, leaving us feeling more lost than when we started.<strong> This site aims to do the opposite.</strong> </p>
                    <p className="para2">
                    Instead of trawling through long articles for a few key points of information, here you will find carefully curated, short posts with the most important and exciting information, each with a read time of less than 5 minutes.
                    </p>
                    <p className="para3">
                    If you already have a destination in mind then head to the <Link to="/map">'Where to'</Link> section, where you can find all the places featured throughout the site on an interactive world map. If you would <strong>prefer to browse leisurely </strong> for inspiration, then follow the links below:
                    </p>
                    <div className="post-icons">
                        <div className="photo-diaries-link">
                            <h3>Photo Diaries</h3>
                            <p>A visual journey around the world</p>
                            <div className="diary-icon">
                                <Link to="/photoDiaries"><i className="fas fa-book-open"/></Link>
                            </div>
                        </div>
                        <div className="blog-post-link">
                            <h3>Blog Posts</h3>
                            <p>The best activities, sites & coffee spots</p>
                            <div className="diary-icon" >
                                <Link to="/blog"><i className="fas fa-list"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="about-me-link">
                        <Link to="/aboutMe">Who is cazalye?</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;