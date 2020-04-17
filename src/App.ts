/* eslint-disable no-unused-vars */
import express, { Application } from 'express';
import { Controller } from './Controller';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
    public app: Application;
    public controller: Controller;

    constructor(){
        this.app = express();
        this.setConfig();

        this.controller = new Controller(this.app);
    }

    private setConfig(){
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cors());
    }
}

export default new App().app;