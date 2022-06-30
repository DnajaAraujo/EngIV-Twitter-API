import { IUpdateTweetDTO } from "../../DTO/IUpdateTweetDTO";
import { ITweetsRepository } from "../../repositories/ITweetsRepository";

export class UpdateTweetCommand {
    private updateTweetRepository: ITweetsRepository;

    constructor(updateTweetRepository: ITweetsRepository) {
        this.updateTweetRepository = updateTweetRepository;
    }

    public async execute(id: string, data: IUpdateTweetDTO): Promise <boolean> {
        return await this.updateTweetRepository.update(id, data);
    }

}