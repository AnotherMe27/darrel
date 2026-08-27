import React from 'react';
import ProjectsSection from '../../components/sections/projects';
import { projects } from '../../data/projects';

const ProjectsPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-8">Projects</h1>
            <ProjectsSection projects={projects} />
        </div>
    );
};

export default ProjectsPage;