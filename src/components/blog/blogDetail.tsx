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
        debugger
    }

    render() {
        if (this.state.detail){
        return (
            <div>
                {this.state.detail.title}
            </div>
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

