import axios from 'axios';
import {formatPost, shuffleArray} from "./utils";

const baseUrl = "http://wordpress.cazalye.com/wp-json/";
export const baseUrlImages = "https://wordpress.cazalye.com/wp-content/uploads/";
const blogCatID = 200;
export const photoDiaryCatID = 655242675;

export interface PostsFilter {
    categories?: number[];
    page?: number;
    limit?: number;
}

export interface PhotoDiaryData {
    location: string;
    date: string;
    camera: string;
    lens: string;
    summary1: string;
    summary2: string;
    summary3: string;
    summary4: string;
    summary5: string;
}

export interface Post {
    id: number;
    title: string;
    date: Date;
    slug: string;
    tags?: number[];
    status: string;
    description: string;
    content: string;
    categories: Category[];
    featureMedia: Media | null;
    images: Media[];
    spreads: Spread[];
    photoDiaryData: PhotoDiaryData;
}

export interface Media {
    aspectRatio: "portrait" | "landscape";
    width: number;
    height: number;
    file: string;
    sizes: {
        medium: string;
        large: string;
        thumbnail: string;
        medium_large: string;
        "1536x15336": string;
        "2048x2048": string;
        "featured-post-thumb": string;
        "portfolio-post-thumb": string;
    };
}

export interface Spread {
    aspectRatio: "portrait" | "landscape";
    images: Media[];
}

export interface FeatureImageSizes {
    thumbnail: string;
    medium: string;
    medium_large: string;
    large: string;
    full: string;
}

export interface Category {
    cat_ID: number;
    name: string;
    slug: string;
    term_group: 0;
    description: string;
    count: number;
}

/**
 * Get list of posts
 *
 * @export
 * @param {PostsFilter} [filter={}]
 * @returns {Promise<Post[]>}
 */
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
    const posts = await axios.get(`${baseUrl}wp/v2/posts${filterString}`);
    return posts.data.map(formatPost);
}

/**
 * Get the detail of a post, given its ID
 *
 * @export
 * @param {number} id
 * @returns {Promise<Post>}
 */
export async function getPostDetail(id: number): Promise<Post> {
    const postData = await axios.get(`${baseUrl}wp/v2/posts/${id}`);

    return formatPost(postData);
}

/**
 * Get detail of a post, given its slug instead of the ID
 *
 * @export
 * @param {string} slug
 * @returns {Promise<Post>}
 */
export async function getPostDetailBySlug(slug: string): Promise<Post> {
    const postsData = await axios.get(`${baseUrl}wp/v2/posts?slug=${slug}&_embed`);

    if (postsData.data.length) {
        return formatPost(postsData.data[0]);
    } else {
        throw new Error(`can't retrieve post with the slug ${slug}`);
    }
}

/**
 * Get blog posts list
 *
 * @export
 * @param {PostsFilter} [filter={}]
 * @returns {Promise<Post[]>}
 */
export function getBlogPosts(filter: PostsFilter = {}): Promise<Post[]> {
    filter.categories = filter.categories || [];
    filter.categories.push(blogCatID);
    return getPosts(filter);
}


/**
 * Get photo diaries list
 *
 * @export
 * @param {PostsFilter} [filter={}]
 * @returns {Promise<Post[]>}
 */
export function getPhotoDiaries(filter: PostsFilter = {}): Promise<Post[]> {
    filter.categories = filter.categories || [];
    filter.categories.push(photoDiaryCatID);
    return getPosts(filter);
}

/**
 * Get related photodiaries of a photo Diary
 *
 * @export
 * @param {number} diaryId
 * @returns {Promise<Post[]>}
 */
export async function getRelatedPhotoDiaries(diaryId: number): Promise<Post[]> {
    let relatedPhotoDiaries = await getPhotoDiaries({
        limit: 10
    });

    relatedPhotoDiaries = relatedPhotoDiaries.filter((relatedDiary: Post) => {
        return !(relatedDiary.id === diaryId);
    });

    shuffleArray(relatedPhotoDiaries);
    return relatedPhotoDiaries;
}

/**
 * Get related photodiaries of a photo Diary
 *
 * @export
 * @param {number} diaryId
 * @returns {Promise<Post[]>}
 */
export async function getRelatedBlogPosts(diaryId: number): Promise<Post[]> {
    let relatedBlogPosts = await getBlogPosts({
        limit: 10
    });

    relatedBlogPosts = relatedBlogPosts.filter((relatedDiary: Post) => {
        return !(relatedDiary.id === diaryId);
    });

    shuffleArray(relatedBlogPosts);
    return relatedBlogPosts;
}