import React, { Component } from 'react';
import "./about.scss";

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
                    <p> When it comes to researching future adventures, there's no shortage of detailed articles on destinations, activities and Instagram-worthy locations. With Google living in your pocket, the choices and information load can often feel overwhelming. <hr/> With this in mind, I have chosen to limit the detail of information on this site. You won't find comprehensive itineraries or long-form posts that take hours to trawl in search of key points or visually pleasing images. You can find all that elsewhere. <hr/> Instead, you will find carefully curated posts taking one of two formats: <br/> <strong>Blog Posts</strong> in list-format, describing in under 500 words (less than 5 minute read) the best 5-10 activities, sites or coffee spots in a certain destination<br/> And <strong>Photo Diaries</strong>, which take you on a visual journey through different countries
                    </p>
                </div>
            </div>
        );
    }
}

export default About;