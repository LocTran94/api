import express from 'express';
import {router} from "./src/router/router";
import bodyParser from "body-parser";

import mongoose, {connect} from 'mongoose';
import cors from 'cors';

const app = express();
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/demo_dbC09').then(() => {
    console.log('Connect Database Success')
})
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('', router);

app.listen(3000, () => {
    console.log('Server is running')
})