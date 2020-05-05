import React, { Component } from 'react';

type NavbarHiderProps = {
    hamburgerMode: boolean;
    greenTitle: boolean;
    lightGreenTitle: boolean;
    whiteTitle: boolean;
    blackTitle: boolean;
    mixedTitle: boolean;
    hideTitle: boolean;
    hideMenu: boolean;
    hideAll: boolean;
    whiteDrawer: boolean;
    transparentRowHide: boolean;
    // opaqueOnScroll: boolean;
};

class NavbarHider extends Component<NavbarHiderProps> {
    static defaultProps = {
        hamburgerMode: false,
        greenTitle: false,
        lightGreenTitle: false,
        whiteTitle: false,
        blackTitle: false,
        mixedTitle: false,
        hideTitle: false,
        hideMenu: false,
        hideAll: false,
        whiteDrawer: false,
        transparentRowHide: true,
        // opaqueOnScroll: false,
    };
    componentDidMount() {
        console.log("loading")
        document.body.classList.toggle('hamburger-mode', this.props.hamburgerMode);
        document.body.classList.toggle('green-title', this.props.greenTitle);
        document.body.classList.toggle('light-green-title', this.props.lightGreenTitle);
        document.body.classList.toggle('white-title', this.props.whiteTitle);
        document.body.classList.toggle('black-title', this.props.blackTitle);
        document.body.classList.toggle('mixed-title', this.props.mixedTitle);
        document.body.classList.toggle('hide-title', this.props.hideTitle);
        document.body.classList.toggle('hide-menu', this.props.hideMenu);
        document.body.classList.toggle('hide-all', this.props.hideAll);
        document.body.classList.toggle('white-drawer', this.props.whiteDrawer);
        console.log(this.props.transparentRowHide)
        document.body.classList.toggle('transparent-row-hide', this.props.transparentRowHide);
        // document.body.classList.scroll('opaque-on-scroll', this.props.opaqueOnScroll);

    }
    componentWillUnmount() {
        document.body.classList.remove('hamburger-mode');
        document.body.classList.remove('green-title');
        document.body.classList.remove('light-green-title');
        document.body.classList.remove('white-title');
        document.body.classList.remove('black-title');
        document.body.classList.remove('mixed-title');
        document.body.classList.remove('hide-title');
        document.body.classList.remove('hide-menu');
        document.body.classList.remove('hide-all');
        document.body.classList.remove('white-drawer');
        document.body.classList.remove('transparent-row-hide');
        // document.body.classList.remove('opaque-on-scroll');
    }
    render() {
        return null;
    }
}

export default NavbarHider;