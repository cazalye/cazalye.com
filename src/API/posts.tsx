import axios from 'axios';

const baseUrl = "http://wordpress.cazalye.com/wp-json/";
const blogCatID = 200;
const photoDiaryCatID = 4328;

interface Post {
    id: number;
    title: string;
    date: Date;
    slug: string;
    categories?: number[];
    tags?: number[];
    status: string;
    description: string;
    content: string;
    feature_image_url: string;
    images?: string[];
}

function formatRelatedPost(postData: any): Post {
    const regExp = /<img.*?src="(.*?)".*?\/>/gm;
    const match = regExp.exec(postData.post_content);
    let m: any;
    const images: string[] = [];
    while ((m = regExp.exec(postData.post_content)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regExp.lastIndex) {
            regExp.lastIndex++;
        }
        images.push(m[1]);
    }

    const ret: Post = {
        id: postData.ID,
        title: postData.post_title,
        date: postData.post_date,
        slug: postData.post_name,
        content: postData.post_content,
        status: postData.post_status,
        description: postData.post_exerpt,
        feature_image_url: images.length? images[0] : "", // FIXME
        images: images,
    };
    return ret;
}

function formatPost(postData: any): Post {
    const regExp = /<img.*?src="(.*?)".*?\/>/gm;
    const match = regExp.exec(postData.content.rendered);
    let m: any;
    const images: string[] = [];
    while ((m = regExp.exec(postData.content.rendered)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regExp.lastIndex) {
            regExp.lastIndex++;
        }
        images.push(m[1]);
    }

    const ret: Post = {
        id: postData.id,
        title: postData.title.rendered,
        date: postData.date,
        slug: postData.slug,
        categories: postData.categories,
        content: postData.content.rendered,
        tags: postData.tags,
        status: postData.status,
        description: postData.excerpt.rendered,
        feature_image_url: postData.jetpack_featured_media_url,
        images: images,
    };
    return ret;
}

export async function getPosts(categories: number[] = []): Promise<Post[]> {
    let filterString = "";
    for (const category of categories) {
        filterString += category + ",";
    }
    const posts = await axios.get(`${baseUrl}wp/v2/posts?categories=${filterString}`);

    return posts.data.map(formatPost);
}

export async function getPostDetail(id: number): Promise<Post> {
    const postData = await axios.get(`${baseUrl}wp/v2/posts/${id}`);

    return formatPost(postData);
}

export function getBlogPosts(categories: number[] = []): Promise<Post[]> {
    categories.push(blogCatID);
    return getPosts(categories);
}


export function getPhotoDiaries(categories: number[] = []): Promise<Post[]> {
    categories.push(photoDiaryCatID);
    return getPosts(categories);
}

export async function getRelatedPosts(postId: number): Promise<Post[]> {
    const posts = await axios.get(`${baseUrl}cazalye/post/related/${postId}`);
    // debugger

    return posts.data.map(formatRelatedPost);
}