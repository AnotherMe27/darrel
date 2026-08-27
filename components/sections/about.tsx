import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">About Sonia Ganda</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img 
                            src="/path/to/profile-image.jpg" 
                            alt="Sonia Ganda" 
                            className="rounded-full w-48 h-48 mx-auto"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-10">
                        <p className="text-lg mb-4">
                            {/* Biography placeholder */}
                            Sonia Ganda is a passionate professional with a diverse background in...
                        </p>
                        <p className="text-lg mb-4">
                            {/* Background placeholder */}
                            With a strong foundation in...
                        </p>
                        <p className="text-lg mb-4">
                            {/* Personality and interests placeholder */}
                            Sonia enjoys...
                        </p>
                        <p className="text-lg mb-4">
                            {/* Goals and vision placeholder */}
                            Her vision is to...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;