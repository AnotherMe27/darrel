
const Navbar = () => {
    return (
        <nav className="site-nav" aria-label="Main navigation">
            <div className="container nav-inner">
                <a className="brand" href="/">SG<span>.</span></a>
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;