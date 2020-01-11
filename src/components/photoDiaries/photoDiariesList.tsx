import React, { Component } from 'react';
import {getPhotoDiaries, Post, getBlogPosts} from "../../API/posts";
import PostsSlideshow from "../postsSlideshow/postsSlideshow";
import "./photoDiariesList.scss";
import NavbarHider from '../navbar-hider/NavbarHider';

class PhotoDiariesList extends Component {

    render() {
        // for (const photoDiary of this.state.posts) {
        //     const style = {
        //         backgroundImage: photoDiary.featureMedia ? `url("${photoDiary.featureMedia.sizes.large}")`: ""
        // };
        // <div  className="photo-cover" style={style}>
        //     <Link className="photo-cover-link" to={`/photoDiaries/${photoDiary.slug}`}/>
        //     <div className="photo-diary-text">
        //         <Link className="photo-diary-title" to={`/photoDiaries/${photoDiary.slug}`}>
        //             <h3 dangerouslySetInnerHTML={{__html: photoDiary.title}}/>
        //             <p>read the diary</p>
        //         </Link>
        //     </div>
        // </div>



        return (
            <div id="photo-diary-list">
                <NavbarHider hamburgerMode={true} greenTitle={true} hideTitle={false}/>
                {/* <PostsSlideshow/> */}
                <div className="photo-diary-summary">
                    <h1>Photo Diaries</h1>
                    <p>Summary of what the photo diaries are about <br/><br/><br/> Images to right are just examples. need to be linked to the api of photo diaries <br/><br/><br/> Also try to align to bottom and make some images go over multiple columns so that sizes vary more <br/><br/><br/> Play around with Navbar and text colours</p>
                </div>
                <div className="photo-mosaic">
                    <img src="img/background_sepia_cropped.jpg" alt="beach in sepia tones"/>
                    <img src="img/rafting.jpg" alt="rafting montenegro"/>
                    <img src="img/1.jpg" alt="test 1"/>
                    <img src="img/2.jpg" alt="test 2"/>
                    <img src="img/3.jpg" alt="test 3"/>
                </div>
            </div>
        );
    }
}

export default PhotoDiariesList;
