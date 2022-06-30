export class Tweet {
    id: String;

    idUser: String;
    content: String;
    likesNum: Number;

    pubDate: String;
    updateDate: String;


    constructor(props: Omit<Tweet, 'id'>, id?: String) {
        Object.assign(this, props)
    }

}