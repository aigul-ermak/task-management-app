import {ProjectRepo} from "../repositories/projectRepo";
import {ProjectType} from "../types/projectType";


export class ProjectService {
    constructor(protected projectRepo: ProjectRepo) {
    }

    async createProject(projectData: ProjectType) {
        return await this.projectRepo.create(projectData);
    }

    async getProjects() {
        return await this.projectRepo.findAll();
    }

    async getProjectById(projectId: string) {
        return await this.projectRepo.findById(projectId);
    }

    async updateProject(projectId: string, projectData: Partial<ProjectType>) {
        return await this.projectRepo.updateById(projectId, projectData);
    }

    async deleteProject(projectId: string) {
        return await this.projectRepo.deleteById(projectId);
    }

}