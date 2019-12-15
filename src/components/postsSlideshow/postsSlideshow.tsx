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
        setInterval(() => {
            this.setState({
                page: this.state.page > this.numImages - 2 ? 0 : this.state.page + 1
            });
        }, 5000);
    }

    render() {
        let titleHtml = (null);
        const imageLayers = [];
        if (this.state.initialized) {
            const activePhotoDiary = this.state.posts[this.state.page];
            titleHtml = (<h3>{this.state.posts[this.state.page].title}</h3>);

            for (const photoDiary of this.state.posts) {
                const style = {
                    backgroundImage: photoDiary.featureMedia ? `url(${photoDiary.featureMedia.sizes.large})`: ""
                };
                const activeClass = photoDiary.id === activePhotoDiary.id ? "active-layer" : "inactive-layer";
                imageLayers.push(
                    <div className={`image-layer ${activeClass}`} style={style}>
                        <Link className="photo-diary-title" to={`/photoDiaries/${photoDiary.slug}`}>
                            <h3>{photoDiary.title}</h3>
                            <p>read the diary</p>
                        </Link>
                    </div>
                );
            }
        }
        return (
            <div className="posts-slideshow">
                {imageLayers}
            </div>
        );
    }
}

export default PostsSlideshow;