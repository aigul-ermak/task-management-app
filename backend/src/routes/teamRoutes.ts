import {Router} from "express";
import {teamController, userController} from "../composition-root";

export const teamRoutes: Router = Router({})

teamRoutes.post('/', teamController.createTeam.bind(teamController));
teamRoutes.get('/', teamController.getTeams.bind(teamController));
teamRoutes.put('/:teamId/members/:userId', teamController.addMemberToTeam.bind(teamController));
teamRoutes.delete('/:teamId/members/:userId', teamController.removeMemberFromTeam.bind(teamController));

