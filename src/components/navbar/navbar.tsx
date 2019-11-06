import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content, Textfield} from 'react-mdl';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        const title = <Link to="/" className="header-title-drawer"> cazalye </Link> as any;
        return (
            <Layout>
                <Header transparent={true} title={<Link to="/" className="header-title">cazalye</Link>} style={{color: 'white'}}>
                    <Textfield
                        value=""
                        label="Search"
                        expandable={true}
                        expandableIcon="search"
                    />
                    <Navigation>
                        <Link to="/photoDiaries/photoDiaries">Photo DiarSies</Link>
                        <Link to="/destinations/destinations">Destinations</Link>
                        <Link to="/blog/blog">Blog</Link>
                        <Link to="/about/about">About</Link>
                    </Navigation>
                </Header>
                <Drawer title={title}>
                    <Navigation>
                        <Link to="/photoDiaries/photoDiaries">Photo Diaries</Link>
                        <Link to="/destinations/destinations">Destinations</Link>
                        <Link to="/blog/blog">Blog</Link>
                        <Link to="/about/about">About</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;