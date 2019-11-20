import "./navbar_hamburger.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
import {Link} from 'react-router-dom';


class NavbarHamburger extends Component {
    render() {
        // const title = <Link to="/" className="header-title-drawer"> cazalye </Link> as any;
        return (
            <Layout>
                <Header transparent={true} title={<Link to="/" className="header-title-hamburger">cazalye </Link>}>
                </Header>
                <Drawer className="hamburger header-title-drawer">
                    <Navigation>
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
        export default NavbarHamburger;

