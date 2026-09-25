const About = () => {
    return (
        <section id="about" className="section about-section" aria-labelledby="about-title">
            <div className="container about-grid">
                <div>
                    <p className="eyebrow">A little about me</p>
                    <h2 id="about-title">Learning by<br /><em>making.</em></h2>
                </div>
                <div className="about-copy">
                    <p className="lead">I&apos;m Sonia, a computing student who enjoys turning ideas into clear and welcoming web pages.</p>
                    <p>I am developing my skills in HTML, CSS, JavaScript, and responsive design. I care about the small details that make a site feel easy to use, from readable structure to thoughtful visual hierarchy.</p>
                    <p>Outside class, I enjoy creative problem-solving, exploring new technology, and working on projects that help me grow one practical step at a time.</p>
                    <div className="interest-list" aria-label="Areas of interest">
                        <span>Web development</span><span>Creative design</span><span>Continuous learning</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;