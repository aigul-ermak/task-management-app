import {UserRepo} from "./repositories/userRepo";
import {UserService} from "./services/userService";
import {UserController} from "./controllers/userController";


const userRepo = new UserRepo();

const userService = new UserService(userRepo);

export const userController = new UserController(userService);