function Contact() {
  return (
    <div className="contact-bgImg-container">
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

        <main className="contact">
          <h2>Contact Me</h2>
          <div className="contact__list">
            <div className="contact__item">
              <i className="fas fa-envelope"> Email</i>
              <div className="text-secondary">asimboga@gmail.com</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-mobile-alt"> Phone</i>
              <div className="text-secondary">(+90) 544-327-72-81</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-map-marker-alt"> Address</i>
              <div className="text-secondary">Kepez/Çanakkale</div>
            </div>
          </div>
        </main>

      <footer className="middle">
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
    </div>
  );
}

export default Contact;