import React, { Component } from 'react'; 
import './popup.scss';

class Popup extends Component <any, any> {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h2>{this.props.text}</h2>
                    <button onClick={this.props.closePopup}>X</button>
                </div>
            </div>
        );
    }
}

export default Popup;