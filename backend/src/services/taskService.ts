import {UserRepo} from "../repositories/userRepo";
import {TaskRepo} from "../repositories/taskRepo";


export class TaskService {
    constructor(protected taskRepo: TaskRepo) {
    }
}