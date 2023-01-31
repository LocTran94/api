import {model, Schema} from 'mongoose';

export interface ICategory {
    nameCategory?: string;
}

const CategorySchema = new Schema<ICategory>({
    nameCategory: String,

});

const Category = model<ICategory>('Category', CategorySchema);
export {Category};

