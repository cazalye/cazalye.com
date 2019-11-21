import "./navbar_hamburger.scss";
import React, { Component } from 'react';
import {Layout, Header, Textfield, Navigation, Drawer} from 'react-mdl';
import {Link} from 'react-router-dom';


class NavbarHamburger extends Component {
    // hideToggle() {
    //     var selectorId = document.querySelector('.mdl-layout');
    //     selectorId.MaterialLayout.toggleDrawer();
    // }
    render() {
        const title = <Link to="/" className="header-title-drawer"> cazalye </Link> as any;
        return (
            <Layout>
                <Header transparent={true} title={<Link to="/" className="header-title-hamburger">cazalye </Link>}>
                    <div className="socials-hamburger">
                    <a href="https://www.instagram.com/cazalye" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="https://www.pinterest.com.au/cazalye/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-pinterest-p" aria-hidden="true" />
                    </a>
                    </div>
                    <Textfield
                        className="search"
                        value=""
                        onChange={() => {}}
                        label="search"
                        placeholder="search"
                        expandable={true}
                        expandableIcon=""
                        />
                </Header>
                {/* <Drawer title={<Link to="/" onClick={() => this.hideToggle()} className="header-title-drawer"> Emma Cazaly </Link>}> */}
                <Drawer>
                    <Navigation>
                            {/* <Link onClick={() => this.hideToggle()} to="/map">Where to?</Link> */}
                            <Link to="/map">Where to?</Link>
                            <Link to="/photoDiaries">Photo Diaries</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/about">About</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}
        export default NavbarHamburger;

