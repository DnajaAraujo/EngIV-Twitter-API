export class User {
    id: String;

    name: String
    birthDate: String;
    email: String;

    password: String;
    phoneNum: String;
    followersNum: Number;

    followingNum: Number;
    updateDate: String;


    constructor(props: Omit<User, 'id'>, id?: String) {
        Object.assign(this, props);
    }
}