import axios from 'axios';

const baseUrl = "http://wordpress.cazalye.com/wp-json/";

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
}

function formatCategory(categoryData: any): Category {
    const ret: Category = {
        id: categoryData.id,
        name: categoryData.name,
        slug: categoryData.slug,
        description: categoryData.description,
    };
    return ret;
}

export async function getCategories(): Promise<Category[]> {
    const categories = await axios.get(`${baseUrl}wp/v2/categories`);

    return categories.data.map(formatCategory);
}