function Home() {
  return (
    <div classNameName="Home">
      <body>
        <div className="bgImg-container">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link nav__link--active">Home</a>
              </li>
              <li className="nav__item">
                <a href="about" className="nav__link">About Me</a>
              </li>
              <li className="nav__item">
                <a href="projects" className="nav__link">My Projects</a>
              </li>
              <li className="nav__item">
                <a href="contact" className="nav__link">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="id">
            <main>
              <h1>Asım <span>BOĞA</span> </h1>
              <h2>Front End Developer</h2>
            </main>
          </div>
          <footer className="horizantal">
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
        </div>
      </body>
    </div>
  );
}

export default Home;