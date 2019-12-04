import React, { Component } from 'react';

type NavbarHiderProps = {
    hamburgerMode: boolean;
    greenTitle: boolean;
    hideTitle: boolean;
    whiteDrawer: boolean;
};

class NavbarHider extends Component<NavbarHiderProps> {
    static defaultProps = {
        hamburgerMode: false,
        greenTitle: false,
        hideTitle: false,
        whiteDrawer: false,
    };
    componentDidMount() {
        document.body.classList.toggle('hamburger-mode', this.props.hamburgerMode);
        document.body.classList.toggle('green-title', this.props.greenTitle);
        document.body.classList.toggle('hide-title', this.props.hideTitle);
        document.body.classList.toggle('hide-title', this.props.whiteDrawer);
    }
    componentWillUnmount() {
        document.body.classList.remove('hamburger-mode');
        document.body.classList.remove('green-title');
        document.body.classList.remove('hide-title');
        document.body.classList.remove('white-drawer');
    }
    render() {
        return null;
    }
}

export default NavbarHider;