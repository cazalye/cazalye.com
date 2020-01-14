import React, { Component } from 'react';
import NavbarHider from '../navbar-hider/NavbarHider';
import Blog from "./blogList";

class BlogListPage extends Component<any, any> {
    render() {
        return (
            <div>
                <NavbarHider transparentRowHide={true} hamburgerMode={false} greenTitle={false} hideTitle={false}/>
                <Blog/>
            </div>
        );
    }
}

export default BlogListPage;