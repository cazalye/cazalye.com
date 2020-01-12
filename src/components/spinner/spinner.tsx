import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class Spinner extends Component {
    render() {
        return (
                <Loader
                    type="Plane"
                    color='#0e4f49'
                    height={100}
                    width={100}
                    // timeout={3000} // 3 secs
                />
        );
    }
}

export default Spinner;
