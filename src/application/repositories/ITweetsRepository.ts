import { Comment } from "../../domain/entities/Comment";
import { Tweet } from "../../domain/entities/Tweet";
import { TweetComments } from "../../domain/entities/TweetComments";
import { IUpdateTweetDTO } from "../DTO/IUpdateTweetDTO";

export interface ITweetsRepository {
    
    all(): Promise <Tweet[]>;
    one(id: string): Promise <TweetComments>;
    save(tweet: Tweet): Promise <Tweet>;

    update(id: string, data: IUpdateTweetDTO): Promise <boolean>;
    delete(id: string): Promise <boolean>;
    comment(id: string, data: Comment): Promise <boolean>;

    like(id: string, data: IUpdateTweetDTO): Promise <boolean>;
}