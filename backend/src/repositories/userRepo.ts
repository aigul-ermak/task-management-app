import {IUser, UserModel} from "../models/user";


export class UserRepo {

    async getUserByEmail(email: string) {
            return await UserModel.findOne({ 'accountData.email': email });
    }

    async getUsers() {
        return await UserModel.find();
    }

    async getUser(id: string) {
        return await UserModel.findById(id);
    }

}