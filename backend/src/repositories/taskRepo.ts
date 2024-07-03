import {TaskType} from "../types/taskType";
import {TaskModel} from "../models/taskModel";


export class TaskRepo {

    async create(taskData: TaskType) {
        const task = new TaskModel(taskData);
        await task.save();
        return task;
    }

    async findAll() {
        return await TaskModel.find();
    }

    async findById(taskId: string){
        return await TaskModel.findById(taskId);
    }

    async updateById(taskId: string, taskData: Partial<TaskType>){
        return await TaskModel.findByIdAndUpdate(taskId, taskData, { new: true });
    }

    async deleteById(taskId: string)  {
        return await TaskModel.findByIdAndDelete(taskId);
    }
}
