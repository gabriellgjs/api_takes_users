import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../instaces/mysql';
import { User } from '../entities/User';

export interface UserInstace extends Model {
  id: number,
  name: string,
  email: string,
  passoword: string
}

export const UserSequelize = sequelize.define<UserInstace>('User',{
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  passoword: {
    type: DataTypes.STRING
  }},
  {
    tableName: 'users',
    timestamps: false
  }
);

export const getAll = async () => await UserSequelize.findAll();

export const getById = async (id : string) => await UserSequelize.findAll({
  where: {id}
});

export const createNewUser = async(user: User) =>{
  const insert = UserSequelize.build({
    name: user.name,
    email: user.email,
    passoword: user.passoword
  });
  if(insert.name && insert.email && insert.passoword) {
    await insert.save();
    return;
  }
  return new Error('deu b.o');
};

export const editUser = async(user : UserInstace, userObj : User) => {
    user.name = userObj.name;
    user.email = userObj.email;
    user.passoword = userObj.passoword;
    await user.save();
};

export const delUser = async(user : UserInstace) => await user.destroy();
