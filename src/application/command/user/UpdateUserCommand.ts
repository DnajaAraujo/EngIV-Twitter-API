import { IUpdateUserDTO } from "../../DTO/IUpdateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class UpdateUserCommand {
    private updateUserRepository: IUsersRepository;

    constructor(updateUserRepository: IUsersRepository) {
        this.updateUserRepository = updateUserRepository;
    }

    public async execute(id: string, data: IUpdateUserDTO): Promise <boolean> {
        return await this.updateUserRepository.update(id, data);
    }

}