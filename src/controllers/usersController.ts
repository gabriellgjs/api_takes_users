import { Request, Response } from 'express';
import { getAll, getById, createNewUser }  from '../models/usersModel';
import { User} from '../entities/User';

export const getAllUsers = async (_req : Request, res : Response) =>{
  const users = await getAll();
  return res.status(200).json({users});
};

export const getUserById = async (req: Request, res  : Response) => {
  const { id } = req.params;

  const user = await getById(id);
  return res.status(200).json(user);
  
};

export const createUser = async (req: Request, res  : Response) => {
  const {name, email, passoword} = req.body;
  const user= User.factoryUser(name, email, passoword);
  const created = await createNewUser(user);
  return res.status(200).json(created);
};


