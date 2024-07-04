import {Request, Response} from "express";
import {UserService} from "../services/userService";
import {TeamService} from "../services/teamService";

export class TeamController {
    constructor(protected teamService: TeamService, protected userService: UserService) {
    }

    async createTeam(req: Request, res: Response) {
        const {name, project, members} = req.body;
        try {
            const team = await this.teamService.createTeam(name, project, members);
            res.status(201).json(team);
        } catch (error) {
            res.status(500);
        }
    }

    async getTeams(req: Request, res: Response) {
        try {
            const teams = await this.teamService.getTeams();
            res.status(200).json(teams);
        } catch (error) {
            res.status(500);
        }
    }

    async addMemberToTeam(req: Request, res: Response) {
        const {teamId, userId} = req.params;
        try {
            const team = await this.teamService.addMemberToTeam(teamId, userId);
            res.status(200).json(team);
        } catch (error) {
            res.status(500);
        }
    }

    async removeMemberFromTeam(req: Request, res: Response) {
        const {teamId, userId} = req.params;
        try {
            const team = await this.teamService.removeMemberFromTeam(teamId, userId);
            res.status(200).json(team);
        } catch (error) {
            res.status(500);
        }
    }
}