const Contact = () => {
    return (
        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
            <div className="container contact-grid">
                <div>
                    <p className="eyebrow">Have a question?</p>
                    <h2 id="contact-title">Let&apos;s make<br /><em>something good.</em></h2>
                    <p className="contact-intro">I&apos;m always open to learning from new people and hearing about interesting ideas.</p>
                </div>
                <div className="contact-details">
                    <a className="email-link" href="mailto:wallace.ganda@example.com">wallace.ganda@example.com <span aria-hidden="true">↗</span></a>
                    <div className="social-links">
                        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;