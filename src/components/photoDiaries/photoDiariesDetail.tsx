import React, { Component } from 'react';
import {getPostDetailBySlug, photoDiaryCatID, getPhotoDiaries, Post} from '../../API/posts';
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

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
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

            let relatedPhotoDiaries = await getPhotoDiaries({
                limit: 10
            });

            relatedPhotoDiaries = relatedPhotoDiaries.filter((relatedDiary: Post) => {
                return !(relatedDiary.id === photoDiary.id);
            });

            shuffleArray(relatedPhotoDiaries);
            this.setState({
                relatedPhotoDiaries: relatedPhotoDiaries
            });

        } catch (err) {
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
                // debugger
                return (
                    <div className="cover-page">
                        <div className="cover-photo" style={{backgroundImage: `url(${this.state.photoDiary.images[0].sizes.large})`}}>
                            <h1>{this.state.photoDiary.title}</h1>
                        </div>
                    </div>
                );
            }
            else if  (this.state.page === 1){
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
            }
            // CHANGE THIS conditional statement to rely on flag of PORTRAIT / LANSCAPE which come from new API
            else if (this.state.page === 2){
                return (
                    <div className="double-page-spread">
                        <div className="left-page-key-details book-page">
                            <div className="photo-inner-shadow"/>
                            <div className="photo-outer-shadow"/>
                            <div className="photo-page-container">
                                <div className="photo" style={{backgroundImage: `url(${this.state.photoDiary.images[0].sizes.large})`}}/>
                            </div>
                        </div>
                        <div className="right-page-summary book-page">
                            <div className="photo-page-container">
                                <div className="photo" style={{backgroundImage: `url(${this.state.photoDiary.images[1].sizes.large})`}}/>
                            </div>
                        </div>
                    </div>
                );
            }
            // CHANGE THIS conditional statement to rely on flag of PORTRAIT / LANSCAPE which come from new API
            else if (this.state.page === 3) {
                return (
                    <div className="double-page-spread landscape">
                        <div className="left-page-key-details book-page">
                            <div className="photo-inner-shadow"/>
                            <div className="photo-outer-shadow"/>
                            <div className="photo-page-container">
                                <div className="photo landscape" style={{backgroundImage: `url(${this.state.photoDiary.images[2]})`}}/>
                            </div>
                        </div>
                        <div className="right-page-summary book-page">
                            <div className="photo-page-container"/>
                        </div>
                    </div>
                );
            }
            else if (this.state.page === 4) {
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
        } else {
            return (
                <div id="photo-diary-detail-page">
                    <NavbarHider hamburgerMode={true}/>
                    <div id="photo-diary-detail">
                        {/* TODO: remove previous/next button when page == limits; remove forceUpdate() */}
                        <div onClick={e => {this.incPage(-1);}} className="fas fa-chevron-left"/>
                        <div onClick={e => {this.incPage(1);}} className="fas fa-chevron-right"/>
                        {this.renderSection()}
                    </div>
                </div>
            );
        }

    }
}


export default PhotoDiariesDetail;