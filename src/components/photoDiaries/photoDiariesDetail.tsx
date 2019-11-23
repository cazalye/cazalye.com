import React, { Component } from 'react';
import {getPostDetailBySlug, Post, getRelatedPhotoDiaries} from '../../API/posts';
import "./photoDiariesDetail.scss";
import NavbarHider from '../navbar-hider/NavbarHider';
import NotFound from '../404/404';
import {Link} from "react-router-dom";

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
            page: 0
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
            page: 0
        });
        try {
            const photoDiary = await getPostDetailBySlug(this.props.match.params.slug);
            this.setState({
                "photoDiary": photoDiary
            });

            const relatedPhotoDiaries = await getRelatedPhotoDiaries(photoDiary.id);

            this.setState({
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
                // COVER PAGE
                return (
                    <div className="cover-page">
                        <div className="cover-photo" style={{backgroundImage: `url(${this.state.photoDiary.featureMedia.sizes.large})`}}>
                            <h1>{this.state.photoDiary.title}</h1>
                        </div>
                    </div>
                );
            } else if (this.state.page === 1) {
                // INFO PAGE
                return (
                    <div className="double-page-spread">
                        <div className="left-page-key-details book-page">
                            <div className="photo-inner-shadow"/>
                            <div className="photo-outer-shadow"/>
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
                    relatedPosthtml = [
                        (
                                <Link className="photo-diary-preview" to={"/photoDiaries/" + this.state.relatedPhotoDiaries[0].slug} style={{backgroundImage: `url(${this.state.relatedPhotoDiaries[0].images[0].sizes.large})`}}>
                                    <h2>{this.state.relatedPhotoDiaries[0].title}</h2>
                                </Link>
                        ),
                        (
                            <Link className="photo-diary-preview" to={"/photoDiaries/" + this.state.relatedPhotoDiaries[1].slug} style={{backgroundImage: `url(${this.state.relatedPhotoDiaries[1].images[0].sizes.large})`}}>
                                <h2>{this.state.relatedPhotoDiaries[1].title}</h2>
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
            return (null);
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
                    <NavbarHider hamburgerMode={true}/>
                    <div id="photo-diary-detail">
                        {leftArrow}
                        {rightArrow}
                        {this.renderSection()}
                    </div>
                </div>
            );
        }

    }
}


export default PhotoDiariesDetail;