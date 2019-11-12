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
                    <p> I have no idea what to write here. I hate everything I've tried</p>
                    {/* <p> <strong>Explore:</strong> Adventures can be found everywhere- thousands of miles away on the other side of the world, or right outside your front door in your own neighbourhood. All you need for an adventure is a sense of wonder. </p>
                    <p> <strong>Create:</strong> Exploring the world arounnd us provides infinite inspiration for creativity...something about seeing mine in the photos and postcards etc</p>
                    <p> <strong>Discover:</strong> The thing I love most about travel is getting utterly immersed and 'lost' in the foreignness of a different culture and landscape. It gives me distance from everything fmiliar so I can see myself clearly.

                     As Marcel Proust once said "The real voyage of discovery consists not in seeking new lands but in seeing with new eyes"
               </p> */}
               </div>

                    {/* In the age of Instagram, Youtube and Google living in your pocket, there's no shortage of images and articles proclaiming the latest hot travel destination. On top of this, traveling the world has never been more accesible. This can make it extremely overwhelming to decide explore next.

                    As a lover of nature and photography, the number one way I choose my travel destinations is by beautiful photos.
                    And you don't need to fly thousands of miles to have an adventure. */}
            </div>

        );
    }
}

export default About;