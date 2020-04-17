// eslint-disable-next-line no-unused-vars
import { Application } from 'express';
import { TestService } from './services/testService';

export class Controller {
    private testService: TestService;

    // eslint-disable-next-line no-unused-vars
    constructor(private app: Application){
        this.testService = new TestService();
        this.routes();
    }

    public routes(){
        this.app.route('/').get(this.testService.welcomeMessage);
    }
}