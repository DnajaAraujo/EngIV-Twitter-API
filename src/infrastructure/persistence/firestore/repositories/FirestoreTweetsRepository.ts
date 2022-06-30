import { db } from "..";
import { IUpdateTweetDTO } from "../../../../application/DTO/IUpdateTweetDTO";
import { ITweetsRepository } from "../../../../application/repositories/ITweetsRepository";
import { Comment } from "../../../../domain/entities/Comment";
import { Tweet } from "../../../../domain/entities/Tweet";
import { TweetComments } from "../../../../domain/entities/TweetComments";

export class FirestoreTweetsRepository implements ITweetsRepository {
    
    public async all(): Promise <Tweet[]> {
        const tweetsRef = db.collection('tweets');
        const tweetsDoc = await tweetsRef.get();
        const thisTweets = tweetsDoc.docs.map(doc=>({id: doc.id, ...doc.data()}));

        return thisTweets as Tweet[];
    }

    public async one(id: string): Promise <TweetComments> {
        const tweetDoc = await db.collection('tweets').doc(id).get();
        
        if (tweetDoc.exists) {
            const commentDoc = await db.collection('comments').where('idTweet', '==', id).get();
            const comments = commentDoc.docs.map(doc=>({data: doc.data().content}));
            const thisTweet = {id: tweetDoc.id, ...tweetDoc.data(), comments: comments};

            return thisTweet as TweetComments;
        }
    }

    public async save(tweet: Tweet): Promise <Tweet> {
        const {idUser, content, likesNum, pubDate, updateDate} = tweet;
        const thisTweet = {idUser, content, likesNum: Number(likesNum), pubDate, updateDate};
        const result = await db.collection('tweets').add(thisTweet);
        const tweetRetorned = {id: result.id, ...thisTweet};

        return tweetRetorned as Tweet;
    }

    public async update(id: string, data: IUpdateTweetDTO): Promise <boolean> {
        const tweet = await db.collection('tweets').doc(id).get();
        
        if (!tweet.exists) {
            return false;
        }
        await db.collection('tweets').doc(id).update(data);
        return true;
    }

    public async delete(id: string): Promise <boolean> {
        const tweet = await db.collection('tweets').doc(id).get();
        
        if (!tweet.exists) {
            return false;
        }
        await db.collection('tweets').doc(id).delete();
        return true;
    }

    public  async comment(id: string, data: Comment): Promise <boolean> {
        const tweet = await db.collection('tweets').doc(id).get();

        if (!tweet.exists) {
            return false;
        } else {
            const idTweet = id;
            const content = data;
            
            const comment = {idTweet, content};
            await db.collection('comments').add(comment);
            
            return true;
        }        
    }

    public async like(id: string, data: IUpdateTweetDTO): Promise <boolean> {
        const tweet = await db.collection('tweets').doc(id).get();
        
        if (!tweet.exists) {
            return false;
        }
        const numLikes: number = data.likesNum;
        const num = numLikes + 1;

        const dataTemp = { likesNum: num }
        
        await db.collection('tweets').doc(id).update(dataTemp);
        return true;
    }

    
    
}