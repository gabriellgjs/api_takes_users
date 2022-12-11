import { Router } from 'express';
import { getAllUsers, getUserById, createUser } from '../controllers/usersController';
const router = Router();

router.get('/users', getAllUsers);

router.get('/user/:id', getUserById);

router.post('/user/add', createUser);

export default router;

