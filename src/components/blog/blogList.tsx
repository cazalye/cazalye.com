import React, { Component } from 'react';
import { getBlogPosts, Post } from '../../API/posts';
import "./blogList.scss";
import { Link } from 'react-router-dom';

interface BlogState {
    posts: Post[];
}

class Blog extends Component<any, BlogState> {
    travelPosts: any;
    constructor(props: any) {
        super(props);
        this.state = {
            posts: []
        };
    }
    async componentDidMount() {
        const posts = await getBlogPosts({
            limit: 20
        });
        this.setState({
            posts: posts
        });
    }

    scrollIncPage(increment: number) {
        const blogContainer = document.getElementsByClassName("blog-container");
        if (blogContainer.length) {
            const initPosition = blogContainer[0].scrollLeft;
            const windowWidth = window.innerWidth;
            const page = Math.trunc(initPosition / windowWidth);
            const newPosition = (page + increment) * windowWidth;
            blogContainer[0].scrollTo(newPosition, 0);
        }
    }
    render() {
        const postsContent=[];
        for (const post of this.state.posts) {

            const style = {
                backgroundImage: `url("${post.featureMedia.sizes.medium_large}")`
            };
            const categoriesNamesHTML = [];
            for(const category of post.categories){
                categoriesNamesHTML.push(<span>{category.name}</span>);
            }

            postsContent.push(
                <div  className="post-container" style={style}>
                    <Link className="background-link" to={"blog/" + post.slug}/>
                    <div className="text-container">
                    <h2 className="post-title">{post.title}</h2>
                        <h3 className="post-date">
                            {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(post.date)}
                        </h3>
                        <div className="post-categories">
                            {categoriesNamesHTML}
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div id="blogs-page">
                <div onClick={e => {this.scrollIncPage(1);}}>
                    <i className="fas fa-chevron-right"/>
                </div>
                <div onClick={e => {this.scrollIncPage(-1);}} className="scroll-button-left">
                    <i className="fas fa-chevron-left"/>
                </div>
                <h1>New on the Blog</h1>
                <div className="blog-container">
                        {postsContent}
                </div>


            </div>
        );
    }
}

export default Blog;