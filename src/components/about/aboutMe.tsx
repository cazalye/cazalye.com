import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './aboutMe.scss';

class AboutMe extends Component{

    render(){
        return(
            <div className="about-me">
                <h1>Who is Cazalye?</h1>
                <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>
                </div>
                <div className="about-me-content">
                    <p> me. why I started the site. where the name comes from</p>
                </div>
            </div>

        );
    }
}


export default AboutMe;