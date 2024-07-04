import {TeamModel} from '../models/teamModel';

export class TeamRepo {
    async createTeam(name: string, project: string, members: string[]) {
        const team = new TeamModel({name, project, members});
        await team.save();
        return team;
    }

    async getTeams() {
        return await TeamModel.find().populate('project members').exec();
    }

    async findTeamById(teamId: string) {
        return await TeamModel.findById(teamId).populate('project members').exec();
    }

    async addMemberToTeam(teamId: string, userId: string) {
        const team = await this.findTeamById(teamId);
        if (!team) throw new Error('Team not found');
        team.members.push(userId);
        await team.save();
        return team;
    }

    async removeMemberFromTeam(teamId: string, userId: string) {
        const team = await this.findTeamById(teamId);
        if (!team) throw new Error('Team not found');
        team.members = team.members.filter(memberId => memberId.toString() !== userId);
        await team.save();
        return team;
    }
}


