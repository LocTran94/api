import {Request, Response} from "express";
import productService from "../service/ProductService";
import categoryService from "../service/CategoryService";

class HomeController {
    private productService;
    private categoryService;

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let products = await productService.getAll();

            res.status(200).json(products);
        }
        catch (e){
            res.status(500).json(e.message)
        }
    }



    create = async (req: Request, res: Response) => {

         try {
             let newProduct =  await productService.save(req.body);
             res.status(200).json(newProduct)
         }
         catch (e){
             res.status(500).json(e.message)
         }
    }




    updateProduct = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let newProduct = req.body;
            let product = await this.productService.update(id, newProduct);
            res.status(200).json(product)
        }
        catch (e) {
            res.status(500).json(e.message)
        }

    }

    removeProduct = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let product = await this.productService.remove(id);
            res.status(200).json(product)
        }
        catch (e) {
            res.status(500).json(e.message)
        }

    }
findById = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        let product = await this.productService.findById(id);
        res.status(200).json(product)
    } catch (e) {
        res.status(500).json(e.message)
    }
}
}

export default new HomeController();