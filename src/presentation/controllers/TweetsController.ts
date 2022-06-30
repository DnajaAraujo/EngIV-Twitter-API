import { Request, Response } from 'express'
import { CommentTweetCommand } from '../../application/command/tweet/CommentTweetCommand'
import { CreateTweetCommand } from '../../application/command/tweet/CreateTweetCommand'
import { DeleteTweetCommand } from '../../application/command/tweet/DeleteTweetCommand'
import { UpdateTweetCommand } from '../../application/command/tweet/UpdateTweetCommand'
import { GetOneTweetQuery } from '../../application/query/tweet/GetOneTweetQuery'
import { GetAllTweetsQuery } from '../../application/query/tweet/GetAllTweetsQuery'
import { LikeTweetCommand } from '../../application/command/tweet/LikeTweetCommand'
import { FirestoreTweetsRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreTweetsRepository'

export class TweetsController {
    
    public async getAll(req: Request, res: Response): Promise <Response> {
        const repoTweet = new FirestoreTweetsRepository();
        const query = new GetAllTweetsQuery(repoTweet);
        const tweets = await query.execute();
        
        return res.status(200).json(tweets);
    }

    public async getOne(req: Request, res: Response): Promise <Response> {
        const {id} = req.params;

        const data = new FirestoreTweetsRepository();
        const tweet = new GetOneTweetQuery(data);
        const result = await tweet.execute(id);

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"});
        }
        return res.status(200).json(result);
    }

    public async createTweet(req: Request, res: Response): Promise <Response> {
        const data = new FirestoreTweetsRepository();
        const creationTweet = new CreateTweetCommand(data);
        const tweet = await creationTweet.execute(req.body);

        return res.status(201).json(tweet);
    }

    public async updateTweet(req: Request, res: Response): Promise <Response> {
        const {id} = req.params;

        const data = new FirestoreTweetsRepository();
        const updateTweet = new UpdateTweetCommand(data);
        const result = await updateTweet.execute(id, req.body);

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"});
        }
        return res.status(200).json();
    }

    public async deleteTweet(req: Request, res: Response): Promise <Response> {
        const {id} = req.params;

        const data = new FirestoreTweetsRepository();
        const deleteTweet = new DeleteTweetCommand(data);
        const result = await deleteTweet.execute(id);

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"});
        }
        return res.status(204).json();
    }

    public async commentTweet(req: Request, res: Response): Promise <Response> {
        const {id} = req.params;

        const data = new FirestoreTweetsRepository();
        const commentTweet = new CommentTweetCommand(data);
        const result = await commentTweet.execute(id, req.body);

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"});
        }
        return res.status(200).json();
    }

    public async likeTweet(req: Request, res: Response): Promise <Response> {
        const {id} = req.params;

        const data = new FirestoreTweetsRepository();
        const likeTweet = new LikeTweetCommand(data);
        const result = await likeTweet.execute(id, req.body);

        if (!result) {
            return res.status(404).json({msg: "O id digitado não existe"});
        }
        return res.status(200).json();
    }

}