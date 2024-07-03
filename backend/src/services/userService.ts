import {UserRepo} from "../repositories/userRepo";
import {IUser} from "../models/user";


export class UserService {
    constructor(protected userRepo: UserRepo) {}

    async getUserByEmail(email: string) {
        return await this.userRepo.getUserByEmail(email);
    }

    async getUsers() {
        return await this.userRepo.getUsers();
    }

    async getUser(id: string) {
        return await this.userRepo.getUser(id);
    }


}