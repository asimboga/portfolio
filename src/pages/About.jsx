function About() {
    return (
        <>
            <div className="about-bgImg-container">
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
                <div className="about__bio-image">
                    <h2>BIOGRAPHY</h2>
                    <p>
                        A front-end developer with +3 years of IT experience and 1 year of writing code as a front-end developer, <br /> capable of developing complex solutions, creating responsive designs, strong creative thinking skills and high energy. <br /> The ability to create effective algorithms, interact positively and communicate appropriately with team members. <br /> Quickly grasps new technologies and concepts to develop innovative and creative solutions to problems. <br /> Always eager to learn about various technologies, tools and libraries. <br /> Particularly interested in Frontend/Web Development, HTML, CSS, JS, React. Excited to learn and improve new things.
                    </p>
                </div>
            </div>
            <main className="about">
                <div className="about__container">
                    <div className="about__job">
                        <h2 className="text-secondary">2021 - ∞</h2>
                        <h3>CERTIFICATIONS</h3>
                        <p>●	Clarusway ITF Course Certificate      October 2022</p> <br />
                        <p>●	Clarusway Front-End Developer Course Certificate      October 2022</p>
                        <br />
                        <p>●	Clarusway React Developer Course Certificate						         August 2022
                        </p><br />
                        <p>
                            ●	Clarusway HTML & CSS Developer Course Certificate					             June 2022</p><br />
                        <p>
                            ●	Clarusway Javascript Developer Course Certificate					             June 2022</p><br />

                    </div>
                    <div className="about__job">
                        <h2 className="text-secondary">2013 - 2020</h2>
                        <h3>Ministry of National Defense, TR</h3>
                        <h3>Human Resources Positions</h3>
                        <p>●	Planning and management of various projects and activities such as personnel recruitment, staff planning, personnel evaluation were carried out.</p>
                        <br />
                        <p>●	Problems that arise during the realization of various activities and projects or that prevent the functioning of the system have been identified and solutions have been tried to be produced for the benefit of the institution, project and personnel.</p><br />
                        <p>●	Personnel data was stored using various automation systems and Microsoft Office tools and this data was analyzed according to the requirements of the task.</p><br />
                        <p>●	Data were entered into the system using Photoshop.</p><br />
                        <p>●	Supply, installation and management of automation systems used institutionally were carried out.</p><br />
                        <p>●	Various briefings were given for the orientation of the personnel to the software systems used institutionally.</p>
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

export default About;