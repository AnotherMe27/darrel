import React from 'react';
import { achievements as achievementsData } from '../../data/achievements';

const Achievements = ({ achievements = achievementsData }: { achievements?: typeof achievementsData }) => {
    return (
        <section className="achievements-section py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievementsData.map((achievement) => (
                        <div key={achievement.title} className="achievement-card p-4 border rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">{achievement.title}</h3>
                            <p className="text-gray-600">{achievement.description}</p>
                            <span className="text-sm text-gray-500">{achievement.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;