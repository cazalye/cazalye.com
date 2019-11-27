import "./navbar.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Textfield} from 'react-mdl';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        const title = <Link to="/" className="header-title"> cazalye </Link> as any;
        return (
            <Layout>
                <Header transparent={true} title={<Link to="/" className="header-title">cazalye </Link>}>
                    <Navigation className="header-nav">
                        <Link to="/map">Where to?</Link>
                        <Link to="/photoDiaries">Photo Diaries</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                        <a href="mailto:e.cazaly7@gmail.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-envelope" aria-hidden="true" />
                        </a>
                        <a href="https://www.instagram.com/cazalye" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                        <a href="https://www.pinterest.com.au/cazalye/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-pinterest-p" aria-hidden="true" />
                        </a>
                        <Textfield
                            className="search"
                            value=""
                            label="search"
                            placeholder="search"
                            expandable={true}
                            expandableIcon=""
                        />
                    </Navigation>
                </Header>
                <Drawer>
                {/* <Drawer title={<Link to="/" className="header-title">cazalye </Link>}> */}
                    <Navigation className="drawer-nav" >
                        <Link to="/map">Where to?</Link>
                        <Link to="/photoDiaries">Photo Diaries</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                        <a href="mailto:e.cazaly7@gmail.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-envelope" aria-hidden="true" />
                        </a>
                        <a href="https://www.instagram.com/cazalye" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                        <a href="https://www.pinterest.com.au/cazalye/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-pinterest-p" aria-hidden="true" />
                        </a>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;