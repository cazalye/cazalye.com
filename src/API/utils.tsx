import {Post, FeatureImageSizes, Media, Spread, baseUrlImages} from "./posts";


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
 * Format the post, building feature image, images, and other stuff
 *
 * @export
 * @param {*} postData
 * @returns {Post}
 */
export function formatPost(postData: any): Post {

    const images: Media[] = postData.medias.map(formatMedia);

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
        featureMedia: formatMedia(postData.feature_image),
        spreads: buildSpreadsFromImages(images)
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