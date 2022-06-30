import { Comment } from "../../../domain/entities/Comment";
import { ITweetsRepository } from "../../repositories/ITweetsRepository";

export class CommentTweetCommand {
    private commentTweetRepository: ITweetsRepository;

    constructor(commentTweetRepository: ITweetsRepository) {
        this.commentTweetRepository = commentTweetRepository;
    }

    public async execute(id: string, data: Comment): Promise <boolean> {
        return await this.commentTweetRepository.comment(id, data);
    }

}