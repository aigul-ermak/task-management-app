import mongoose, {Document, Model, Schema} from 'mongoose';
import {TASK_STATUS, TaskType} from "../types/taskType";


export interface ITask extends TaskType, Document {
}

const taskSchema: Schema = new mongoose.Schema<ITask>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: Object.values(TASK_STATUS),
        default: TASK_STATUS.PENDING,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const TaskModel: Model<ITask> = mongoose.model<ITask>('Task', taskSchema);


