import { Router } from 'express';
import UserController from './controllers/UsersController'


const routes = Router();

routes.get('/', (req,res) => res.send('Hello World!'));

routes.get('/users', UserController.index)

routes.post('/users', UserController.create)

export default routes;