import React, { Component } from 'react';
import "./screen-rotate.scss";


class ScreenRotate extends Component {
    componentDidMount() {
        document.body.classList.add('screen-rotate');
    }
    componentWillUnmount() {
        document.body.classList.remove('screen-rotate');
    }
    render() {
        return null;
    }
}

export default ScreenRotate;