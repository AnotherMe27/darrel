import React from 'react';
import AchievementsSection from '../../components/sections/achievements';
import { achievements } from '../../data/achievements';

const AchievementsPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8">Achievements</h1>
            <AchievementsSection achievements={achievements} />
        </div>
    );
};

export default AchievementsPage;