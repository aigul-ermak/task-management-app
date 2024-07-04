import {Request, Response} from "express";
import {ProjectService} from "../services/projectService";
import {ProjectType} from "../types/projectType";

export class ProjectController {
    constructor(protected projectService: ProjectService) {
    }


    async createProject(req: Request, res: Response): Promise<void> {
        try {
            const projectData = req.body as ProjectType;
            const project = await this.projectService.createProject(projectData);
            res.status(201).json(project);
        } catch (error) {
            res.status(500);
        }
    }

    async getProjects(req: Request, res: Response): Promise<void> {
        try {
            const projects = await this.projectService.getProjects();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500);
        }
    }

    async getProjectById(req: Request, res: Response): Promise<void> {
        try {
            const project = await this.projectService.getProjectById(req.params.id);
            if (!project) {
                res.status(404).json({message: 'Project not found'});
                return;
            }
            res.status(200).json(project);
        } catch (error) {
            res.status(500);
        }
    }

    async updateProject(req: Request, res: Response): Promise<void> {
        try {
            const projectData = req.body as Partial<ProjectType>;
            const project = await this.projectService.updateProject(req.params.id, projectData);
            if (!project) {
                res.status(404).json({message: 'Project not found'});
                return;
            }
            res.status(200).json(project);
        } catch (error) {
            res.status(500);
        }
    }

    async deleteProject(req: Request, res: Response): Promise<void> {
        try {
            const project = await this.projectService.deleteProject(req.params.id);
            if (!project) {
                res.status(404).json({message: 'Project not found'});
                return;
            }
            res.status(200).json({message: 'Project deleted successfully'});
        } catch (error) {
            res.status(500);
        }
    }
}