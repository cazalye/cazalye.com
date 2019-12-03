import React, { Component } from 'react';
import { getPostDetailBySlug } from '../../API/posts';
import "./blogDetail.scss";

class BlogDetail extends Component<any,any>{

    constructor(props: any) {
        super(props);
        this.state = {
            detail:null,
        };
    }
    async componentDidMount() {
        const detail = await getPostDetailBySlug("the-5-best-things-to-do-in-montenegro");
        this.setState({
            "detail": detail
        });
    }

    render() {
        if (this.state.detail){
        return (
            <div className="content" dangerouslySetInnerHTML={{__html: this.state.detail.content}}/>
        );
        }
        else{
            return(
            <div>
                <p> nope</p>
            </div>
            );
        }
    }
}

export default BlogDetail;