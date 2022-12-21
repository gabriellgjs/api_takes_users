import express, { Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import usersRouters from './routes/usersRouter';

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.use(usersRouters);
server.use((req : Request, res : Response)=>res.status(404).json({error: 'Not found page!'}));

server.listen(process.env.PORT);