import React, { useState, useEffect } from 'react';
import axios from '@/utils/axios';
import Team from '@/components/teams/Team';
import { useRouter } from 'next/router';

const EditTeamPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [team, setTeam] = useState(null);

    useEffect(() => {
        if (id) {
            fetchTeam();
        }
    }, [id]);

    const fetchTeam = async () => {
        try {
            const response = await axios.get(`/teams/${id}`);
            setTeam(response.data);
        } catch (error) {
            console.error('Failed to fetch team:', error);
        }
    };

    const handleTeamUpdated = (updatedTeam) => {
        setTeam(updatedTeam);
    };

    const handleTeamDeleted = (teamId) => {
        router.push('/teams');
    };

    return (
        <div className="container mx-auto p-4">
            {team ? (
                <Team team={team} onUpdate={handleTeamUpdated} onDelete={handleTeamDeleted} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditTeamPage;
