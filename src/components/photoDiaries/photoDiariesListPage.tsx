import React, { Component } from 'react';
import NavbarHider from '../navbar-hider/NavbarHider';
import PhotoDiariesList from "./photoDiariesListScroll";
import {Helmet} from "react-helmet";



class PhotoDiariesListPage extends Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>cazalye | PHOTO DIARIES</title>
                </Helmet>
                <NavbarHider transparentRowHide={true} hamburgerMode={false} whiteTitle={true} hideTitle={false}/>
                <PhotoDiariesList/>
            </div>
        );
    }
}

export default PhotoDiariesListPage;