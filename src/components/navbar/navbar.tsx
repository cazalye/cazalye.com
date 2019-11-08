import "./navbar.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content, Textfield} from 'react-mdl';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        const title = <Link to="/" className="header-title-drawer"> cazalye </Link> as any;
        return (
            <Layout>
                <Header transparent={true} title={<Link to="/" className="header-title">cazalye </Link>}>
                    {/* <div className="logo">
                        <img src="/tst_img/Logo_small_transparent.svg" alt="cazalye logo"/>
                    </div> */}
                    <Navigation>
                        <Link to="/destinations/destinations">Destinations</Link>
                        <Link to="/photoDiaries/photoDiaries">Photo Diaries</Link>
                        <Link to="/blog/blog">Blog</Link>
                        <Link to="/about/about">About</Link>
                        <a href="https://www.instagram.com/cazalye" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                        <a href="https://www.pinterest.com.au/cazalye/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-pinterest-p" aria-hidden="true" />
                        </a>
                        <Textfield
                        className="search"
                        value=""
                        onChange={() => {}}
                        label="Search"
                        expandable={true}
                        expandableIcon="search"
                        />
                    </Navigation>
                </Header>
                {/* <Drawer title={title}>
                    <Navigation>
                        <Link to="/destinations/destinations">Destinations</Link>
                        <Link to="/photoDiaries/photoDiaries">Photo Diaries</Link>
                        <Link to="/blog/blog">Blog</Link>
                        <Link to="/about/about">About</Link>
                    </Navigation>
                </Drawer> */}
            </Layout>
        );
    }
}

export default Navbar;