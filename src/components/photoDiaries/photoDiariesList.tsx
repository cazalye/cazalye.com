import React, { Component } from 'react';
import {getPhotoDiaries, Post, getBlogPosts} from "../../API/posts";
import PostsSlideshow from "../postsSlideshow/postsSlideshow";
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
            // NEED TO FIX SPINNER CODE
            // dataLoaded: true
        });
    }

    // Build UI - create html array, loop through feature images and add them to the html object
    render() {

        // if (!this.state.dataLoaded) {
        //     return(
        //         <Spinner/>
        //     );
        // } else {

        const photoDiariesHTML = [];
        for (const photoDiary of this.state.posts) {
            const style = {
                backgroundImage: photoDiary.featureMedia ? `url("${photoDiary.featureMedia.sizes.large}")`: ""
            };
            photoDiariesHTML.push(
                <Link className="photo-diary-title" to={`/photoDiaries/${photoDiary.slug}`}>
                    <div className="cover-photo" style={style}>
                    <h3 className="cover-title" dangerouslySetInnerHTML={{__html: photoDiary.title}}/>
                    <p>read the diary</p>
                    </div>
                </Link>
            );
        };


        return (
            <div id="photo-diary-list">
                <NavbarHider transparentRowHide={true} hamburgerMode={false} whiteTitle={true} hideTitle={false}/>
                {/* <PostsSlideshow/> */}
                <div className="photo-diary-summary">
                    <h1>Photo Diaries</h1>
                    <p>Summary of what the photo diaries are about <br/><br/><br/> Images to right are just examples. need to be linked to the api of photo diaries <br/><br/><br/> Also try to align to bottom and make some images go over multiple columns so that sizes vary more <br/><br/><br/> Play around with Navbar and text colours</p>
                </div>
                    <div className="photo-mosaic">
                        {photoDiariesHTML}
                    </div>
            </div>
        );
    }
}

export default PhotoDiariesList;
