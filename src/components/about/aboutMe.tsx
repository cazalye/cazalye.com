import React, { Component } from 'react';
import NavbarHider from '../navbar-hider/NavbarHider';
import './aboutMe.scss';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
class AboutMe extends Component{

    render(){
        return(
            <div className="about-me">
                 <Helmet>
                    <title>cazalye | who is cazalye</title>
                </Helmet>
                <NavbarHider whiteTitle={true} />
                <div className="about-me-text">
                    <h1>Who is cazalye?</h1>
                    <div className="mission">
                            <h2>Inspiration for your adventures</h2>
                            <h3>at home and abroad</h3>


                    </div>
                    <div className="about-me-content">
                        <p>Hi- I'm Emma Cazaly- an Australian with a love of travel and everything outdoors. <strong> Cazalye is a combination of my surname and first initial.</strong><hr/>
                        My love of travel and outdoor adventures have led me to explore countless destinations around the world, yet I believe that adventure is not only about exploring new places but also about a mindset. One of curiosity, playfullness, excitement and resilience. Adventure, in otherwords, is found within. </p>

                        <p className="para3"> I designed this travel blog to share my favourite photos and tips about places I've been- especially the things I wish I'd known before arriving in a new destination. I also hope that my images and words inspire you to seek out adventure everyday- whether that be in small moments in your day-to-day life, or on big adventures out in the world. <hr/> <strong>Enjoy Exploring!</strong></p>
                    </div>
                    <div className="quote">
                        <h3> <i>"The real voyage of discovery consists not in seeking new landscapes, but in having new eyes."</i></h3>
                        <h4><i> ~ Marcel Proust</i></h4>
                    </div>
                </div>
            </div>

        );
    }
}


export default AboutMe;