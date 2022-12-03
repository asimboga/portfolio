import movie from "../img/movie-app.png"
import Firecontack from "../img/Firecontack-app.png"
import recipe from "../img/recipe-app.png"
import holidays from "../img/holidays-app.png"
import netflix from "../img/netflix.png"


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
                            <a href="about" className="nav__link">About Me</a>
                        </li>
                        <li className="nav__item">
                            <a href="projects" className="nav__link nav__link--active">My Projects</a>
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
                        <a href="https://movie-app2-asim.netlify.app/" target="_blank"><img src={movie} alt="My Project" /></a> 
                    </div>
                    <div className="projects__item">
                        <img src={Firecontack} alt="My Project" />
                    </div>
                    <div className="projects__item">
                        <img src={recipe} alt="My Project" />
                    </div>
                    <div className="projects__item">
                        <img src={holidays} alt="My Project" />
                    </div>
                    <div className="projects__item">
                        <img src={netflix} alt="My Project" />
                    </div>

                </div>
            </main>
            <footer className="vertical">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/asimboga/">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/asimboga">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
                <div className="copyright">&copy; Copyright 2022 : Asım BOĞA</div>
            </footer>
        </>
    );
}

export default Projects;