import {UserService} from "../services/userService";

export class UserController  {

    constructor(protected userService: UserService) {}
}