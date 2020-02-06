import React, { Component } from 'react';
import {getPosts} from "../../API/posts";
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

        this.setState({
            posts: posts,
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
                <div className="no-result">
                <h1>No results for that topic</h1>
                <p>try another place</p>
                </div>
            );
        }

        // Build UI - create html array, loop through feature images and add them to the html object
        const postsContent=[];
        for (const post of this.state.posts) {
            const style = {
                backgroundImage: post.featureMedia ? `url("${post.featureMedia.sizes.medium_large}")`: ""
            };
            let urlPrefix = "blog";
            if (post.type === "PhotoDiary") {
                urlPrefix = "photoDiaries";
            }
            const categoriesNamesHTML = [];
            for(const category of post.categories){
                categoriesNamesHTML.push(<span>{category.name}</span>);
            }
            postsContent.push(
                <div className="post-container">
                    <Link className="post-image" style={style} to={`/${urlPrefix}/${post.slug}`}/>
                    <Link dangerouslySetInnerHTML={{__html: post.title}} className="post-title" to={`${urlPrefix}/${post.slug}`}/>
                    <div className="post-categories">
                        {categoriesNamesHTML}
                    </div>
                    <hr className="break"/>
                </div>
            );
        }



        return (
            <div id="search-results">
                <NavbarHider transparentRowHide={true} hamburgerMode={false} lightGreenTitle={true} hideTitle={false}/>
                <div className="posts">
                    {postsContent}
                </div>
            </div>
        );
    }
}

export default SearchResults;