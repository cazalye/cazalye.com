import React, { Component } from 'react';
import NavbarHider from '../navbar-hider/NavbarHider';
import Blog from "./blogList";
import {Helmet} from "react-helmet";
import {Breadcrumbs, Typography} from '@material-ui/core';
import "./blogDetail.scss";
import {Link} from 'react-router-dom';



class BlogListPage extends Component<any, any> {
    render() {
        return (
            <div className="blogListPage">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>cazalye | BLOG</title>
                </Helmet>
                <NavbarHider whiteTitle={true}/>
                <Breadcrumbs maxItems={4} aria-label="breadcrumb" className="breadcrumbs">
                    <Link to="/" color="inherit">
                        Home
                    </Link>
                    <Link to="/blog" color="inherit">
                        Blog
                    </Link>
                    </Breadcrumbs>
                <Blog/>
            </div>
        );
    }
}

export default BlogListPage;