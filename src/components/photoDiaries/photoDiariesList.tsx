import React, { Component } from 'react';
import PostsSlideshow from "../postsSlideshow/postsSlideshow";
import "./photoDiariesList.scss";
import NavbarHider from '../navbar-hider/NavbarHider';


class PhotoDiariesList extends Component {
    render() {
        return (
            <div>
                <NavbarHider hamburgerMode={false} greenTitle={false} hideTitle={false}/>
                <PostsSlideshow/>
            </div>
        );
    }
}

export default PhotoDiariesList;