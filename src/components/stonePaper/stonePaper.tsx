import "./stonePaper.scss";
import Footer from "../footer/footer";
import NavbarHider from "../navbar-hider/NavbarHider";
import React, { Component } from 'react';

class StonePaper extends Component { 
    render() {

        return (
            <div id="stone-paper-about">
            <NavbarHider blackTitle={true} transparentRowHide={false}/>

                <div className="stone-paper-background"/>
                <div className="stone-paper-header">
                    <h1>Eco-friendly Stone Paper Travel Postcards</h1>
                    <h2>Adventure-inspired travel photography printed on the most eco-friendly paper in existence</h2>
                    <h3>What is Stone Paper? </h3>
                    {/* <i className="fas fa-arrow-down"/> */}
                    <p>Stone Paper is a revolutionary new way to make paper!
First, limestone is crushed to make Calcium Carbonate powder which is then combined with high quality non-toxic polymer resin. This mixture is then processed under high pressure to produce smooth, velvety paper. Unlike regular paper-making, no trees or clean water are used to make Stone Paper. The final product is around 70-80% limestone and 20-30% resin.</p>
                    <div className="postcard-images">
                        {/* <div className='image'> */}
                            <a className='image' href="https://www.etsy.com/au/listing/749982312/ivy-covered-cemetery-eco-friendly-stone?ref=shop_home_feat_3" rel="noopener noreferrer" target="_blank">
                                <img src='/img/postcards/ivy.jpg' alt="travel postcards of ivy covered building" width='100%'/>
                                <p> Ivy Covered Cemetery, Croatia</p>
                            </a>
                        {/* </div> */}
                        {/* <div className='image'> */}
                            <a className='image' href="https://www.etsy.com/au/listing/749981052/tara-river-eco-friendly-stone-paper?ref=shop_home_active_5" rel="noopener noreferrer" target="_blank">
                                <img src='/img/postcards/river.jpg' alt="raging river in montenegro with forest either side" width='100%'/>
                                <p> Tara River, Montenegro</p>
                            </a>
                        {/* </div>
                        <div className='image'> */}
                            <a className='image' href="https://www.etsy.com/au/listing/749981584/tara-bridge-eco-friendly-stone-paper?ref=shop_home_active_4" rel="noopener noreferrer" target="_blank">
                                <img src='/img/postcards/bridge.jpg' alt="tall arched bridge over river in montenegro" width="100%"/>
                                <p> Tara Bridge & Canyon, Montenegro</p>
                            </a>
                        {/* </div>
                        <div className='image'> */}
                            <a className='image' href="https://www.etsy.com/au/listing/749864346/vintage-car-in-cornwall-eco-friendly?ref=shop_home_active_12" rel="noopener noreferrer" target="_blank">
                                <img src='/img/postcards/car.jpg' alt="travel postcards of vintage car" width="100%"/>
                                <p>Vintage Car, Cornwall</p>
                            </a>
                        {/* </div>
                        <div className='image'> */}
                        <a className='image' href="https://www.etsy.com/au/listing/763826797/vintage-boat-in-venice-eco-friendly?ref=shop_home_active_2" rel="noopener noreferrer" target="_blank">
                            <img src='/img/postcards/boat.jpg' alt="travel postcard of vintage boat" width="100%"/>
                            <p>Vintage Boat, Venice</p>
                        </a>
                        {/* </div> */}
                        {/* <div className='image'> */}
                        <a className='image' href="https://www.etsy.com/au/listing/749953720/cornwall-vintage-boots-eco-friendly?ref=shop_home_active_8" rel="noopener noreferrer" target="_blank">
                            <img src='/img/postcards/shoes.jpg' alt="postcard of shoes with plants in them" width="100%"/>
                            <p>Vintage Boots, Cornwall</p>
                        </a>
                        {/* </div> */}
                        {/* <div className='image'> */}
                        <a className='image' href="https://www.etsy.com/au/listing/749953148/cornwall-stone-wall-eco-friendly-stone?ref=shop_home_active_9" rel="noopener noreferrer" target="_blank">
                            <img src='/img/postcards/wall.jpg' alt="travel postcard of stone wall" width="100%"/>
                            <p>Stone Wall, Cornwall</p>
                        </a>
                        {/* </div> */}

                    </div>
                <div/>
                <div className="stone-paper-body">
                        <h3>How is Stone Paper environmentally friendly?</h3>
                        <p>Compared to regular paper, one tonne of Stone Paper saves:</p>
                        <ul><li>20 trees</li><li>280Kw/h energy</li><li>7480 gallons of clean water</li><li>Uses only 10% of the space a traditional factory requires</li></ul>
                        <p>Stone Paper is also:</p>
                        <ul><li>Fully recyclable</li><li>Uses waste material that would otherwise go to landfill</li><li>Is made with 100% renewable energy</li></ul>
                        <hr/>
                        <h3>Stone Paper Quality and Writing Experience</h3>
                        <ul><li>Velvety smooth writing experience with no grain</li><li>Water and tear resistant</li><li>Ink does not bleed through to next page</li><li>Colors are more vibrant</li></ul>
                </div>
                </div>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default StonePaper;