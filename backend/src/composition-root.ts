import {UserRepo} from "./repositories/userRepo";
import {UserService} from "./services/userService";
import {UserController} from "./controllers/userController";
import {TaskRepo} from "./repositories/taskRepo";
import {TaskService} from "./services/taskService";
import {TaskController} from "./controllers/taskController";


const userRepo = new UserRepo();
const taskRepo = new TaskRepo();

const userService = new UserService(userRepo);
const taskService = new TaskService(userRepo);
export const userController = new UserController(userService);
export const taskController = new TaskController(taskService);