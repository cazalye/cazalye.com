import "./landingPage.scss";
import React, { Component} from 'react';
import {Link} from "react-router-dom";
import Map from "../map/map";
import Footer from "../footer/footer";
import {getPhotoDiaries, Post} from "../../API/posts";

interface LandingPageState {
    // page: number | null;
    page: number;
    initialized: boolean;
    photoDiaries: Post[];
}

class LandingPage extends Component<any, LandingPageState> {
    numImages = 3;
    state: LandingPageState = {
        page: 0,
        initialized: false,
        photoDiaries: []
    };
    async componentDidMount() {
        const photoDiaries = await getPhotoDiaries({
            limit: this.numImages
        });

        this.setState({
            initialized: true,
            photoDiaries: photoDiaries
        });
        setInterval(() => {
            this.setState({
                page: this.state.page > this.numImages - 2 ? 0 : this.state.page + 1
            });
        }, 5000);
    }
    render() {
        let titleHtml = (null);
        let imagesLayerContainer = (null);
        if (this.state.initialized) {
            const activePhotoDiary = this.state.photoDiaries[this.state.page];
            titleHtml = (<h3>{this.state.photoDiaries[this.state.page].title}</h3>);

            const imageLayers = [];
            for (const photoDiary of this.state.photoDiaries) {
                const style = {
                    backgroundImage: `url(${photoDiary.featureMedia.sizes.large})`
                };
                const activeClass = photoDiary.id === activePhotoDiary.id ? "active-layer" : "inactive-layer";
                imageLayers.push(
                    <div className={`image-layer ${activeClass}`} style={style}>
                        <Link className="photo-diary-title" to={`/photoDiaries/${photoDiary.slug}`}>
                            <h3>{photoDiary.title}</h3>
                        </Link>
                    </div>
                );
            }

            imagesLayerContainer = (
                <div className="image-layers-container">
                    {imageLayers}
                </div>
            );
        }
        return (
            <div id="landing">
                <div id="landing1">
                    <div className="mission">
                        <h2>Inspiration for your adventures</h2>
                        <h3>at home and abroad</h3>
                    </div>
                    <div className="start-here">
                        <p>Start Here</p>
                    </div>
                    {imagesLayerContainer}
                </div>
                <div className="landing-section">
                    <Map/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LandingPage;