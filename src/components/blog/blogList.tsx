import React, { Component } from 'react';
import { getBlogPosts, Post } from '../../API/posts';
import "./blogList.scss";
import { Link } from 'react-router-dom';
// import {InfiniteScroll} from 'react-infinite-scroll-component';


interface BlogState {
    posts: Post[];
    leftArrowClass: "disabled-arrow" | "";
    rightArrowClass: "disabled-arrow" | "";
}

class Blog extends Component<any, BlogState> {
    travelPosts: any;
    constructor(props: any) {
        super(props);
        this.state = {
            posts: [],
            leftArrowClass: "disabled-arrow",
            rightArrowClass: ""
        };
    }
    async componentDidMount() {
        const posts = await getBlogPosts({
            limit: 20
        });
        this.setState({
            posts: posts
        });
    }

    /**
     * Scroll horizontally adding or decreasing specified number of pages (increment)
     *
     * @param {number} increment
     * @memberof Blog
     */
    scrollIncPage(increment: number) {
        const blogContainer = document.getElementsByClassName("blog-container");
        if (blogContainer.length) {
            const initPosition = blogContainer[0].scrollLeft;
            const windowWidth = window.innerWidth;
            const page = Math.trunc(initPosition / windowWidth);
            let newPosition = (page + increment) * windowWidth;
            if (newPosition <= 0) {
                newPosition = 0;
            }
            blogContainer[0].scrollTo(newPosition, 0);
        }
    }
    /**
     * check if the arrow should be hidden or not when the page is scrolled
     *
     * @memberof Blog
     */
    checkScrollArrowsVisibility() {
        const blogContainer: any = document.getElementsByClassName("blog-container");
        if (blogContainer.length) {
            const position = blogContainer[0].scrollLeft;
            const positionRight = blogContainer[0].scrollWidth - (blogContainer[0].scrollLeft + blogContainer[0].offsetWidth);
            const windowWidth = window.innerWidth;
            const page = Math.trunc(position / windowWidth);
            if (position <= 3) {
                this.setState({
                    leftArrowClass: "disabled-arrow"
                });
            } else if (position < 100) {
                this.setState({
                    leftArrowClass: ""
                });
            }
            if (positionRight <= 3) {
                this.setState({
                    rightArrowClass: "disabled-arrow"
                });
            } else if (positionRight < 100) {
                this.setState({
                    rightArrowClass: ""
                });
            }
        }
    }
    render() {
        const postsContent=[];
        for (const post of this.state.posts) {

            const style = {
                backgroundImage: `url("${post.featureMedia.sizes.medium_large}")`
            };
            const categoriesNamesHTML = [];
            for(const category of post.categories){
                categoriesNamesHTML.push(<span>{category.name}</span>);
            }

            postsContent.push(
                <div  className="post-container" style={style}>
                    <Link className="background-link" to={"blog/" + post.slug}/>
                    <div className="text-container">
                    <Link className="post-title" to={"blog/" + post.slug}>{post.title}</Link>
                        {/* <h3 className="post-date">
                            {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(post.date)}
                        </h3> */}
                        {/* <div className="post-categories">
                            {categoriesNamesHTML}
                        </div> */}
                    </div>
                </div>
            );
        }
        return (
            <div id="blogs-page">
                <h1>New on the Blog</h1>
                <div onClick={e => {this.scrollIncPage(1);}} className={`scroll-button-right ${this.state.rightArrowClass}`}>
                    <i className="fas fa-chevron-right"/>
                </div>
                <div onClick={e => {this.scrollIncPage(-1);}} className={`scroll-button-left ${this.state.leftArrowClass}`}>
                    <i className="fas fa-chevron-left"/>
                </div>
                <div onScroll={e => {this.checkScrollArrowsVisibility();}} className="blog-container">
                        {postsContent}
                </div>
            </div>
        );
    }
}

export default Blog;