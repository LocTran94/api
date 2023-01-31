"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./src/router/router");
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect('mongodb://127.0.0.1:27017/demo_dbC09').then(() => {
    console.log('Connect Database Success');
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('', router_1.router);
app.listen(3000, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map