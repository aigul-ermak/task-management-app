import {Router} from "express";
import {taskController} from "../composition-root";

export const taskRoutes: Router = Router({})

taskRoutes.post('/', taskController.createTask.bind(taskController));
taskRoutes.get('/', taskController.getTasks.bind(taskController));
taskRoutes.get('/:id', taskController.getTaskById.bind(taskController));
taskRoutes.put('/:id', taskController.updateTask.bind(taskController));
taskRoutes.delete('/:id', taskController.deleteTask.bind(taskController));