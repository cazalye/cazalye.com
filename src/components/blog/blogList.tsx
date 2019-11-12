import React, { Component } from 'react';
import { getBlogPosts } from '../../API/posts';
import "./blogList.scss";

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

            const style = {
                backgroundImage: `url("${post.feature_image_url}")`
            };

            postsContent.push(
                <div style={style} className="post-container">
                    <h2>{post.title}</h2>
                    <td>
                        {new Intl.DateTimeFormat('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(post.date)}
                    </td>
                    {/* <img src={post.feature_image_url} alt=""/> */}
                </div>
            );
        }
        return (
            <div id="blogs-page">
                <h1>New on the Blog</h1>
                <div className="blog-container">
                    {/* <div className="posts-content"> */}
                    {postsContent}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default Blog;