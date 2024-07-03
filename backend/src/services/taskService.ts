import {UserRepo} from "../repositories/userRepo";
import {TaskRepo} from "../repositories/taskRepo";
import {TaskType} from "../types/taskType";


export class TaskService {
    constructor(protected taskRepo: TaskRepo) {
    }

    async createTask(taskData: TaskType) {
        return await this.taskRepo.create(taskData);
    }

    async getTasks() {
        return await this.taskRepo.findAll();
    }

    async getTaskById(taskId: string) {
        return await this.taskRepo.findById(taskId);
    }

    async updateTask(taskId: string, taskData: Partial<TaskType>) {
        return await this.taskRepo.updateById(taskId, taskData);
    }

    async deleteTask(taskId: string) {
        return await this.taskRepo.deleteById(taskId);
    }
}