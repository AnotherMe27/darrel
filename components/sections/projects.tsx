import React from 'react';
import { projects as projectsData } from '../../data/projects';

const Projects = ({ projects = projectsData }: { projects?: typeof projectsData }) => {
    return (
        <section id="projects" className="py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                                <span className="text-gray-500 text-sm">{project.date}</span>
                                <div className="mt-4">
                                    <a href={project.link} className="text-blue-500 hover:underline">View More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;