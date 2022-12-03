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
                    <h2>BIO</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore adipisci, necessitatibus totam, natus
                        excepturi quae dolore laudantium quidem delectus odio obcaecati qui nihil repellat! Iusto sequi ipsam
                        cumque quod qui!
                    </p>
                </div>
            </div>
            <main className="about">
                <div className="about__container">
                    <div className="about__job">
                        <h2 className="text-secondary">2022 - 2023</h2>
                        <h3>Milli Savunma Bakanlığı</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut aspernatur expedita. Ab
                            voluptas aliquid facilis soluta dolor ratione tempora! Temporibus distinctio impedit ea enim dolore
                            voluptatibus unde delectus a.</p>
                    </div>
                    <div className="about__job">
                        <h2 className="text-secondary">2022 - 2023</h2>
                        <h3>Milli Savunma Bakanlığı</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut aspernatur expedita. Ab
                            voluptas aliquid facilis soluta dolor ratione tempora! Temporibus distinctio impedit ea enim dolore
                            voluptatibus unde delectus a.</p>
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

export default About;