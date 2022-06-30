import { User } from "../../../domain/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetOneUserQuery {
    private serviceRepository: IUsersRepository;

    constructor(serviceRepository: IUsersRepository) {
        this.serviceRepository = serviceRepository;
    }

    public async execute(id: string): Promise <User> {
        return this.serviceRepository.one(id);
    }

}