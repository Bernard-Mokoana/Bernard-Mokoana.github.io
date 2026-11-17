
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <a className="footer-brand" href="#hero">
            <span className="footer-brand-mark">BM.</span>
            <span>The Curious Mind</span>
          </a>

          <p className="footer-tagline">
            Curious by nature. Engineered by intention.
          </p>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <a href="#hero">Home</a>
          <a href="#work">Projects</a>
          <a href="#skills">Technical universe</a>
          <a href="#approach">My approach</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          <a
            href="https://github.com/Bernard-Mokoana"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bernard-mokoana-680519228/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          <a href="#hero" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Bernard Mokoana. All rights reserved.</p>
        <span>Designed with curiosity. Built with purpose.</span>
      </div>
    </footer>
  );
};

export default Footer;
