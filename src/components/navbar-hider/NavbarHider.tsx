import React, { Component } from 'react';

type NavbarHiderProps = {
    hamburgerMode: boolean;
};

class NavbarHider extends Component<NavbarHiderProps> {
    static defaultProps = {
        hamburgerMode: false
    };
    componentDidMount() {
        document.body.classList.toggle('hamburger-mode', this.props.hamburgerMode);
    }
    componentWillUnmount() {
        document.body.classList.remove('hamburger-mode');
    }
    render() {
        return null;
    }
}

export default NavbarHider;