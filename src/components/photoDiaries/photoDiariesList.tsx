import React, { Component } from 'react';
import PostsSlideshow from "../postsSlideshow/postsSlideshow";
import "./photoDiariesList.scss";
import NavbarHider from '../navbar-hider/NavbarHider';


class PhotoDiariesList extends Component {
    render() {
        return (
            <div>
                <NavbarHider transparentRowHide={false} hamburgerMode={false} greenTitle={true} hideTitle={false}/>
                <PostsSlideshow/>
            </div>
        );
    }
}

export default PhotoDiariesList;