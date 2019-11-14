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
                    <p> When it comes to searching for travel and adventure inspiration, you'll find no shortage of posts and videos detailing  destinations, activities and Instagram-worthy locations. But the resultant flood of information can often feel a little overwhelming. With this in mind, I have chosen to limit the amount of information on this site. You won't find comprehensive itineraries or long-form posts that take hours to trawl. You can find all that elsewhere. <hr/>Instead, you will find carefully curated posts taking one of the two forms below. If you have a certain place in mind then head straight to the <Link to="/destinations">'Where to'</Link> section. Here you'll see all the places featured in the photo diaries and blogs on an interactive world map. If you would prefer to browse leisurely for inspiration then follow one of the links below. <hr/><hr/>
                    <ul>
                        <li><Link to="/blog">Blog Posts</Link> briefly describe (in under 5 minutes) lists of the best 5-10 activities in a destination<hr/> </li>
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