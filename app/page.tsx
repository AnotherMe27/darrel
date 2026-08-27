import React from 'react';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Achievements from '../components/sections/achievements';
import Gallery from '../components/sections/gallery';
import Contact from '../components/sections/contact';

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Gallery />
            <Contact />
        </>
    );
};

export default HomePage;