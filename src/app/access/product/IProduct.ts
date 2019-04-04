import {Category} from '../category/ICategory';

export interface Product {
    id: number;
    title: string;
    subTitle: string;
    price: number;
    description: string;
    imageUrl: string;
    category: Category;
}
