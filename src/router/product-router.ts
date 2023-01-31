import {Router} from "express";
import homeController from "../controller/HomeController";

export const productRouter = Router();
productRouter.get('', homeController.getAll);
productRouter.post('/' , homeController.create);
productRouter.get('/:id', homeController.findById);
productRouter.put('/:id',homeController.updateProduct);

productRouter.delete('/:id',homeController.removeProduct);