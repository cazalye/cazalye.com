import React, { Component } from 'react';
import NavbarHider from '../navbar-hider/NavbarHider';
import './aboutMe.scss';
import {Link} from 'react-router-dom';
class AboutMe extends Component{

    render(){
        return(
            <div className="about-me">
                <NavbarHider hamburgerMode={true} whiteDrawer={true} greenTitle={true} hideTitle={false}/>
                <h1>Who is Cazalye?</h1>
                <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>


                </div>
                <div className="about-me-content">
                    <p> THIS NEEDS TO BE EDITED <br/>Hi- I'm Emma Cazaly, an Australian with a love of trvel and everything outdoors. cazalye is a combination of my surname and my first initial. <hr/>
                        For longer than I can remember the urge to explore new places and go on adventures has been xxx. This passion has taken me around the world as a tourist and an expat living in Europe. <hr/> Sharing my love of travel has also been an important aspect of my explorations. I have worked as a travel agent for over 3 years and shortly after moving to Europe in 2017 I began a travel blog to share photos and tips about my favouorite places. <hr/> I have recently designed and created this new travel site from scratch- to allow me to share my travel experiences with my own personal style. I always welcome feedback and I'd love to hear your thoughts about my travel content, photos or website design. <hr/> You can find out for about this site <Link to="/about">here</Link></p>
                        <h3>ALSO MENTION about 'adventures at home' that adventure is a state of mind</h3>
                </div>
            </div>

        );
    }
}


export default AboutMe;