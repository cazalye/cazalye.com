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

 // retrieve data
 async componentDidMount() {
    const posts = await getPosts();

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
        if (!this.state.posts.length){
            return (
                <div id="search-results">
                    <Spinner/>
                </div>
            );
        }
        else {
            // Build UI - create html array, loop through feature images and add them to the html object
            const blogPostsHTML = [];
            for (const post of this.state.blogPosts) {
                const style = {
                    backgroundImage: post.featureMedia ? `url("${post.featureMedia.sizes.large}")`: ""
                };
                blogPostsHTML.push(
                    <Link className="post-link" to={`/blog/${post.slug}`}>
                        <div className="post-cover-photo" style={style}>
                        <div className="text-container">
                            <h3 className="post-title" dangerouslySetInnerHTML={{__html: post.title}}/>
                            {/* <p>read the post</p> */}
                        </div>
                        </div>
                    </Link>
                    // <div className="post-container"  style={style}>
                    // <Link className="post-link" to={`/blog/${post.slug}`}/>
                    //     <div className="text-container">
                    //         <Link dangerouslySetInnerHTML={{__html: post.title}} className="post-title" to={'blog/${post.slug}'}/>
                    //     </div>
                    // </div>
                   
                );
            // const photoDiariesHTML = [];
            // for (const post of this.state.photoDiaries) {
            //     const style = {
            //         backgroundImage: post.featureMedia ? `url("${post.featureMedia.sizes.large}")`: ""
            //     };
            //     photoDiariesHTML.push(
            //         <div className="post-container"  style={style}>
            //             <Link className="post-link" to={`/photoDiaries/${post.slug}`}/>
            //                 {/* <div className="post-cover-photo" style={style}> */}
            //                 <div className="text-container">
            //                     {/* <Link className="post-title" dangerouslySetInnerHTML={{__html: post.title}}/> */}
            //                     <Link dangerouslySetInnerHTML={{__html: post.title}} className="post-title" to={"photoDiaries/" + post.slug}/>
            //                 </div>
            //                 {/* </div> */}
            //         </div>
            // );
        }


        return (
            <div id="search-results">
                <NavbarHider transparentRowHide={true} hamburgerMode={false} lightGreenTitle={true} hideTitle={false}/>
                <div className="search-results-title">
                    <h1> CATEGORY NAME </h1>
                </div>
                <div className="post-container">
                    <div className="posts">
                        {blogPostsHTML}
                        {/* {photoDiariesHTML} */}
                    </div>
                </div>
            </div>
        );
    }
}
}
// }

export default SearchResults;