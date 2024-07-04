import React from 'react';
import TeamCreate from '@/components/teams/TeamCreate';

const CreateTeamPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Team</h1>
            <TeamCreate onTeamCreated={() => {}} />
        </div>
    );
};

export default CreateTeamPage;
