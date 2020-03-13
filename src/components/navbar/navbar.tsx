import "./navbar.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Textfield} from 'react-mdl';
import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom'
// import SearchResult from '../searchResults/searchResults';

class Navbar extends Component<any, any> {
    state = {
        searchQuery: ""
    }
    updateSearchQuery(e: any) {
        this.setState({
            searchQuery: e.target.value
        });
    }
    search(history: any, e: any) {
        e.preventDefault();
        history.push(`/search/${this.state.searchQuery}`);
        this.setState({
            searchQuery: ""
        });
    }
    hideToggle() {
        const selectorId = document.querySelector('.mdl-layout') as any;
        if (selectorId) {
            selectorId.MaterialLayout.toggleDrawer();
        }
    } 
    render() {
        const title = <Link to="/" className="header-title"> cazalye </Link> as any;
        return (
            <Layout>
                <Header transparent={true} title={<Link to="/" className="header-title">cazalye </Link>}>
                    <Navigation className="header-nav">
                        {/* <Link className="where" to="/categories">Destinations</Link> */}
                        <Link to="/photoDiaries">Photo Diaries</Link> 
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                        {/* <Link to="/stonePaper">Shop</Link> */}
                    </Navigation>
                    <Route render={({ history}) => (
                        <form onSubmit={(e) => { this.search(history, e) }}>
                            <Textfield
                                className="search"
                                value={this.state.searchQuery}
                                label="search"
                                placeholder="search"
                                expandable={true}
                                expandableIcon=""
                                onChange={this.updateSearchQuery.bind(this)}
                            />
                        </form>
                        )}
                    />
                </Header>
                <Drawer title={<Link onClick={() => this.hideToggle()} to="/" className="header-title">cazalye</Link> as any}>
                    <Navigation className="drawer-nav" >
                        {/* <Link onClick={() => this.hideToggle()} to="/categories">Destinations</Link> */}
                        <Link onClick={() => this.hideToggle()} to="/photoDiaries">Photo Diaries</Link>
                        <Link onClick={() => this.hideToggle()} to="/blog">Blog</Link>
                        <Link onClick={() => this.hideToggle()} to="/about">About</Link>
                        {/* <Link onClick={() => this.hideToggle()} to="/stonePaper">Shop</Link> */}
                        <Route render={({ history}) => (
                            <form onSubmit={(e) => { this.search(history, e) }}>
                                <Textfield
                                    className="search"
                                    value={this.state.searchQuery}
                                    label="search"
                                    placeholder="search"
                                    expandable={true}
                                    expandableIcon=""
                                    onChange={this.updateSearchQuery.bind(this)}
                                />
                            </form>
                            )}
                        />
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;