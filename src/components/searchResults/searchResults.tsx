import React, { Component } from 'react';
// import {getPhotoDiaries, Post, getBlogPosts} from "../../API/posts";
// import { getBlogPosts, Post } from '../../API/posts';
import { getPosts, Post } from '../../API/posts';
import NavbarHider from '../navbar-hider/NavbarHider';
import {Link} from "react-router-dom";
import Spinner from '../spinner/spinner';
import "./searchResults.scss";

class SearchResults extends Component<any, any> {
  // initialise empty array of posts, to be run while the data is loading
  state: any = {
    posts: []
};

 // retrieve data
 async componentDidMount() {
    const posts = await getPosts();
    this.setState({
        posts: posts
    });
}

    render() {
        if (!this.state.posts.length) {
            return (
                <div id="search-results">
                    <Spinner/>
                </div>
            );
        }
        else {
            // Build UI - create html array, loop through feature images and add them to the html object
            const postHTML = [];
            for (const post of this.state.posts) {
                const style = {
                    backgroundImage: post.featureMedia ? `url("${post.featureMedia.sizes.large}")`: ""
                };
                postHTML.push(
                    // HOW DO I GET AROUND THE PERMALINK EITHER BEING photoDiaries/ or blog/ ??
                    <Link className="post-link" to={`/photoDiaries/${post.slug}`}>
                        <div className="post-cover-photo" style={style}>
                        <h3 className="post-title" dangerouslySetInnerHTML={{__html: post.title}}/>
                        <p>read the diary</p>
                        </div>
                    </Link>
                );
            };
        return (
            <div id="search-results">
            <NavbarHider transparentRowHide={true} hamburgerMode={false} lightGreenTitle={true} hideTitle={false}/>
            <div className="search-result-summary">
                <h1> CATEGORY NAME </h1>
            </div>
                {/* <div className="masonry-layout"> */}
                    {/* <div className="masonry-layout-panel"> */}
                        {/* <div className="masonry-layout__panel-content"> */}
                            {postHTML}
                        {/* </div>
                    </div>
                </div> */}
        </div>
        );
    }
}

export default SearchResults;