import {Router} from "express";
import homeController from "../controller/HomeController";
import {productRouter} from "./product-router";

export const router = Router();

router.use('/products', productRouter);
