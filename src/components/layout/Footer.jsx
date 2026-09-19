import { Link } from "react-router-dom";

const LINKEDIN = "https://www.linkedin.com/company/sadaaiv-grow";
const EMAIL = "sadaaiv.grow@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <img src="/sadaAIv Logo_White.png" alt="sadaAIv.grow" className="footer-logo-img" />
            <p className="footer-tagline">
              AI Automation | Digital Solutions | Campaign Management.<br />
              We help organisations turn ideas into structured, technology-enabled reality.
            </p>
            <Link to="/contact" className="btn btn-accent" style={{ fontSize: 13, padding: "10px 22px" }}>
              Start a project
            </Link>
          </div>
          <div style={{ justifySelf: "end" }}>
            <div className="footer-col-title">Pages</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* CONNECT SECTION — temporarily hidden, uncomment to re-enable
          <div>
            <div className="footer-col-title">Connect</div>
            <ul className="footer-links">
              <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com/sadaaiv.grow" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com/sadaaivgrow" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            </ul>
          </div>
          */}
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">&copy; {year} sadaAIv.grow. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}