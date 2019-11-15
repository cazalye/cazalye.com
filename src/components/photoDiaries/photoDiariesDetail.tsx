import React, { Component } from 'react';
import {getPostDetailBySlug} from '../../API/posts';
import "./photoDiariesDetail.scss";


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
        const photoDiary = await getPostDetailBySlug("helsinki-in-autumn");
        this.setState({
            "photoDiary": photoDiary
        });
    }
    renderSection() {
        if (this.page === 0) {
            return (
                <div>
                    <h1>{this.state.photoDiary.title}</h1>
                    <img src={this.state.photoDiary.feature_image_url}/>
                </div>
            );
        }
        else if  (this.page === 1){
            return (
                <div>
                    <div className="left-page-key-details">{this.page}
                        <h3>Location<br/>Date<br/>Camera<br/>Lens<br/></h3>
                    </div>
                    <div className="right-page-summary">{this.page}
                        <p>Summary of the place/photo diary</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="left-page-image">{this.page}
                        <h3>IMAGE</h3>
                    </div>
                    <div className="right-page-image">{this.page}
                    <h3>IMAGE</h3>
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
            <div id="photo-diary-detail">
                {/* TODO: remove previous/next button when page == limits; remove forceUpdate() */}
                <div onClick={e => {this.incPage(-1)}} className="previous-section"/>
                <div onClick={e => {this.incPage(1);}} className="next-section"/>
                {this.renderSection()}
            </div>
        );
    }
}

export default PhotoDiariesDetail;


// Add to analogue diary into:  One of my favourite things about travelling to and exploring new places is to wander aimlessly with my camera in hand, capturing local street life, landscapes and foreign feelings. As an introvert, it also gives me some time to myself, to escape the busy and people-filled aspects of travel. As the photographer Alec Soth wonderfully describes it; "I fell in love with photography because it was an excuse to wander around alone"..... Using a film camera heightens the sense of being lost in another culture- you're forced to slow down and really think about the image composition as there's a limited number of (rather expensive) images to shoot.