import { Category } from "./category.model";

export interface Product{
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
    creationAt: string;
    updatedAt: string;
    category: Category;
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category' | 'creationAt' | 'updatedAt'>{
    categoryId: number;
}