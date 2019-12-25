import "./stonePaper.scss";
import Footer from "../footer/footer";
import NavbarHider from "../navbar-hider/NavbarHider";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class StonePaper extends Component {
    render() {
        return (
            <div className="stone-paper-about">
                <p>About Stone Paper</p>
            </div>
        );
    }
}

export default StonePaper;