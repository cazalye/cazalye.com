import React, { Component } from 'react';
import { getPhotoDiaries, Post } from '../../API/posts';
import "./photoDiariesListScroll.scss";
import { Link } from 'react-router-dom';
import Spinner from '../spinner/spinner';
import NavbarHider from '../navbar-hider/NavbarHider';
import {Helmet} from "react-helmet";


interface BlogState {
    posts: Post[];
    leftArrowClass: "disabled-arrow" | "";
    rightArrowClass: "disabled-arrow" | "";
}

class PhotoDiariesList extends Component<any, BlogState> {
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
        const posts = await getPhotoDiaries({
            limit: 100
        });
        this.setState({
            posts: posts
        });
    }

    /**
     * Scroll horizontally adding or decreasing specified number of pages (increment)
     *
     * @param {number} increment
     * @memberof PhotoDiariesList
     */
    scrollIncPage(increment: number) {
        const diaryContainer = document.getElementsByClassName("diary-container");
        if (diaryContainer.length) {
            const initPosition = diaryContainer[0].scrollLeft;
            const windowWidth = window.innerWidth;
            const page = Math.trunc(initPosition / windowWidth);
            let newPosition = (page + increment) * windowWidth;
            if (newPosition <= 0) {
                newPosition = 0;
            }
            diaryContainer[0].scrollTo(newPosition, 0);
        }
    }
    /**
     * check if the arrow should be hidden or not when the page is scrolled
     *
     * @memberof PhotoDiariesList
     */
    checkScrollArrowsVisibility() {
        const diaryContainer: any = document.getElementsByClassName("diary-container");
        if (diaryContainer.length) {
            const position = diaryContainer[0].scrollLeft;
            const positionRight =diaryContainer[0].scrollWidth - (diaryContainer[0].scrollLeft + diaryContainer[0].offsetWidth);
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
        // in JS if the length of the array = 0 then it's cast to false, so we can use the shortcut below
        if (!this.state.posts.length) {
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
                    <div  className="diaryPost-container" style={style}>
                        <Link className="background-link" to={"photoDiaries/" + post.slug}/>
                        <div className="text-container">
                        <Link dangerouslySetInnerHTML={{__html: post.title}} className="post-title" to={"photoDiaries/" + post.slug}/>
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
                <div id="diary-page">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>cazalye | PHOTO DIARIES </title>
                    </Helmet>
                    <NavbarHider transparentRowHide={true} whiteTitle={true}/>
                    <h1>Photo Diaries</h1>
                    <h3>Visual Journeys Around the World</h3>
                    <div onClick={e => {this.scrollIncPage(1);}} className={`scroll-button-right ${this.state.rightArrowClass}`}>
                        <i className="fas fa-chevron-right"/>
                    </div>
                    <div onClick={e => {this.scrollIncPage(-1);}} className={`scroll-button-left ${this.state.leftArrowClass}`}>
                        <i className="fas fa-chevron-left"/>
                    </div>
                    <div onScroll={e => {this.checkScrollArrowsVisibility();}} className="diary-container">
                            {postsContent}
                    </div>
                </div>
            );
        }
    }
}

export default PhotoDiariesList;