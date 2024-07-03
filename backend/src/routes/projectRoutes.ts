import {Router} from "express";
import {projectController} from "../composition-root";

export const projectRoutes: Router = Router({})

projectRoutes.post('/', projectController.createProject.bind(projectController));
projectRoutes.get('/', projectController.getProjects.bind(projectController));
projectRoutes.get('/:id', projectController.getProjectById.bind(projectController));
projectRoutes.put('/:id', projectController.updateProject.bind(projectController));
projectRoutes.delete('/:id', projectController.deleteProject.bind(projectController));
projectRoutes.put('/:projectId/users/:userId', projectController.assignUserToProject.bind(projectController));