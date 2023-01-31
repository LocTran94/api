import {model, Schema} from 'mongoose';
import {ICategory} from "./category";

// export interface IProduct {
//     name?: string;
//     price?: number;
//     id?: string;
//     image?: string;
//     category?: ICategory
// }
//
// const ProductSchema = new Schema<IProduct>({
//     name: String,
//     price: Number,
//     id: String,
//     image: String,
//     category: {
//         type: String,
//         ref : 'Category'
//     }
// });


export interface IProduct {
    name?: string;
    price?: number;
    id?: string;
    image?: string;

}

const ProductSchema = new Schema<IProduct>({
    name: String,
    price: Number,
    id: String,
    image: String,



});

const Product = model<IProduct>('Product', ProductSchema);
export {Product};

