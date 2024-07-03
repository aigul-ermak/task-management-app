import {TaskService} from "../services/taskService";
import {Request, Response} from "express";
import {TaskType} from "../types/taskType";
import jwt from "jsonwebtoken";
import {sendEmail} from "../services/mailerService";


const getUserEmailFromToken = (req: Request): string | null => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return null;

    const token = authHeader.split(' ')[1];
    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
        return decoded.email;
    } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
    }
};
export class TaskController {
    constructor(protected taskService: TaskService) {
    }

    async createTask(req: Request, res: Response) {
        try {
            const taskData = req.body as TaskType;
            const task = await this.taskService.createTask(taskData);
            res.status(201).json(task);
        } catch (error) {
            res.status(500);
        }
    }


    async getTasks(req: Request, res: Response): Promise<void> {
        try {
            const tasks = await this.taskService.getTasks();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500);
        }
    };


    async getTaskById(req: Request, res: Response): Promise<void> {
        try {
            const task = await this.taskService.getTaskById(req.params.id);
            if (!task) {
                res.status(404).json({message: 'Task not found'});
                return;
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(500);
        }
    };

    async updateTask(req: Request, res: Response): Promise<void> {
        try {
            const taskData = req.body as Partial<TaskType>;
            const task = await this.taskService.updateTask(req.params.id, taskData);
            if (!task) {
                res.status(404).json({message: 'Task not found'});
                return;
            }
            const userEmail = getUserEmailFromToken(req);
            if (userEmail) {
                // Send email notification
                await sendEmail(
                    userEmail,
                    'Task Updated',
                    `The task has been updated.`,
                    `<p>The task has been updated.</p>`
                );
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(500);
        }
    };

    async deleteTask(req: Request, res: Response): Promise<void> {
        try {
            const task = await this.taskService.deleteTask(req.params.id);
            if (!task) {
                res.status(404).json({message: 'Task not found'});
                return;
            }
            res.status(200).json({message: 'Task deleted successfully'});
        } catch (error) {
            res.status(500);
        }
    };

}