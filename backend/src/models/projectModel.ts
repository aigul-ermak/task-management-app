import mongoose, {Document, Schema, Model} from 'mongoose';
import {PROJECT_STATUS, ProjectType} from '../types/projectType';

export interface IProject extends ProjectType, Document {
}

const projectSchema: Schema = new mongoose.Schema<IProject>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: Object.values(PROJECT_STATUS),
        default: PROJECT_STATUS.NOT_STARTED,
    },
    assignedUsers: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const ProjectModel: Model<IProject> = mongoose.model<IProject>('Project', projectSchema);
