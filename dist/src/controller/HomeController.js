"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
const CategoryService_1 = __importDefault(require("../service/CategoryService"));
class HomeController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let products = await ProductService_1.default.getAll();
                res.status(200).json(products);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let newProduct = await ProductService_1.default.save(req.body);
                res.status(200).json(newProduct);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.updateProduct = async (req, res) => {
            try {
                let id = req.params.id;
                let newProduct = req.body;
                let product = await this.productService.update(id, newProduct);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.removeProduct = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await this.productService.remove(id);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findById = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await this.productService.findById(id);
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.productService = ProductService_1.default;
        this.categoryService = CategoryService_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map