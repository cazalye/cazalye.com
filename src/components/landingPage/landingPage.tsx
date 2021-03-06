import "./landingPage.scss";
import React, { Component} from 'react';
// import Map from "../map/map";
import Footer from "../footer/footer";
import {Link} from 'react-router-dom';
import NavbarHider from "../navbar-hider/NavbarHider";
// import PostsSlideshow from "../postsSlideshow/postsSlideshow";
import PhotoDiariesList from "../photoDiaries/photoDiariesListScroll";
import Blog from "../blog/blogList";
import axios from 'axios';
import Popup from '../popup/popup';
import Button from '../button/button';
import {Helmet} from "react-helmet";

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
    // This seems to work when scrolling horizontally but not vertically...
    pageScrolled() {
        console.log("scrolling landing");
      }

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
                 <Helmet>
                        <title>cazalye | Inspiration for your adventures</title>
                    </Helmet>
                <div>
                    {this.state.newsletterConfirmPopup ?
                    <Popup
                        text={this.state.newsletterLoading ? "Submitting..." : "Thanks for subscribing"}
                        closePopup={this.hideNewsletterPopup.bind(this)}
                    />
                    : null
                    }
                </div>

                    <NavbarHider transparentRowHide={true} whiteTitle={true} />
                    <div id="landing1">
                        <div className="landing-text">
                            <Link className='mission' to="/about">
                                <h2>Inspiration for your adventures</h2>
                                <h3>at home and abroad</h3>
                            </Link>
                        </div>
                        <div className="down-arrow">
                            <i className="fas fa-arrow-down"/>
                        </div>
                    </div>

                    <div className="section-divider"/>
                    {/* <div className="newsletter">
                        <p>SUBSCRIBE TO THE NEWSLETTER <br/> for monthly travel ideas and the best of the blog</p>
                        <form onSubmit={this.newsletterSubscribe.bind(this)}>
                            <input onChange={this.updateFirstName.bind(this)} value={this.state.newsletter.firstName} placeholder="First name" type="text"/>
                            <input onChange={this.updateEmail.bind(this)} value={this.state.newsletter.email} placeholder="E-mail Address" type="text"/>
                            <input disabled={!this.state.newsletter.email || !this.state.newsletter.firstName} type="submit" value="GO"/>
                        </form>
                    </div> */}
                    {/* <div className="section-divider"/> */}

                        {/* ADD MAP BACK ONCE had time to work on -- AB test? */}
                    {/* <div className="landing2-map">
                        <Map/>
                    </div> */}
                    <div className="landing3-blog">
                        <Blog/>
                    </div>
                    <div className="section-divider"/>
                    <div className="landing4-photo-diary">
                        {/* <PostsSlideshow/> */}
                        <PhotoDiariesList/>
                    </div>
                    <div className="section-divider"/>
                    <div className="section-divider"/>
                    <div className="section-divider"/>
                    <Footer/>
            </div>
        );
    }
}

export default LandingPage;