import { Request, Response } from 'express';
import { CreateUserCommand } from '../../application/command/user/CreateUserCommand';
import { DeleteUserCommand } from '../../application/command/user/DeleteUserCommand';
import { UpdateUserCommand } from '../../application/command/user/UpdateUserCommand';
import { GetAllUsersQuery } from '../../application/query/user/GetAllUsersQuery';
import { GetOneUserQuery } from '../../application/query/user/GetOneUserQuery';
import { FirestoreUsersRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreUsersRepository';

export class UsersController {
    
    public async getAll(req: Request, res: Response): Promise <Response> {
        const repoUser = new FirestoreUsersRepository();
        const query = new GetAllUsersQuery(repoUser);
        const users = await query.execute();
        
        return res.status(200).json(users);
    }

    public async getOne(req: Request, res: Response): Promise <Response> {
        const {id} = req.params;

        const data = new FirestoreUsersRepository();
        const user = new GetOneUserQuery(data);
        const result = await user.execute(id);

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"});
        }
        return res.status(200).json(result);
    }

    public async createUser(req: Request, res: Response): Promise <Response> {
        const data = new FirestoreUsersRepository();
        const creationUser = new CreateUserCommand(data);
        const user = await creationUser.execute(req.body);

        return res.status(201).json(user);
    }

    public async updateUser(req: Request, res: Response): Promise <Response> {
        const {id} = req.params;

        const data = new FirestoreUsersRepository();
        const updateUser = new UpdateUserCommand(data);
        const result = await updateUser.execute(id, req.body);

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"});
        }
        return res.status(200).json();
    }

    public async deleteUser(req: Request, res: Response): Promise <Response> {
        const {id} = req.params;

        const data = new FirestoreUsersRepository();
        const deleteUser = new DeleteUserCommand(data);
        const result = await deleteUser.execute(id);

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"});
        }
        return res.status(204).json();
    }

}