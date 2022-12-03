function Projects() {
    return (
        <>
            <div className="projects-bgImg-container">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="about" className="nav__link nav__link--active">About Me</a>
                        </li>
                        <li className="nav__item">
                            <a href="projects" className="nav__link">My Projects</a>
                        </li>
                        <li className="nav__item">
                            <a href="contact" className="nav__link">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="projects__bio-image">
                    <h2>My Projects</h2>
                </div>
            </div>
            <main className="projects">
                <div className="projects__items">
                    <div className="projects__item">
                        <img src="src\img\movie-app.png" alt="My Project" />
                    </div>
                    <div className="projects__item">
                        <img src="src\img\Firecontack-app.png" alt="My Project" />
                    </div>
                    <div className="projects__item">
                        <img src="src\img\recipe-app.png" alt="My Project" />
                    </div>
                    <div className="projects__item">
                        <img src="src\img\holidays-app.png" alt="My Project" />
                    </div>
                    <div className="projects__item">
                        <img src="src\img\netflix.png" alt="My Project" />
                    </div>

                </div>
            </main>
            <footer className="vertical">
                <div className="social-icons">
                    <a href="#">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
                <div className="copyright">&copy; Copyright 2022 : Asım BOĞA</div>
            </footer>
        </>
    );
}

export default Projects;