import { Application } from 'express';
import { TestService } from './services/testService';

export class Controller {
    private testService: TestService;

    constructor(private app: Application){
        this.testService = new TestService();
        this.routes();
    }

    public routes(){
        this.app.route('/').get(this.testService.welcomeMessage);
    }
}