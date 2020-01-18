import React, { Component } from 'react';

type NavbarHiderProps = {
    hamburgerMode: boolean;
    greenTitle: boolean;
    lightGreenTitle: boolean;
    whiteTitle: boolean;
    mixedTitle: boolean;
    hideTitle: boolean;
    whiteDrawer: boolean;
    transparentRowHide: boolean;
};

class NavbarHider extends Component<NavbarHiderProps> {
    static defaultProps = {
        hamburgerMode: false,
        greenTitle: false,
        lightGreenTitle: false,
        whiteTitle: false,
        mixedTitle: false,
        hideTitle: false,
        whiteDrawer: false,
        transparentRowHide: true,
    };
    componentDidMount() {
        console.log("loading")
        document.body.classList.toggle('hamburger-mode', this.props.hamburgerMode);
        document.body.classList.toggle('green-title', this.props.greenTitle);
        document.body.classList.toggle('light-green-title', this.props.lightGreenTitle);
        document.body.classList.toggle('white-title', this.props.whiteTitle);
        document.body.classList.toggle('mixed-title', this.props.mixedTitle);
        document.body.classList.toggle('hide-title', this.props.hideTitle);
        document.body.classList.toggle('white-drawer', this.props.whiteDrawer);
        console.log(this.props.transparentRowHide)
        document.body.classList.toggle('transparent-row-hide', this.props.transparentRowHide);
    }
    componentWillUnmount() {
        document.body.classList.remove('hamburger-mode');
        document.body.classList.remove('green-title');
        document.body.classList.remove('light-green-title');
        document.body.classList.remove('white-title');
        document.body.classList.remove('mixed-title');
        document.body.classList.remove('hide-title');
        document.body.classList.remove('white-drawer');
        document.body.classList.remove('transparent-row-hide');
    }
    render() {
        return null;
    }
}

export default NavbarHider;