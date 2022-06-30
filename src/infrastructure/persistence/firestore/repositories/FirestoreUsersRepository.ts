import { db } from "..";
import { IUpdateUserDTO } from "../../../../application/DTO/IUpdateUserDTO";
import { IUsersRepository } from "../../../../application/repositories/IUsersRepository";
import { User } from "../../../../domain/entities/User";

export class FirestoreUsersRepository implements IUsersRepository {
    
    public async all(): Promise <User[]> {
        const usersRef = db.collection('users');
        const usersDoc = await usersRef.get();
        const users = usersDoc.docs.map(doc=>({id: doc.id, ...doc.data()}));

        return users as User[];
    }

    public async one(id: string): Promise <User> {
        const userDoc = await db.collection('users').doc(id).get();
        
        if (userDoc.exists) {
            const thisUser = {id: userDoc.id, ...userDoc.data()};

            return thisUser as User;
        }
    }

    public async save(user: User): Promise <User> {
        const {name, birthDate, email, password, phoneNum, followersNum, followingNum, updateDate} = user;
        const thisUser = {name, birthDate, email, password, phoneNum, followersNum: Number(followersNum), followingNum: Number(followingNum), updateDate};
        const result = await db.collection('users').add(thisUser);
        const userRetorned = {id: result.id, ...thisUser};

        return userRetorned as User;
    }

    public async update(id: string, data: IUpdateUserDTO): Promise <boolean> {
        const user = await db.collection('users').doc(id).get();
        
        if (!user.exists) {
            return false;
        }
        await db.collection('users').doc(id).update(data);
        return true;
    }

    public async delete(id: string): Promise <boolean> {
        const user = await db.collection('users').doc(id).get();
        
        if (!user.exists) {
            return false;
        }
        await db.collection('users').doc(id).delete();
        return true;
    }
    
}