import { ICreateUserDTO } from "../../DTO/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../../domain/entities/User";

export class CreateUserCommand {
    private createUserRepository: IUsersRepository;

    constructor(createUserRepository: IUsersRepository) {
        this.createUserRepository = createUserRepository;
    }

    public async execute(data: ICreateUserDTO): Promise <User> {
        const user = new User(data);
        return await this.createUserRepository.save(user);
    }

}