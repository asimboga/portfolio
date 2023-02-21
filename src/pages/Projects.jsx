import movie from "../img/movie-app.png"
import Firecontack from "../img/Firecontack-app.png"
import recipe from "../img/recipe-app.png"
import holidays from "../img/holidays-app.png"
import netflix from "../img/netflix.png"


function Projects() {
    return (
        <>
            <div className="projects-bgImg-container">
                <div className="projects__bio-image">
                    <h2>My Projects</h2>
                </div>
            </div>
            <main className="projects">
                <div className="projects__items">
                    <div className="projects__item">
                        <div>
                            <a href="https://movie-app2-asim.netlify.app/" target="_blank"><img src={movie} alt="My Project" /></a>
                        </div>
                        <div className="projects__content">
                            <a href="https://movie-app2-asim.netlify.app/" target="_blank"><h2>Movie App</h2>
                                <p>●In this React project, movies are promoted using the "TMDB API". By using Firebase Authentication, it is aimed to show different data according to the login status of the users. It has a search feature based on the entered word. Tools used: React-router library, Bootstrap, Axios library and Firebase.  </p></a>
                        </div>
                    </div>
                    <div className="projects__item">
                        <div>
                            <a href="https://fire-contact-asim.netlify.app/" target="_blank"> <img src={Firecontack} alt="My Project" /></a>
                        </div>
                        <div className="projects__content">
                            <a href="https://fire-contact-asim.netlify.app/" target="_blank">
                                <h2>Firecontack App</h2>
                                <p>●	In this project, it is aimed to create a contact list using firebase realtime-database. Adding, deleting and updating people can be done. Skills/Tools: Firebase realtime-database, mui library and React-toastify library.  </p>
                            </a>
                        </div>
                    </div>
                    <div className="projects__item">
                        <div>
                            <a href="https://recipe-app-asim.netlify.app/" target="_blank"> <img src={recipe} alt="My Project" /></a>
                        </div>
                        <div className="projects__content">
                            <a href="https://recipe-app-asim.netlify.app/" target="_blank">
                                <h2>Recipe App</h2>
                                <p>●	In this React project, information is provided about various dishes using the "Edamam API". By having the user perform a simple login-logout process, access to restricted areas on the web page has been enabled. It has a search feature based on the entered word. Tools used: React-router library, Styled-components, Axios library. </p>
                            </a>
                        </div>
                    </div>
                    <div className="projects__item">
                        <div>
                            <a href="https://holidays-asim.netlify.app/" target="_blank"> <img src={holidays} alt="My Project" /></a>
                        </div>
                        <div className="projects__content">
                            <a href="https://holidays-asim.netlify.app/" target="_blank">
                                <h2>Holidays App</h2>
                                <p>●	In this React project, using the "Calendarific API", information is given about the holidays in the calendar year. Entered country information and holidays according to the year are given as output. Tools used: React-router library, mui library, Axios library. </p>
                            </a>
                        </div>
                    </div>
                    <div className="projects__item">
                        <div>
                            <a href="https://asimboga.github.io/Netflix/" target="_blank"> <img src={netflix} alt="My Project" /></a>
                        </div>
                        <div className="projects__content">
                            <a href="https://asimboga.github.io/Netflix/" target="_blank">
                                <h2>Netflix</h2>
                                <p>●	In the project, a form page was created using HTML and CSS. According to the fiction, the user is at the stage of registration on the netflix platform and is asked to enter information about himself in the form. After the entered information is sent via the button, it is printed on the screen. </p>
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default Projects;