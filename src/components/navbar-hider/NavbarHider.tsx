import React, { Component } from 'react';

type NavbarHiderProps = {
    hamburgerMode: boolean;
    blueTitle: boolean;
};

class NavbarHider extends Component<NavbarHiderProps> {
    static defaultProps = {
        hamburgerMode: false,
        blueTitle: false
    };
    componentDidMount() {
        document.body.classList.toggle('hamburger-mode', this.props.hamburgerMode);
        document.body.classList.toggle('blue-title', this.props.blueTitle);
    }
    componentWillUnmount() {
        document.body.classList.remove('hamburger-mode');
        document.body.classList.remove('blue-title');
    }
    render() {
        return null;
    }
}

export default NavbarHider;