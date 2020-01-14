import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./spinner.scss";


class Spinner extends Component {
    render() {
        return (
            <div className="plane-spinner">
                <Loader
                    type="Plane"
                    color='#0e4f49'
                    height={100}
                    width={100} 
                    // timeout={3000} // 3 secs
                />
            </div>
        );
    }
}

export default Spinner;
