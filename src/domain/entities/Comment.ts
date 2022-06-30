export class Comment {
    id: String;

    idTweet: String;
    idUser: String;
    content: String;

    likesNum: Number;
    pubDate: String;
    updateDate: String;


    constructor(props: Omit<Comment, 'id'>, id?: String) {
        Object.assign(this, props);
    }
}