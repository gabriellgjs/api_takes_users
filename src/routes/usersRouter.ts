import { Router } from 'express';
import { getAllUsers, getUserById, createUser, uptadeUser, deleteUser} from '../controllers/usersController';
const router = Router();

router.get('/users', getAllUsers);

router.get('/user/:id', getUserById);

router.post('/user/add', createUser);

router.put('/user/:id', uptadeUser);

router.delete('/user/:id', deleteUser);

export default router;

