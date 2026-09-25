const Hero: React.FC = () => {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="container hero-grid">
                <div className="hero-copy">
                    <p className="eyebrow">Personal portfolio / 2026</p>
                    <h1 id="hero-title">Sonia <em>Ganda</em></h1>
                    <p className="hero-tagline">Aspiring web developer building thoughtful, useful digital experiences.</p>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#about">Discover my story <span aria-hidden="true">↓</span></a>
                        <a className="button button-text" href="#contact">Let&apos;s connect <span aria-hidden="true">↗</span></a>
                    </div>
                </div>
                <div className="hero-portrait">
                    <div className="portrait-frame">
                        <img src="/images/pro2.jpeg" alt="Sonia Ganda smiling outdoors" />
                    </div>
                    <p className="portrait-note">Curious mind<br />constant learner</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;