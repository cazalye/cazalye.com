import React, { Component } from 'react';
import {getPhotoDiaries, Post, getBlogPosts} from "../../API/posts";
import "./photoDiariesList.scss";
import NavbarHider from '../navbar-hider/NavbarHider';
import {Link} from "react-router-dom";
import Spinner from '../spinner/spinner';
 

class PhotoDiariesList extends Component<any, any> {
    // initialise empty array of posts, to be run while the data is loading
    state: any = {
        posts: []
    };

    // retrieve data
    async componentDidMount() {
        const posts = await getPhotoDiaries();
        this.setState({
            posts: posts
        });
    }

    render() {
        if (!this.state.posts.length) {
            return (
                <div id="photo-diary-list">
                    <Spinner/>
                </div>
            );
        }
        else {
            // Build UI - create html array, loop through feature images and add them to the html object
            const photoDiariesHTML = [];
            for (const photoDiary of this.state.posts) {
                const style = {
                    backgroundImage: photoDiary.featureMedia ? `url("${photoDiary.featureMedia.sizes.large}")`: ""
                };
                photoDiariesHTML.push(
                    <div className="post-container">
                        <Link className="post-image"  style={style} to={`/photoDiaries/${photoDiary.slug}`}/>
                        <Link className="cover-title" dangerouslySetInnerHTML={{__html: photoDiary.title}} to={`/photoDiaries/${photoDiary.slug}`}/>
                        <hr className="break"/>
                    </div>
                );
            };

            return (
                <div id="photo-diary-list">
                    <NavbarHider transparentRowHide={true} hamburgerMode={false} whiteTitle={true} hideTitle={false}/>
                    <div className="photo-diary-summary">
                        <h1>Photo Diaries</h1>
                        <p>Visual Journeys Around the World</p>
                    </div>
                    <div className="posts">
                        {photoDiariesHTML}
                    </div>
                </div>
            );
        }
    }
}

export default PhotoDiariesList;
