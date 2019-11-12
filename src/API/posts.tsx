import axios from 'axios';

const baseUrl = "http://wordpress.cazalye.com/wp-json/";
const blogCatID = 200;
const photoDiaryCatID = 655242698;

export interface PostsFilter {
    categories?: number[];
    page?: number;
    limit?: number;
}

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
        date: new Date(postData.post_date),
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
        date: new Date(postData.date),
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

export async function getPosts(filter: PostsFilter = {}): Promise<Post[]> {
    const catFilter = filter.categories || [];
    const limit = filter.limit || 10;
    const page = filter.page || 1;

    let filterString = `?page=${page}&per_page=${limit}&categories=`;
    for (const category of catFilter) {
        filterString += category + ",";
    }
    const posts = await axios.get(`${baseUrl}wp/v2/posts${filterString}`);

    return posts.data.map(formatPost);
}

export async function getPostDetail(id: number): Promise<Post> {
    const postData = await axios.get(`${baseUrl}wp/v2/posts/${id}`);

    return formatPost(postData);
}
export async function getPostDetailBySlug(slug: string): Promise<Post> {
    const postsData = await axios.get(`${baseUrl}wp/v2/posts?slug=${slug}`);

    if (postsData.data.length) {
        return formatPost(postsData.data[0]);
    } else {
        throw new Error(`can't retrieve post with the slug ${slug}`);
    }
}

export function getBlogPosts(filter: PostsFilter = {}): Promise<Post[]> {
    filter.categories = filter.categories || [];
    filter.categories.push(blogCatID);
    return getPosts(filter);
}


export function getPhotoDiaries(filter: PostsFilter = {}): Promise<Post[]> {
    filter.categories = filter.categories || [];
    filter.categories.push(photoDiaryCatID);
    return getPosts(filter);
}

export async function getRelatedPosts(postId: number): Promise<Post[]> {
    const posts = await axios.get(`${baseUrl}cazalye/post/related/${postId}`);
    // debugger

    return posts.data.map(formatRelatedPost);
}