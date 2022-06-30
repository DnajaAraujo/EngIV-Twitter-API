import { IUpdateTweetDTO } from "../../DTO/IUpdateTweetDTO";
import { ITweetsRepository } from "../../repositories/ITweetsRepository";

export class LikeTweetCommand {
    private likeTweetRepository: ITweetsRepository;

    constructor(likeTweetRepository: ITweetsRepository) {
        this.likeTweetRepository = likeTweetRepository;
    }

    public async execute(id: string, data: IUpdateTweetDTO): Promise <boolean> {
        return await this.likeTweetRepository.like(id, data);
    }

}