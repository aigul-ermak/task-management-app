import {UserRepo} from "../repositories/userRepo";
import {IUser} from "../models/user";


export class UserService {
    constructor(protected userRepo: UserRepo) {}

    async getUserByEmail(email: string): Promise<IUser | null> {
        return await this.userRepo.getUserByEmail(email);
    }
}