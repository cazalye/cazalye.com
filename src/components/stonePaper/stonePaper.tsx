import "./stonePaper.scss";
import Footer from "../footer/footer";
import NavbarHider from "../navbar-hider/NavbarHider";
import React, { Component } from 'react';

class StonePaper extends Component {
    render() {
        return (
            <div id="stone-paper-about">
                <NavbarHider transparentRowHide={false} hamburgerMode={false} greenTitle={true} hideTitle={false}/>
                <div className="stone-paper-header">
                    <h1>Eco-friendly Stone Paper Travel Postcards</h1>
                    <h2>Beautiful, adventure-inspired travel photogrpahy printed on the most eco-friendly paper in existence</h2>
                    <a className="etsy-link" href="https://www.etsy.com/au/shop/cazalye"> Visit my Etsy store to order your Stone Paper Travel Postcards now</a>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default StonePaper;