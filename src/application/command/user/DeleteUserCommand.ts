import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteUserCommand {
    private deleteUserRepository: IUsersRepository;

    constructor(deleteUserRepository: IUsersRepository) {
        this.deleteUserRepository = deleteUserRepository;
    }

    public async execute(id: string): Promise <boolean> {
        return await this.deleteUserRepository.delete(id);
    }

}