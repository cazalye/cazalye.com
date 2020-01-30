import React, { Component } from 'react';
import {getPhotoDiaries, Post, getBlogPosts, getPosts} from "../../API/posts";
import NavbarHider from '../navbar-hider/NavbarHider';
import {Link} from "react-router-dom";
import Spinner from '../spinner/spinner';
import "./searchResults.scss";

class SearchResults extends Component<any, any> {
  // initialise empty array of posts, to be run while the data is loading

    state: any = {
        posts: []
    };
    // state: any = {
    //     blogPosts: []
    // };
    // state: any = {
    //     diaryPosts: []
    // };


 // retrieve data
 async componentDidMount() {
    const posts = await getPosts();
    this.setState({
        posts: posts
    });
}
// async componentDidMount() {
//     const blogPosts = await getBlogPosts({
//         limit: 100
//     });
//     this.setState({
//         blogPosts: blogPosts
//     });
// }
//     async componentDidMount() {
//         const diaryPosts = await getPhotoDiaries();
//         this.setState({
//             diaryPosts: diaryPosts
//         });
//     }

    render() {
        // is this or statement ok??
        // if (!this.state.diaryPosts.length) || (!this.state.blogPosts.length){
        if (!this.state.posts.length){
            return (
                <div id="search-results">
                    <Spinner/>
                </div>
            );
        }
        else {
            // Build UI - create html array, loop through feature images and add them to the html object

            // WHY DOES THIS GIVE PHOTO DIARIES INSTEAD OF BLOG POSTS????
            const blogPostsHTML = [];
            for (const post of this.state.posts) {
                const style = {
                    backgroundImage: post.featureMedia ? `url("${post.featureMedia.sizes.large}")`: ""
                };
                blogPostsHTML.push(
                    <Link className="post-link" to={`/blog/${post.slug}`}>
                    {/* <Link className="post-link" to={"blog/" + post.slug}> */}
                        <div className="post-cover-photo" style={style}>
                            <h3 className="post-title" dangerouslySetInnerHTML={{__html: post.title}}/>
                            <p>read the diary</p>
                        </div>
                    </Link>
                );
            const photoDiariesHTML = [];
            for (const post of this.state.posts) {
                const style = {
                    backgroundImage: post.featureMedia ? `url("${post.featureMedia.sizes.large}")`: ""
                };
                photoDiariesHTML.push(
                    <Link className="post-link" to={`/photoDiaries/${post.slug}`}>
                        <div className="post-cover-photo" style={style}>
                            <h3 className="post-title" dangerouslySetInnerHTML={{__html: post.title}}/>
                            <p>read the diary</p>
                        </div>
                    </Link>
            );
        }


        return (
            <div id="search-results">
                <NavbarHider transparentRowHide={true} hamburgerMode={false} lightGreenTitle={true} hideTitle={false}/>
                <div className="search-result-summary">
                    <h1> CATEGORY NAME </h1>
                    <div className="blog">
                        {blogPostsHTML}
                    </div>
                    <div className="photo">
                        {photoDiariesHTML}
                    </div>
                </div>
            </div>
        );
    }
}
}
}

export default SearchResults;