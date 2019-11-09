import React, { Component } from 'react';
import { getTravelPosts } from '../../API/posts';
import "./blog.scss";

class Blog extends Component<any, any> {
    travelPosts: any;
    constructor(props: any) {
        super(props);
        this.state = {
            posts: getTravelPosts()
        };


    }
    render() {
        let postsContent=[];
        for (const post of this.state.posts) {


            postsContent.push(
                <div className="post-container">
                    <h1>{post.title.rendered}</h1>
                    <h4>{post.date}</h4>
                </div>
            );
        }
        return (
            <div id="blogs-page">
                <h1>Blog Posts</h1>
                <div className="posts-container">
                    {postsContent}
                </div>
            </div>
        );
    }
}

export default Blog;