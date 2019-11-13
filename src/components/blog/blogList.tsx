import React, { Component } from 'react';
import { getBlogPosts, getRelatedPosts} from '../../API/posts';
import "./blogList.scss";
import { Link } from 'react-router-dom';

class Blog extends Component<any, any> {
    travelPosts: any;
    constructor(props: any) {
        super(props);
        this.state = {
            posts: []
        };

    }
    async componentDidMount() {
        const posts = await getBlogPosts({
            limit: 20,
            showCategoriesNames: true
        });
        this.setState({
            posts: posts
        });
    }

    scrollIncPage(increment: number) {
        let blogContainer = document.getElementsByClassName("blog-container");
        if (blogContainer.length) {
            const initPosition = blogContainer[0].scrollLeft;
            const windowWidth = window.innerWidth;
            const page = Math.trunc(initPosition / windowWidth);
            const newPosition = (page + increment) * windowWidth;
            blogContainer[0].scrollTo(newPosition, 0);
        }
    }
    render() {
        const postsContent=[];
        for (const post of this.state.posts) {

            let backgroundImageUrl = post.featureImageSizes? post.featureImageSizes.medium_large : "";
            const style = {
                backgroundImage: `url("${backgroundImageUrl}")`
            };
            
            // Add loop for category names if want these on post

            postsContent.push(
                <Link to={"blog/" + post.slug} className="post-container" style={style}>
                    <h2>{post.title}</h2>
                    {/* {categoriesNamesHTML} */}
                    {/* <h3>{post.categoriesNames}</h3> */}
                    <td>
                        {new Intl.DateTimeFormat('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(post.date)}
                    </td>
                    {/* <p>{post.description}</p> */}
                </Link>
            );
        }
        return (
            <div id="blogs-page">
                <div onClick={e => {this.scrollIncPage(1);}} className="scroll-button"/>
                <div onClick={e => {this.scrollIncPage(-1);}} className="scroll-button-left"/>
                <h1>New on the Blog</h1>
                <div className="blog-container">
                        {postsContent}
                </div>
            </div>
        );
    }
}

export default Blog;