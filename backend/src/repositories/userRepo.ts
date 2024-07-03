import {IUser, UserModel} from "../models/user";


export class UserRepo {

    async getUserByEmail(email: string): Promise<IUser | null> {
            return await UserModel.findOne({ 'accountData.email': email });
    }

    async getUsers(): Promise<IUser[]> {
        return await UserModel.find();
    }

    async getUser(id: string): Promise<IUser | null> {
        return await UserModel.findById(id);
    }

}