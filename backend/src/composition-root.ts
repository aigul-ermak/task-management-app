import {UserRepo} from "./repositories/userRepo";
import {UserService} from "./services/userService";
import {UserController} from "./controllers/userController";
import {TaskRepo} from "./repositories/taskRepo";
import {TaskService} from "./services/taskService";
import {TaskController} from "./controllers/taskController";
import {ProjectRepo} from "./repositories/projectRepo";
import {ProjectService} from "./services/projectService";
import {ProjectController} from "./controllers/projectController";


const userRepo = new UserRepo();
const taskRepo = new TaskRepo();
const projectRepo = new ProjectRepo();

const userService = new UserService(userRepo);
const taskService = new TaskService(taskRepo);
const projectService = new ProjectService(projectRepo);
export const userController = new UserController(userService);
export const taskController = new TaskController(taskService);
export const projectController = new ProjectController(projectService);