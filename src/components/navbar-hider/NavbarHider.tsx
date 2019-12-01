import React, { Component } from 'react';

type NavbarHiderProps = {
    hamburgerMode: boolean;
    greenTitle: boolean;
};

class NavbarHider extends Component<NavbarHiderProps> {
    static defaultProps = {
        hamburgerMode: false,
        greenTitle: false
    };
    componentDidMount() {
        document.body.classList.toggle('hamburger-mode', this.props.hamburgerMode);
        document.body.classList.toggle('green-title', this.props.greenTitle);
    }
    componentWillUnmount() {
        document.body.classList.remove('hamburger-mode');
        document.body.classList.remove('green-title');
    }
    render() {
        return null;
    }
}

export default NavbarHider;