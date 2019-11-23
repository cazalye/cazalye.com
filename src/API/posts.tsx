import axios from 'axios';

const baseUrl = "http://wordpress.cazalye.com/wp-json/";
const blogCatID = 200;
export const photoDiaryCatID = 655242675;

export interface PostsFilter {
    categories?: number[];
    page?: number;
    limit?: number;
    showCategoriesNames?: boolean;
    showFeaturedImageSizes?: boolean;
}

interface FeatureImageSizes {
    thumbnail: string;
    medium: string;
    medium_large: string;
    large: string;
    full: string;
}

export interface Post {
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
    featureImageSizes?: FeatureImageSizes | null;
    images?: string[];
    categoriesNames?: string[];
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
        feature_image_url: postData.feature_image_url,
        images: images,
    };
    return ret;
}

function formatPost(postData: any): Post {
    const regExp = /<img.*?src="(.*?)".*?\/>/gm;
    // const match = regExp.exec(postData.content.rendered);
    let m: any;
    const images: string[] = [];
    while ((m = regExp.exec(postData.content.rendered)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regExp.lastIndex) {
            regExp.lastIndex++;
        }
        images.push(m[1]);
    }

    // check if the cat names are available
    let featureImageSizes: FeatureImageSizes | null = null;
    if (postData._embedded && postData._embedded["wp:featuredmedia"] && postData._embedded["wp:featuredmedia"].length && postData._embedded["wp:featuredmedia"][0].media_details) {
        featureImageSizes = {
            thumbnail: postData._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url,
            medium: postData._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url,
            medium_large: postData._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url,
            large: postData._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url,
            full: postData._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url,
        };
    }

    // check if the cat names are available
    let catsNames: string[] = [];
    if (postData._embedded && postData._embedded["wp:term"]) {
        const cats = postData._embedded["wp:term"][0];
        catsNames = cats.map((cat: any) => cat.name);
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
        categoriesNames: catsNames,
        featureImageSizes: featureImageSizes,
    };
    return ret;
}

export async function getPosts(filter: PostsFilter = {}): Promise<Post[]> {
    const catFilter = filter.categories || [];

    let filterString = `?categories=`;
    for (const category of catFilter) {
        filterString += category + ",";
    }
    if (filter.limit) {
        filterString += `&per_page=${filter.limit}`;
    }
    if (filter.page) {
        filterString += `&page=${filter.page}`;
    }
    if (filter.showCategoriesNames || filter.showFeaturedImageSizes) {
        filterString += "&_embed";
    }
    const posts = await axios.get(`${baseUrl}wp/v2/posts${filterString}`);
    return posts.data.map(formatPost);
}

export async function getPostDetail(id: number): Promise<Post> {
    const postData = await axios.get(`${baseUrl}wp/v2/posts/${id}`);

    return formatPost(postData);
}
export async function getPostDetailBySlug(slug: string): Promise<Post> {
    const postsData = await axios.get(`${baseUrl}wp/v2/posts?slug=${slug}&_embed`);

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

    return posts.data.map(formatRelatedPost);
}