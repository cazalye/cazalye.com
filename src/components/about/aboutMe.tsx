import React, { Component } from 'react';
import NavbarHider from '../navbar-hider/NavbarHider';
import './aboutMe.scss';
import {Link} from 'react-router-dom';
class AboutMe extends Component{

    render(){
        return(
            <div className="about-me">
                <NavbarHider whiteTitle={true} />
                <div className="about-me-text">
                    <h1>Who is cazalye?</h1>
                    <div className="mission">
                            <h2>Inspiration for your adventures</h2>
                            <h3>at home and abroad</h3>


                    </div>
                    <div className="about-me-content">
                        <p> Hi- I'm Emma Cazaly, and as you can probably now tell, cazalye is a combination of my surname and first initial.<hr/>
                        I'm an Australian, living in Finland with an unquenchable love of travel and everything outdoors. These two passions have led me to explore new places around the world and go on endless adventures. I believe that adventure is not only about exploring new places but also about a mindset of playfullness, curiosity and resilience. As Marcel Proust put it:</p>
                        <h3> <i>"The real voyage of discovery consists not in seeking new landscapes, but in having new eyes."</i></h3>

                        <p className="para3"> Sharing my love of travel is also an important aspect of my adventures. Recently I redesigned my travel blog- to allow me to share my experiences, tips and photograpy through my own personal style. I hope you enjoy my site and would welcome any  thoughts you have about my content or photography.</p>
                    </div>
                </div>
            </div>

        );
    }
}


export default AboutMe;