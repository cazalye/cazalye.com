import React, { Component } from 'react';
import "./photographyTravel.scss";

class PhotographyTravel extends Component {
    render() {
        return (
            <div className="photography">
                <div className="travel">
                    <img src="./img/rafting.jpg" height="280px"/>
                    <img src="./img/Background_Mountains_muted.jpg" height="280px"/>
                    <img src="./img/Me_autumn_muted2.jpg" height="280px"/>
                </div>
                <div className="portraits">
                </div>
            </div>
        );
    }
}

export default PhotographyTravel;