import {Post, FeatureImageSizes, Media, Spread, baseUrlImages, PhotoDiaryData} from "./posts";
import { parse } from 'node-html-parser';

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
export function shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


/**
 * Return the images of the post, given its HTML content
 *
 * @param {string} content
 * @returns {string[]}
 */
function getImagesFromContent(content: string): string[] {
    const regExp = /<img.*?src="(.*?)".*?\/>/gm;
    // const match = regExp.exec(postData.content.rendered);
    let m: any;
    const images: string[] = [];
    while ((m = regExp.exec(content)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regExp.lastIndex) {
            regExp.lastIndex++;
        }
        images.push(m[1]);
    }

    return images;
}

/**
 * Get feature image url with different sizes, if the post was fetched with the _embed option
 * DEPRECATED
 *
 * @param {*} postData
 * @returns {(FeatureImageSizes | null)}
 */
function getFeatureImageSizesFromEmbedded(postData: any): FeatureImageSizes | null {
    if (postData._embedded && postData._embedded["wp:featuredmedia"] && postData._embedded["wp:featuredmedia"].length && postData._embedded["wp:featuredmedia"][0].media_details) {
        return {
            thumbnail: postData._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url,
            medium: postData._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url,
            medium_large: postData._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url,
            large: postData._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url,
            full: postData._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url,
        };
    } else {
        return null;
    }
}

/**
 * Format a media type i.e. by adding base Url to filename
 *
 * @param {*} media
 * @returns {Media}
 */
function formatMedia(media: any): Media {
    const sizes: any = {};
    for (const size of Object.keys(media.sizes)) {
        sizes[size] = baseUrlImages + media.file.substr(0, media.file.lastIndexOf("/") + 1) + media.sizes[size].file;
    }

    return {
        aspectRatio:  (media.width > media.height) ? "landscape" : "portrait",
        height: media.height,
        width: media.width,
        file: baseUrlImages + media.file,
        sizes: sizes
    };

}

/**
 * check if the medias are really used by the post
 * and sort them in the order they are used
 *
 * @param {Media[]} medias
 * @param {string} content
 * @returns {Media[]}
 */
function filterAndSortMedia(medias: Media[], content: string): Media[] {
    // index input media array by filename
    // we can access a media obj just using one of its url
    // i.e. mediasIndex['http://image.jpg']
    const mediasIndex: any = {};
    for (const media of medias) {
        mediasIndex[media.file] = media;
        const sizes: any = media.sizes;
        for (const size of Object.keys(sizes)) {
            mediasIndex[sizes[size]] = media;
        }
    }

    // parse images in the rendered content.
    const imagesFromContent = getImagesFromContent(content);
    const ret: Media[] = [];
    for (const image of imagesFromContent) {
        if (mediasIndex[image]) {
            ret.push(mediasIndex[image]);
        }
    }
    return ret;
}

/**
 * Parse content of a post to find photo diary metadatas
 *
 * @param {string} content
 * @returns {PhotoDiaryData}
 */
function parsePhotoDiaryData(content: string): PhotoDiaryData {
    const root = parse(content) as any;
    const summaryNode1 = root.querySelector("h1");
    const summaryNode2 = root.querySelector("h2");
    const summaryNode3 = root.querySelector("h3");
    const summaryNode4 = root.querySelector("h4");
    const summaryNode5 = root.querySelector("h5");
    const lis = root.querySelectorAll("ul li");

    return {
        summary1: summaryNode1 ? summaryNode1.text : null,
        summary2: summaryNode2 ? summaryNode2.text : null,
        summary3: summaryNode3 ? summaryNode3.text : null,
        summary4: summaryNode4 ? summaryNode4.text : null,
        summary5: summaryNode5 ? summaryNode5.text : null,
        location: lis.length > 0 ? lis[0].text : null,
        date: lis.length > 1 ? lis[1].text : null,
        camera: lis.length > 2 ? lis[2].text : null,
        lens: lis.length > 3 ? lis[3].text : null,
    };
}

/**
 * Format the post, building feature image, images, and other stuff
 *
 * @export
 * @param {*} postData
 * @returns {Post}
 */
export function formatPost(postData: any): Post {

    let images: Media[] = postData.medias.map(formatMedia);
    images = filterAndSortMedia(images, postData.content.rendered);

    return {
        id: postData.id,
        title: postData.title.rendered,
        date: new Date(postData.date),
        slug: postData.slug,
        content: postData.content.rendered,
        tags: postData.tags,
        status: postData.status,
        description: postData.excerpt.rendered,
        images: images,
        categories: postData.categoriesObjects,
        featureMedia: postData.feature_image ? formatMedia(postData.feature_image): null,
        spreads: buildSpreadsFromImages(images),
        photoDiaryData: parsePhotoDiaryData(postData.content.rendered),
    };
}

/**
 * Build the spreads array, grouped by landscape and portrait images, from a media array
 *
 * @param {Media[]} images
 * @returns {Spread[]}
 */
function buildSpreadsFromImages(images: Media[]): Spread[] {
    const spreads: Spread[] = [];
    const addedImages: number[] = [];
    let end = false;

    while (!end) {
        let spread: Spread | null = null;

        for (let i=0; i < images.length; i++) {
            const image = images[i];
            if (!addedImages.includes(i)) {
                if (!spread) {
                    spread = {
                        aspectRatio: image.aspectRatio,
                        images: [image]
                    };
                    addedImages.push(i);
                    if (image.aspectRatio === "landscape") {
                        break;
                    }
                } else if (spread.images[0].aspectRatio === image.aspectRatio) {
                    spread.images.push(image);
                    addedImages.push(i);
                    break;
                }
            }
        }
        if (spread) {
            spreads.push(spread);
        } else {
            end = true;
        }
    }
    return spreads;
}

/**
 * Get the categories names from post Object if the _embed option is active
 *
 * @export
 * @param {*} postData
 * @returns {string[]}
 */
function getCategoriesNamesFromEmbed(postData: any): string[] {
    // check if the cat names are available
    let catsNames: string[] = [];
    if (postData._embedded && postData._embedded["wp:term"]) {
        const cats = postData._embedded["wp:term"][0];
        catsNames = cats.map((cat: any) => cat.name);
    }
    return catsNames;
}