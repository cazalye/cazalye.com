import "./landingPage.scss";
import React, { Component} from 'react';
import Map from "../map/map";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';
import NavbarHider from "../navbar-hider/NavbarHider";
import PostsSlideshow from "../postsSlideshow/postsSlideshow";
import Blog from "../blog/blogList";
// import Popup from '../popup/popup';


class LandingPage extends Component<any, any> {

    // // CODE FOR POPUP
    // state = {
    //     showPopup: false
    // };
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             showPopup: true
    //         });
    //     }, 2000);
    // }
    // togglePopup() {
    //     this.setState({
    //         showPopup: !this.state.showPopup
    //     });
    // }

    // CODE FOR changing opacity on scroll
    // pageScrolled() {
    //     console.log("scrolling landing");
    //   }

    render() {
        return (
            <div id="landing">
                {/* <div>
                    <button className="popup-button" onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>
                    {this.state.showPopup ?
                    <Popup
                            text='Subscribe to the Newsletter'
                            closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                    }
                </div>

                 <div className="test" onScroll={e => {this.pageScrolled();}}> */}

                    <NavbarHider transparentRowHide={false} />
                    <div id="landing1">
                        <div className="mission">
                            <h2>Inspiration for your adventures</h2>
                            <h3>at home and abroad</h3>
                        </div>
                        {/* <div className="start-here">
                            <h3>First time exploring this site?</h3>
                            <Link to="/about">
                                <p>Start Here <i className="fas fa-hiking"/></p>
                            </Link>
                        </div> */}

                    <div className="start-here">
                        <Link to="/about">
                            <h3>First time exploring this site?</h3>
                            <button className="mdl-button mdl-js-button mdl-button--raised">
                                Start Here <i className="fas fa-hiking"/>
                            </button>
                        </Link>
                    </div>


                        {/* <div className="stone-paper-link">
                            <Link to="/stonePaper"><strong>What is Stone Paper?</strong> &emsp; Find out about eco-friendly travel postcards</Link>
                        </div> */}

                        <div className="stone-paper-link">
                            <Link to="/stonePaper">
                                    <p>What is eco-friendly Stone Paper?</p>
                                    <button className="mdl-button mdl-js-button mdl-button--raised">
                                    Find out here
                                </button>
                                </Link>
                        </div>

                        <div className="newsletter">
                            <p>SUBSCRIBE TO THE NEWSLETTER</p>
                            {/* <form id="newsletter-form" action="" method="" onsubmit="" name=""/> */}
                            <form>
                                <label>First Name: <input type="text"/></label>
                                <label>E-mail Address: <input type="text"/></label>
                                <input type="submit" value="GO"/>
                            </form>
                        </div>
                    </div>
                    <div className="section-divider1"><hr/></div>
                    <div className="landing2-map">
                        <Map/>
                    </div>
                    <div className="section-divider2"/>
                    <div className="landing3-photo-diary">
                        <PostsSlideshow/>
                    </div>
                    <div className="section-divider2"/>
                    <div className="landing4-blog">
                        <Blog/>
                    </div>
                    <Footer/>
                {/* </div> */}
            </div>
        );
    }
}

export default LandingPage;