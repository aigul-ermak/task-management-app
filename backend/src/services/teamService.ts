import {TeamRepo} from "../repositories/teamRepo";


export class TeamService {
    constructor(protected teamRepo: TeamRepo) {
    }

    async createTeam(name: string, project: string, members: string[]) {
        return await this.teamRepo.createTeam(name, project, members);
    }

    async getTeams() {
        return await this.teamRepo.getTeams();
    }

    async addMemberToTeam(teamId: string, userId: string) {
        return await this.teamRepo.addMemberToTeam(teamId, userId);
    }

    async removeMemberFromTeam(teamId: string, userId: string) {
        return await this.teamRepo.removeMemberFromTeam(teamId, userId);
    }
}