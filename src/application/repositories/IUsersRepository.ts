import { User } from "../../domain/entities/User";
import { IUpdateUserDTO } from "../DTO/IUpdateUserDTO";

export interface IUsersRepository {
    
    all(): Promise <User[]>;
    one(id: string): Promise <User>;
    save(user: User): Promise <User>;

    update(id: string, data: IUpdateUserDTO): Promise <boolean>;
    delete(id: string): Promise <boolean>;
}