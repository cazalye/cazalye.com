import React, { Component } from 'react';
import {getPhotoDiaries, Post, getBlogPosts} from "../../API/posts";
import {Link} from "react-router-dom";
import "./postsSlideshow.scss";

interface PostsSlideshowState {
    page: number;
    initialized: boolean;
    posts: Post[];
}
interface PostsSlideshowProps {
    numImages?: number;
    postsType?: "photoDiaries" | "blogPosts";
}

class PostsSlideshow extends Component<PostsSlideshowProps, PostsSlideshowState> {
    numImages = 3;
    interval: any;
    state: PostsSlideshowState = {
        page: 0,
        initialized: false,
        posts: []
    };
    async componentDidMount() {

        if (this.props.numImages) {
            this.numImages = this.props.numImages;
        }

        let posts: Post[];
        if ((!this.props.postsType) || (this.props.postsType === "photoDiaries")) {
            posts = await getPhotoDiaries({
                limit: this.numImages
            });
        } else {
            posts = await getBlogPosts({
                limit: this.numImages
            });
        }

        this.setState({
            initialized: true,
            posts: posts
        });

        this.resetInterval();
    }

    resetInterval() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(() => {
            this.setState({
                page: this.state.page > this.numImages - 2 ? 0 : this.state.page + 1
            });
        }, 5000);
    }

    slide(page: number) {
        this.setState({
            page: page
        });
        this.resetInterval();
    }

    render() {
        let titleHtml = (null);
        const imageLayers = [];
        if (this.state.initialized) {
            const activePhotoDiary = this.state.posts[this.state.page];
            titleHtml = (<h3 dangerouslySetInnerHTML={{__html: this.state.posts[this.state.page].title}}/>);

            for (const photoDiary of this.state.posts) {

                const style = {
                    backgroundImage: photoDiary.featureMedia ? `url(${photoDiary.featureMedia.sizes.large})`: ""
                };
                const activeClass = photoDiary.id === activePhotoDiary.id ? "active-layer" : "inactive-layer";
                imageLayers.push(
                    <div className={`image-layer ${activeClass}`} style={style}>
                        <div className="photo-diary-text">
                            <Link className="photo-diary-title" to={`/photoDiaries/${photoDiary.slug}`}>
                                <h3 dangerouslySetInnerHTML={{__html: photoDiary.title}}/>
                                <p>read the diary</p>
                            </Link>
                        </div>
                    </div>
                );
            }
        }
        // build the numbers lists
        const postsNumbers: any = [];
        for (let i=0; i < this.state.posts.length; i++) {
            let className = "inactive number-container";
            if (i === this.state.page) {
                className = "active number-container";
            }
            postsNumbers.push(<div className={className} onClick={() => this.slide(i)}><h4>{i+1}</h4></div>);
        }
        return (
            <div className="posts-slideshow">
                {imageLayers}
                <div className="post-numbers-text">
                    <h1>Browse Photo Diaries</h1>
                </div>
                <div className="posts-numbers">{postsNumbers}</div>
            </div>
        );
    }
}

export default PostsSlideshow;