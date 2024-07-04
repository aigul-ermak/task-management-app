import mongoose, {Document, Model, Schema} from 'mongoose';
import {TeamType} from "../types/teamType";

interface ITeam extends TeamType, Document {
}

const teamSchema: Schema = new Schema({
    name: {type: String, required: true},
    project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    createdAt: {type: Date, default: Date.now}
});

export const TeamModel: Model<ITeam> = mongoose.model<ITeam>('Team', teamSchema);
