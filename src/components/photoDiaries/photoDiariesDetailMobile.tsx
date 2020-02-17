import React, { Component } from 'react';
import {getPostDetailBySlug, Post, getRelatedPhotoDiaries} from '../../API/posts';
import "./photoDiariesDetailMobile.scss";
import NavbarHider from '../navbar-hider/NavbarHider';
import NotFound from '../404/404';
import {Link} from "react-router-dom";
// import ScreenRotate from '../screen-rotate/screen-rotate';
import {Breadcrumbs} from '@material-ui/core';
import Spinner from '../spinner/spinner';


interface PhotoDiariesDetailState {
    photoDiary: Post | null;
    relatedPhotoDiaries: Post[];
    page: number;
}

interface PhotoDiariesDetailProps {
    photoDiary: Post | null;
    relatedPhotoDiaries: Post[];
}

class PhotoDiariesDetailMobile extends Component<PhotoDiariesDetailProps, PhotoDiariesDetailState> {
    constructor(props: any) {
        super(props);
        this.state = {
            "photoDiary": null,
            relatedPhotoDiaries: [],
            page: 0,
        };
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any){
        if (this.state.photoDiary && this.props.photoDiary) {
            if (this.state.photoDiary.id !== this.props.photoDiary.id) {
                this.initialize();
            }
        }
    }
    componentDidMount() {
        this.initialize();
    }
    initialize() {
        this.setState({
            page: 0
        });
        if (this.props.photoDiary) {
            this.setState({
                photoDiary: this.props.photoDiary
            });
        }
        if (this.props.relatedPhotoDiaries) {
            this.setState({
                relatedPhotoDiaries: this.props.relatedPhotoDiaries
            });
        }
    }

    renderSection() {
        if (!this.state.photoDiary) {
            return (null);
        }

        if (this.state.page === 0) {
            const style = {
                backgroundImage: this.state.photoDiary.featureMedia ? `url("${this.state.photoDiary.featureMedia.sizes.medium_large}")`: ""
            };
            // COVER PAGE
            return (
                <div className="cover-page">
                    <div className="cover-photo" style={style}/>
                    <div className="cover-title">
                        <h1 dangerouslySetInnerHTML={{__html: this.state.photoDiary.title}}/>
                    </div>
                </div>
            );
        } else if (this.state.page === 1) {
            // INFO PAGE
            return (
                    <div className="photo-diary-metadata">
                        <h3><strong>Location:</strong> {this.state.photoDiary.photoDiaryData.location}</h3>
                        <h3><strong>Date:</strong> {this.state.photoDiary.photoDiaryData.date}</h3>
                        <h3><strong>Camera:</strong> {this.state.photoDiary.photoDiaryData.camera}</h3>
                        <h3><strong>Lens:</strong> {this.state.photoDiary.photoDiaryData.lens}</h3>
                        <h3><strong>Photos taken by:</strong> {this.state.photoDiary.photoDiaryData.photographer}</h3>
                    </div>
            );
        } else if (this.state.page === 2) {
            return (
            <div className="photo-diary-summary">
                <p className="p1">{this.state.photoDiary.photoDiaryData.summary1}</p>
                <p className="p2">{this.state.photoDiary.photoDiaryData.summary2}</p>
                <p className="p3">{this.state.photoDiary.photoDiaryData.summary3}</p>
                <p className="p4">{this.state.photoDiary.photoDiaryData.summary4}</p>
                <p className="p5">{this.state.photoDiary.photoDiaryData.summary5}</p>
            </div>
            );
        } else if (this.state.page <= this.state.photoDiary.images.length + 1) {
            const image = this.state.photoDiary.images[this.state.page - 3];
                return (
                    <div className={`photos ${image.aspectRatio}`} style={{backgroundImage: `url(${image.sizes.large})`}}/>
                );
        } else {
            // END PAGE
            let relatedPosthtml: any = [];
            if (this.state.relatedPhotoDiaries.length > 1) {
                const backgroundImage0 = this.state.relatedPhotoDiaries[0].featureMedia ? this.state.relatedPhotoDiaries[0].featureMedia.sizes.large : "";
                const backgroundImage1 = this.state.relatedPhotoDiaries[1].featureMedia ? this.state.relatedPhotoDiaries[1].featureMedia.sizes.large : "";
                relatedPosthtml = [
                    (
                            <Link className="photo-diary-preview" to={"/photoDiaries/" + this.state.relatedPhotoDiaries[0].slug} style={{backgroundImage: `url(${backgroundImage0})`}}>
                                <h2 dangerouslySetInnerHTML={{__html: this.state.relatedPhotoDiaries[0].title}}/>
                            </Link>
                    ),
                    (
                        <Link className="photo-diary-preview" to={"/photoDiaries/" + this.state.relatedPhotoDiaries[1].slug} style={{backgroundImage: `url(${backgroundImage1})`}}>
                            <h2 dangerouslySetInnerHTML={{__html: this.state.relatedPhotoDiaries[1].title}}/>
                        </Link>
                    )
                ];
            }
            return (
                <div className="back-page">
                    <h1>If you liked this photo diary, you might also like...</h1>
                    {relatedPosthtml}
                </div>
            );
        }
    }
    incPage(increment: number) {
        const newPage = this.state.page + increment;
        if (newPage >= 0) {
            this.setState({
                page: newPage
            });
        }
    }
    render() {
        if (!this.state.photoDiary) {
            return (null);
        }

        let leftArrow = (null);
        if (this.state.page > 0) {
            leftArrow = (<div onClick={e => {this.incPage(-1);}} className="fas fa-chevron-left"/>);
        }
        let rightArrow = (null);
        if (this.state.page < (this.state.photoDiary.images.length + 2)) {
            rightArrow = (<div onClick={e => {this.incPage(+1);}} className="fas fa-chevron-right"/>);
        }
        return (
            <div id="photo-diary-detail-mobile">
                {leftArrow}
                {rightArrow}
                {this.renderSection()}
            </div>
        );
    }
}


export default PhotoDiariesDetailMobile;