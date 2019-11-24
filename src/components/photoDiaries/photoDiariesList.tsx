import React, { Component } from 'react';
import PostsSlideshow from "../postsSlideshow/postsSlideshow";
import "./photoDiariesList.scss";

class PhotoDiariesList extends Component {
    render() {
        return (
            <div>
                <PostsSlideshow/>
            </div>
        );
    }
}

export default PhotoDiariesList;