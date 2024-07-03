import {IUser, UserModel} from "../models/user";


export class UserRepo {

    async getUserByEmail(email: string): Promise<IUser | null> {
            return await UserModel.findOne({ 'accountData.email': email });
    }



}