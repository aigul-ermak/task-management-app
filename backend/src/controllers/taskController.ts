import {TaskService} from "../services/taskService";


export class TaskController  {
    constructor(protected taskService: TaskService) {}
}