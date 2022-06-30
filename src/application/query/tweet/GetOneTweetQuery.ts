import { TweetComments } from "../../../domain/entities/TweetComments";
import { ITweetsRepository } from "../../repositories/ITweetsRepository";

export class GetOneTweetQuery {
    private oneTweet: ITweetsRepository;

    constructor(oneTweet: ITweetsRepository) {
        this.oneTweet = oneTweet;
    }

    public async execute(id: string): Promise <TweetComments> {
        return this.oneTweet.one(id);
    }

}