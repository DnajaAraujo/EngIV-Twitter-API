import { User } from "../../../domain/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetAllUsersQuery {
    private serviceRepository: IUsersRepository;

    constructor(serviceRepository: IUsersRepository) {
        this.serviceRepository = serviceRepository;
    }

    public async execute(): Promise <User[]> {
        return this.serviceRepository.all();
    }

}