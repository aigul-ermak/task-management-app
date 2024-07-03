import {ProjectModel} from "../models/projectModel";
import {ProjectType} from "../types/projectType";


export class ProjectRepo {

    async create(projectData: ProjectType) {
        const project = new ProjectModel(projectData);
        await project.save();
        return project;
    }

    async findAll() {
        return await ProjectModel.find();
    }

    async findById(projectId: string) {
        return await ProjectModel.findById(projectId);
    }

    async updateById(projectId: string, projectData: Partial<ProjectType>) {
        return await ProjectModel.findByIdAndUpdate(projectId, projectData, {new: true});
    }

    async deleteById(projectId: string) {
        return await ProjectModel.findByIdAndDelete(projectId);
    }

    async assignUser(projectId: string, userId: string) {
        return ProjectModel.findByIdAndUpdate(
            projectId,
            {$addToSet: {assignedUsers: userId}},
            {new: true}
        );
    }
}