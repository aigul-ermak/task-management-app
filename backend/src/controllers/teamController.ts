import {TaskService} from "../services/taskService";
import {UserService} from "../services/userService";
import {TeamService} from "../services/teamService";

export class TeamController {
    constructor(protected teamService: TeamService, protected userService: UserService) {
    }
}