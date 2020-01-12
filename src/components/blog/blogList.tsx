import React, { Component } from 'react';
import { getBlogPosts, Post } from '../../API/posts';
import "./blogList.scss";
import { Link } from 'react-router-dom';
import NavbarHider from '../navbar-hider/NavbarHider';
import Spinner from '../spinner/spinner';



interface BlogState {
    posts: Post[];
    leftArrowClass: "disabled-arrow" | "";
    rightArrowClass: "disabled-arrow" | "";
    dataLoaded: boolean;
}

class Blog extends Component<any, BlogState> {
    travelPosts: any;
    constructor(props: any) {
        super(props);
        this.state = {
            posts: [],
            leftArrowClass: "disabled-arrow",
            rightArrowClass: "",
            dataLoaded: false
        };
    }
    async componentDidMount() {
        const posts = await getBlogPosts({
            limit: 100
        });
        this.setState({
            posts: posts,
            dataLoaded: true
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
        if (!this.state.dataLoaded) {
            return(
                <Spinner/>
            );

        } else {
            const postsContent=[];
            for (const post of this.state.posts) {

                const style = {
                    backgroundImage: post.featureMedia ? `url("${post.featureMedia.sizes.medium_large}")`: ""
                };
                const categoriesNamesHTML = [];
                for(const category of post.categories){
                    categoriesNamesHTML.push(<span>{category.name}</span>);
                }

                postsContent.push(
                    <div  className="post-container" style={style}>
                        <Link className="background-link" to={"blog/" + post.slug}/>
                        <div className="text-container">
                        <Link dangerouslySetInnerHTML={{__html: post.title}} className="post-title" to={"blog/" + post.slug}/>
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
                    <NavbarHider transparentRowHide={true} hamburgerMode={false} greenTitle={false} hideTitle={false}/>
                    <h1>Travel Blog</h1>
                    <h3>The Best Activities, Sites and Coffee Spots Around the World</h3>
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
}

export default Blog;