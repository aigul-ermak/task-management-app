import React, {useState, useEffect} from 'react';
import axios from '@/utils/axios';
import Team from './Team';
import TeamCreate from './TeamCreate';

const TeamList = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const response = await axios.get('/teams');
            setTeams(response.data);
        } catch (error) {
            console.error('Failed to fetch teams:', error);
        }
    };

    const handleTeamCreated = (newTeam) => {
        setTeams([...teams, newTeam]);
    };

    const handleTeamUpdated = (updatedTeam) => {
        setTeams(teams.map(team => (team._id === updatedTeam._id ? updatedTeam : team)));
    };

    const handleTeamDeleted = (teamId) => {
        setTeams(teams.filter(team => team._id !== teamId));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Teams</h1>
            <TeamCreate onTeamCreated={handleTeamCreated}/>
            {teams.map(team => (
                <Team key={team._id} team={team} onUpdate={handleTeamUpdated} onDelete={handleTeamDeleted}/>
            ))}
        </div>
    );
};

export default TeamList;
