import { Router } from 'express';
import { getAllUsers, getUserById, createUser } from '../controllers/usersController';
const router = Router();

router.get('/users', getAllUsers);
//router.post('/user/?id', insertUser('pedro', 'pedro@gmail.com', '1234'));

router.get('/user/:id', getUserById);

router.post('/user/add', createUser);
export default router;

