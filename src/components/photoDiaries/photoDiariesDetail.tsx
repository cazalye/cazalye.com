import React, { Component } from 'react';
import {getPostDetailBySlug} from '../../API/posts';
import "./photoDiariesDetail.scss";
import Footer from "../footer/footer";
import { url } from 'inspector';


class PhotoDiariesDetail extends Component<any, any> {
    page: number;
    constructor(props: any) {
        super(props);
        this.state = {
            "photoDiary": {},
        };
        this.page = 0;
    }
    async componentDidMount() {
        const photoDiary = await getPostDetailBySlug("");
        this.setState({
            "photoDiary": photoDiary
        });
    }
    renderSection() {
        if (this.page === 0) {
            return (
                <div className="cover-page">
                    <div className="cover-photo" style={{backgroundImage: `url(${this.state.photoDiary.feature_image_url})`}}>
                        <h1>{this.state.photoDiary.title}</h1>
                    </div>
                </div>
            );
        }
        else if  (this.page === 1){
            return (
                <div className="double-page-spread">
                    <div className="left-page-key-details book-page">
                        <div className="photo-page-container">
                            <h3>Location<br/>Date<br/>Camera<br/>Lens<br/></h3>
                        </div>
                    </div>
                    <div className="right-page-summary book-page">
                        <div className="photo-page-container">
                            <p>Summary of the place/photo diary</p>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="double-page-spread">
                    <div className="left-page-key-details book-page">
                        <div className="photo-page-container">
                            <div className="photo" style={{backgroundImage: `url(${this.state.photoDiary.images[0]})`}}/>
                        </div>
                    </div>
                    <div className="right-page-summary book-page">
                        <div className="photo-page-container">
                            <div className="photo" style={{backgroundImage: `url(${this.state.photoDiary.images[1]})`}}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
    incPage(increment: number) {
        this.page = this.page + increment;
        if (this.page < 0) {
            this.page = 0;
        }
        this.forceUpdate();
    }
    render() {

        return (
            <div id="photo-diary-detail-page">
                <div id="photo-diary-detail">
                    {/* TODO: remove previous/next button when page == limits; remove forceUpdate() */}
                    <div onClick={e => {this.incPage(-1);}} className="fas fa-chevron-left"/>
                    <div onClick={e => {this.incPage(1);}} className="fas fa-chevron-right"/>
                    {this.renderSection()}
                </div>
                {/* <Footer/> */}
            </div>
        );
    }
}


export default PhotoDiariesDetail;