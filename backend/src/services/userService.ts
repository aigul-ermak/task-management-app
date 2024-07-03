import {UserRepo} from "../repositories/userRepo";


export class UserService {

    constructor(protected userRepo: UserRepo) {}
}