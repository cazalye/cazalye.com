import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './about.scss';

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1>About</h1>
                <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>
                </div>
                <div className="about-content">
                    <p> When it comes to finding travel and adventure inspiration online, we're often faced with an overwhelming flood of detailed information, leaving us feeling more lost than when we started. <strong>This site aims to do the opposite.</strong> Instead of trawling through long articles for a few key points of information, here you will find carefully curated, short posts full of the most important and exciting information, each with a read time of less than 5 minutes.<hr/>
                    If you already have a destination in mind then head to the <Link to="/destinations">'Where to'</Link> section. Here you'll see all the places featured throughout the site on an interactive world map. If you would prefer to browse leisurely for inspiration, then follow one of the links below: <hr/><hr/>
                    <ul>
                        <li><Link to="/blog">Blog Posts</Link> list the best 5-10 activities, sites and coffee or brunch spots in a destination<hr/> </li>
                        <li><Link to="/photoDiaries">Photo Diaries</Link> take you on a visual journey through different countries</li>
                     </ul>
                     <hr/>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;