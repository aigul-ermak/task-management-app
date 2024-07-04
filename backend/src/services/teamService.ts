import {TeamRepo} from "../repositories/teamRepo";


export class TeamService {
    constructor(protected teamRepo: TeamRepo) {
    }
}