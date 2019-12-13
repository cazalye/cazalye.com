import React, { Component } from 'react';
import { getPostDetailBySlug } from '../../API/posts';
import "./blogDetail.scss";
import {Link} from 'react-router-dom';

class BlogDetail extends Component<any,any>{

    constructor(props: any) {
        super(props);
        this.state = {
            detail:null,
        };
    }
    componentDidMount() {
        this.initialize();
    }
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any){
        if (this.props.match.params.slug !== prevProps.match.params.slug) {
            this.initialize();
        }
    }
    async initialize() {
        const detail = await getPostDetailBySlug(this.props.match.params.slug);
        this.setState({
            "detail": detail
        });
    }

    render() {
        if (this.state.detail){
            const categoriesNamesHTML = [];
            for(const category of this.state.detail.categories){
                categoriesNamesHTML.push(<Link to={`/blog/category/${category.name}`}>{category.name}</Link>);
            }
            return (
                // <div className="content" dangerouslySetInnerHTML={{__html: this.state.detail.content}}/>
                <div id="blog-detail">
                    <div className="blog-title">
                        <h1 dangerouslySetInnerHTML={{__html: this.state.detail.title}}/>
                        <h3 className="post-date">
                            {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(this.state.detail.date)}
                        </h3>
                        <div className="post-categories">
                            {categoriesNamesHTML}
                        </div>
                        {/* <div className="blog-summary">
                            <h4></h4>
                        </div> */}
                    </div>
                    {/* <img className="blog-feature-image" src={this.state.detail.featureMedia.sizes.large} /> */}
                        {/* <img src={`widhwqiudh ${this.state }`} /> */}
                        {/* <img src={'widhwqiudh' + this.state} /> */}
                    <div className="blog-content" dangerouslySetInnerHTML={{__html: this.state.detail.content}}/>
                </div>
            );
        }
        else{{
            return(
            <div>
                <p> error</p>
            </div>
            );
        }
    }
}
}
export default BlogDetail;