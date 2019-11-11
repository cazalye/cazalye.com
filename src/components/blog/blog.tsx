import React, { Component } from 'react';
import { getBlogPosts } from '../../API/posts';
import "./blog.scss";

class Blog extends Component<any, any> {
    travelPosts: any;
    constructor(props: any) {
        super(props);
        this.state = {
            posts: []
        };
    }
    async componentDidMount() {
        const posts = await getBlogPosts();
        this.setState({
            posts: posts
        });
    }
    render() {
        const postsContent=[];
        for (const post of this.state.posts) {

            postsContent.push(
                <div className="post-container">
                    <h1>{post.title}</h1>
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