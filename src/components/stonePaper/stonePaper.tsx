import "./stonePaper.scss";
import Footer from "../footer/footer";
import NavbarHider from "../navbar-hider/NavbarHider";
import React, { Component } from 'react';

class StonePaper extends Component {
    render() {

        return (
            <div id="stone-paper-about">
                <NavbarHider transparentRowHide={true} hamburgerMode={false}  hideTitle={false}/>
                <div className="stone-paper-background"/>
               
                <div className="stone-paper-header">
                    <h1>Eco-friendly Stone Paper Travel Postcards</h1>
                    <h2>Adventure-inspired travel photography printed on the most eco-friendly paper in existence</h2>
                    <div className="etsy-images-adventure">
                        <img src='/img/postcards/ivy.jpg' alt="travel postcards of ivy covered building" width="20%"/>
                        <img src='/img/postcards/new/Cemetery.png' alt="travel postcard of bridge over deep canyon" width="20%"/>
                        <img src='/img/postcards/river.jpg' alt="travel postcard of wild river" width="20%"/>
                    </div>
                    <div className="etsy-images-vintage">
                        <img src='/img/postcards/car2.jpg' alt="travel postcards of vintage car" width="20%"/>
                        <img src='/img/postcards/boat.jpg' alt="travel postcard of vintage boat" width="20%"/>
                        <img src='/img/postcards/shoes.jpg' alt="postcard of shoes with plants in them" width="20%"/>
                        <img src='/img/postcards/stone_wall.jpg' alt="travel postcard of stone wall" width="20%"/>
                    </div>
                <div/>
                
                <a className="etsy-link" href="https://www.etsy.com/au/shop/cazalye"> 
                    <button className="mdl-button mdl-js-button mdl-button--raised">
                        Order Here!
                        </button>
                    </a>
                <div className="stone-paper-body">
                    <h3>What is Stone Paper?</h3>
                    <p>Stone Paper is a revolutionary new way to make paper!
First, limestone is crushed to make Calcium Carbonate powder which is then combined with high quality non-toxic polymer resin. This mixture is then processed under high pressure to produce smooth, velvety paper. Unlike regular paper-making, no trees or clean water are used to make Stone Paper. The final product is around 70-80% limestone and 20-30% resin.</p>
                    <hr/>
                    <h3>How is Stone Paper environmentally friendly?</h3>
                    <p>Compared to regular paper, one tonne of Stone Paper saves:</p>
                    <ul><li>20 trees</li><li>280Kw/h energy</li><li>7480 gallons of clean water</li><li>Uses only 10% of the space a traditional factory requires</li></ul>
                    <p>Stone Paper is also:</p>
                    <ul><li>Fully recyclable</li><li>Uses waste material that would otherwise go to landfill</li><li>Is made with 100% renewable energy</li></ul>
                    <hr/>
                    <h3>Stone Paper Quality and Writing Experience</h3>
                    <ul><li>Velvety smooth writing experience with no grain</li><li>Water and tear resistant</li><li>Ink does not bleed through to next page</li><li>Colors are more vibrant</li></ul>
                    <hr/>
                </div>
                </div>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default StonePaper;