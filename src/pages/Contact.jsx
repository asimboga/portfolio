function Contact() {
  return (
    <div className="contact-bgImg-container">
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
    </div>
  );
}

export default Contact;