import express from 'express';
import { getUsers } from '../controllers/UserController.js';

const routes = express.Router();

routes.get('/users', getUsers)

export default routes();