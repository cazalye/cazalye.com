import "./landingPage.scss";
import React, { Component} from 'react';
import Map from "../map/map";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';
import NavbarHider from "../navbar-hider/NavbarHider";
import PostsSlideshow from "../postsSlideshow/postsSlideshow";
import Blog from "../blog/blogList";
import axios from 'axios';
import Popup from '../popup/popup';

const baseUrl = "http://wordpress.cazalye.com/wp-json/";




class LandingPage extends Component<any, any> {

    state = {
        newsletter: {
            firstName: "",
            email: ""
        },
        newsletterConfirmPopup: false,
        newsletterLoading: false
    };

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

    hideNewsletterPopup() {
        this.setState({
            newsletterConfirmPopup: false
        });
    }

    async newsletterSubscribe(event: any) {
        event.preventDefault();
        const firstName = this.state.newsletter.firstName;
        const email = this.state.newsletter.email;
        this.setState({
            newsletter: {
                firstName: "",
                email: ""
            },
            newsletterConfirmPopup: true,
            newsletterLoading: true
        });
        await axios.post(`${baseUrl}newsletter/v1/subscribe`, {
            name: firstName,
            email: email
        });
        this.setState({
            newsletterLoading: false
        });
    }

    updateFirstName(event: any) {
        this.setState({
            newsletter: {
                firstName: event.target.value,
                email: this.state.newsletter.email
            }
        });
    }
    updateEmail(event: any) {
        this.setState({
            newsletter: {
                email: event.target.value,
                firstName: this.state.newsletter.firstName,
            }
        });
    }

    render() {
        return (
            <div id="landing">
                <div>
                    {this.state.newsletterConfirmPopup ?
                    <Popup
                            text={this.state.newsletterLoading ? "Loading..." : "Thanks for subscribing"}
                            closePopup={this.hideNewsletterPopup.bind(this)}
                    />
                    : null
                    }
                </div>

                 {/* <div className="test" onScroll={e => {this.pageScrolled();}}> */}

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
                        <h3>First time exploring this site? <i className="fas fa-hiking"/></h3>
                        <Link to="/about">
                            <button className="mdl-button mdl-js-button mdl-button--raised">
                                Start Here
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
                    </div>
                    <div className="section-divider2"/>

                    <div className="newsletter">
                        <p>SUBSCRIBE TO THE NEWSLETTER</p>
                        <form onSubmit={this.newsletterSubscribe.bind(this)}>
                            <input onChange={this.updateFirstName.bind(this)} value={this.state.newsletter.firstName} placeholder="First name" type="text"/>
                            <input onChange={this.updateEmail.bind(this)} value={this.state.newsletter.email} placeholder="E-mail Address" type="text"/>
                            <input disabled={!this.state.newsletter.email || !this.state.newsletter.firstName} type="submit" value="GO"/>
                        </form>
                    </div>
                    <div className="section-divider2"/>

                        {/* ADD MAP BACK ONCE had time to work on -- AB test? */}
                    {/* <div className="landing2-map">
                        <Map/>
                    </div> */}


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