import React from 'react';
import TeamList from '@/components/teams/TeamList';
import Header from "@/components/header";
import Footer from "@/components/footer";

const TeamsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <Header/>

            <main className="flex-grow container mx-auto py-8">
                <TeamList/>
            </main>

            <Footer/>

        </div>
    );
};

export default TeamsPage;
