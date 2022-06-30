import { Tweet } from "../../../domain/entities/Tweet";
import { ITweetsRepository } from "../../repositories/ITweetsRepository";

export class GetAllTweetsQuery {
    private tweetRepository: ITweetsRepository;

    constructor(tweetRepository: ITweetsRepository) {
        this.tweetRepository = tweetRepository;
    }

    public async execute(): Promise <Tweet[]> {
        return this.tweetRepository.all();
    }

}