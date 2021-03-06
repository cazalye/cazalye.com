import React, { Component } from 'react';
import {getPostDetailBySlug, Post, getRelatedPhotoDiaries} from '../../API/posts';
import "./photoDiariesDetail.scss";
import NavbarHider from '../navbar-hider/NavbarHider';
import NotFound from '../404/404';
import {Link} from "react-router-dom";
// import ScreenRotate from '../screen-rotate/screen-rotate';
import {Breadcrumbs} from '@material-ui/core';
import Spinner from '../spinner/spinner';
import PhotoDiariesDetailMobile from "../photoDiaries/photoDiariesDetailMobile";
import {Helmet} from "react-helmet";


interface PhotoDiariesDetailState {
    photoDiary: Post | null;
    error: boolean;
    relatedPhotoDiaries: Post[];
    page: number;
}

class PhotoDiariesDetail extends Component<any, PhotoDiariesDetailState> {
    constructor(props: any) {
        super(props);
        this.state = {
            "photoDiary": null,
            error: false,
            relatedPhotoDiaries: [],
            page: 0,
        };
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any){
        if (this.props.match.params.slug !== prevProps.match.params.slug) {
            this.initialize();
        }
        }
    componentDidMount() {
        this.initialize();
    }
    async initialize() {
        this.setState({
            page: 0,
            photoDiary: null
        });
        try {
            const photoDiary = await getPostDetailBySlug(this.props.match.params.slug);
            const relatedPhotoDiaries = await getRelatedPhotoDiaries(photoDiary.id);

            this.setState({
                "photoDiary": photoDiary,
                relatedPhotoDiaries: relatedPhotoDiaries
            });

        } catch (err) {
            // tslint:disable-next-line: no-console
            console.error(err);
            this.setState({
                error: true
            });
        }

    }


    renderSection() {
        if (!this.state.photoDiary) {
            return (null);
        } else {
            if (this.state.page === 0) {
                const style = {
                    backgroundImage: this.state.photoDiary.featureMedia ? `url("${this.state.photoDiary.featureMedia.sizes.medium_large}")`: ""
                };
                // COVER PAGE
                return (
                    <div className="cover-page">
                        <div className="cover-photo" style={style}>
                            <h1 dangerouslySetInnerHTML={{__html: this.state.photoDiary.title}}/>
                        </div>
                    </div>
                );
            } else if (this.state.page === 1) {
                // INFO PAGE
                return (
                    <div className="double-page-spread">
                        <div className="delme">
                            <div className="left-page-key-details book-page">
                                <div className="photo-inner-shadow"/>
                                <div className="photo-outer-shadow"/>
                                <div className="photo-page-container">
                                    <div className="photo-diary-metadata">
                                        <h3><strong>Location:</strong> {this.state.photoDiary.photoDiaryData.location}</h3>
                                        <h3><strong>Date:</strong> {this.state.photoDiary.photoDiaryData.date}</h3>
                                        <h3><strong>Camera:</strong> {this.state.photoDiary.photoDiaryData.camera}</h3>
                                        <h3><strong>Lens:</strong> {this.state.photoDiary.photoDiaryData.lens}</h3>
                                        <h3><strong>Photos taken by:</strong> {this.state.photoDiary.photoDiaryData.photographer}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-page-summary book-page">
                            <div className="photo-page-container">
                                <div className="photo-diary-summary">
                                    <p className="p1">{this.state.photoDiary.photoDiaryData.summary1}</p>
                                    <p className="p2">{this.state.photoDiary.photoDiaryData.summary2}</p>
                                    <p className="p3">{this.state.photoDiary.photoDiaryData.summary3}</p>
                                    <p className="p4">{this.state.photoDiary.photoDiaryData.summary4}</p>
                                    <p className="p5">{this.state.photoDiary.photoDiaryData.summary5}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else if (this.state.page <= this.state.photoDiary.spreads.length + 1) {
                const spread = this.state.photoDiary.spreads[this.state.page - 2];
                if (spread.aspectRatio === "portrait") {
                    // PORTRAIT PAGE
                    let rightPhotoHTML = (null);
                    if (spread.images.length > 1) {
                        rightPhotoHTML = (<div className="photo" style={{backgroundImage: `url(${spread.images[1].sizes.large})`}}/>);
                    }
                    return (
                        <div className="double-page-spread">
                            <div className="left-page-key-details book-page">
                                <div className="photo-inner-shadow"/>
                                <div className="photo-outer-shadow"/>
                                <div className="photo-page-container">
                                    <div className="photo" style={{backgroundImage: `url(${spread.images[0].sizes.large})`}}/>
                                </div>
                            </div>
                            <div className="right-page-summary book-page">
                                <div className="photo-page-container">
                                    {rightPhotoHTML}
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    // LANDSCAPE PAGE
                    return (
                        <div className="double-page-spread landscape">
                            <div className="left-page-key-details book-page">
                                <div className="photo-inner-shadow"/>
                                <div className="photo-outer-shadow"/>
                                <div className="photo-page-container">
                                    <div className="photo landscape" style={{backgroundImage: `url(${spread.images[0].sizes.large})`}}/>
                                </div>
                            </div>
                            <div className="right-page-summary book-page">
                                <div className="photo-page-container"/>
                            </div>
                        </div>
                    );
                }
            } else {
                // END PAGE
                let relatedPosthtml: any = [];
                if (this.state.relatedPhotoDiaries.length > 1) {
                    const backgroundImage0 = this.state.relatedPhotoDiaries[0].featureMedia ? this.state.relatedPhotoDiaries[0].featureMedia.sizes.large : "";
                    const backgroundImage1 = this.state.relatedPhotoDiaries[1].featureMedia ? this.state.relatedPhotoDiaries[1].featureMedia.sizes.large : "";
                    relatedPosthtml = [
                        (
                                <Link className="photo-diary-preview-1" to={"/photoDiaries/" + this.state.relatedPhotoDiaries[0].slug} style={{backgroundImage: `url(${backgroundImage0})`}}>
                                    <h2 dangerouslySetInnerHTML={{__html: this.state.relatedPhotoDiaries[0].title}}/>
                                </Link>
                        ),
                        (
                            <Link className="photo-diary-preview-2" to={"/photoDiaries/" + this.state.relatedPhotoDiaries[1].slug} style={{backgroundImage: `url(${backgroundImage1})`}}>
                                <h2 dangerouslySetInnerHTML={{__html: this.state.relatedPhotoDiaries[1].title}}/>
                            </Link>
                        )
                    ];
                }
                return (
                    <div className="double-page-spread back-page-container">
                        <div className="left-page-key-details book-page">
                            <div className="photo-page-container">
                                <div className="back-page">
                                    <h1>If you liked this photo diary, you might also like...</h1>
                                    {relatedPosthtml}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
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
        if (this.state.error) {
            return (<NotFound/>);
        } else if (!this.state.photoDiary) {
            // return (null);
            return(
                <Spinner/>
            );
        } else {
            let leftArrow = (null);
            if (this.state.page > 0) {
                leftArrow = (<div onClick={e => {this.incPage(-1);}} className="fas fa-chevron-left"/>);
            }
            let rightArrow = (null);
            if (this.state.page < (this.state.photoDiary.spreads.length + 2)) {
                rightArrow = (<div onClick={e => {this.incPage(+1);}} className="fas fa-chevron-right"/>);
            }
            return (
                <div id="photo-diary-detail-page">
                    {/* <ScreenRotate/> */}
                    <NavbarHider hamburgerMode={true} whiteTitle={true}/>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <meta name="description" content={this.state.photoDiary.description} />
                        <title>{this.state.photoDiary.title}</title>
                    </Helmet>
                    <Breadcrumbs maxItems={4} aria-label="breadcrumb" className="breadcrumbs">
                        <Link to="/" color="inherit">
                            Home
                        </Link>
                        <Link to="/photoDiaries" color="inherit">
                            Photo Diaries
                        </Link>
                        {/* <Typography className="current-page" color="inherit" dangerouslySetInnerHTML={{__html: this.state.detail.title}}/> */}
                    </Breadcrumbs>
                    <div id="photo-diary-detail">
                        {leftArrow}
                        {rightArrow}
                        {this.renderSection()}
                    </div>
                    <PhotoDiariesDetailMobile photoDiary={this.state.photoDiary} relatedPhotoDiaries={this.state.relatedPhotoDiaries}/>
                </div>
            );
        }

    }
}


export default PhotoDiariesDetail;