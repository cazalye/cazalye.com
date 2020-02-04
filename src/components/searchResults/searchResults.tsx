import React, { Component } from 'react';
import {getPhotoDiaries, Post, getBlogPosts, getPosts} from "../../API/posts";
import NavbarHider from '../navbar-hider/NavbarHider';
import {Link} from "react-router-dom";
import Spinner from '../spinner/spinner';
import "./searchResults.scss";

class SearchResults extends Component<any, any> {
  // initialise empty array of posts, to be run while the data is loading
    state: any = {
        posts: null
    };

    componentDidMount() {
        this.initialize();
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any){
        if (this.props.match.params.searchQuery !== prevProps.match.params.searchQuery) {
            this.initialize();
        }
    }

    // retrieve data
    async initialize() {
        const searchQuery = this.props.match.params.searchQuery;
        const posts = await getPosts({
            searchQuery: searchQuery
        });

        // split blog posts and photo diaries
        const blogPosts = posts.filter(post => post.type === "BlogPost");
        const photoDiaries = posts.filter(post => post.type === "PhotoDiary");

        this.setState({
            posts: posts,
            blogPosts: blogPosts,
            photoDiaries: photoDiaries
        });
    }
    render() {
        if (!this.state.posts){
            return (
                <div id="search-results">
                    <Spinner/>
                </div>
            );
        } else if (!this.state.posts.length) {
            return (
                <h1>No results</h1>
            );
        }

        // Build UI - create html array, loop through feature images and add them to the html object
        const blogPostsHTML = [];
        for (const post of this.state.posts) {
            const style = {
                backgroundImage: post.featureMedia ? `url("${post.featureMedia.sizes.large}")`: ""
            };
            let urlPrefix = "blog";
            if (post.type === "PhotoDiary") {
                urlPrefix = "photoDiaries";
            }
            blogPostsHTML.push(
                <div className="post-container">
                    <Link className="post-image" style={style} to={`/${urlPrefix}/${post.slug}`}/>
                    <Link dangerouslySetInnerHTML={{__html: post.title}} className="post-title" to={`${urlPrefix}/${post.slug}`}/>
                </div>
            );
        }
        // const photoDiariesHTML = [];
        // for (const post of this.state.photoDiaries) {
        //     const style = {
        //         backgroundImage: post.featureMedia ? `url("${post.featureMedia.sizes.large}")`: ""
        //     };
        //     photoDiariesHTML.push(
        //         <div className="post-container">
        //             <Link className="post-link" style={style} to={`/photoDiaries/${post.slug}`}/>
        //             <Link dangerouslySetInnerHTML={{__html: post.title}} className="post-title" to={"photoDiaries/" + post.slug}/>
        //         </div>
        // );


        return (
            <div id="search-results">
                <NavbarHider transparentRowHide={true} hamburgerMode={false} lightGreenTitle={true} hideTitle={false}/>
                <div className="posts">
                        {blogPostsHTML}
                        {/* {photoDiariesHTML} */}
                </div>
            </div>
        );
    }
}

export default SearchResults;