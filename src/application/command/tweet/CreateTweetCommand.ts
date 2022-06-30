import { ICreateTweetDTO } from "../../DTO/ICreateTweetDTO";
import { ITweetsRepository } from "../../repositories/ITweetsRepository";
import { Tweet } from "../../../domain/entities/Tweet";

export class CreateTweetCommand {
    private createTweetRepository: ITweetsRepository;

    constructor(createTweetRepository: ITweetsRepository) {
        this.createTweetRepository = createTweetRepository;
    }

    public async execute(data: ICreateTweetDTO): Promise <Tweet> {
        const tweet = new Tweet(data);
        return await this.createTweetRepository.save(tweet);
    }

}