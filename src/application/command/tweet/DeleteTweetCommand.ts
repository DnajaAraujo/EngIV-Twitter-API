import { ITweetsRepository } from "../../repositories/ITweetsRepository";

export class DeleteTweetCommand {
    private deleteTweetRepository: ITweetsRepository;

    constructor(deleteTweetRepository: ITweetsRepository) {
        this.deleteTweetRepository = deleteTweetRepository;
    }

    public async execute(id: string): Promise <boolean> {
        return await this.deleteTweetRepository.delete(id);
    }

}