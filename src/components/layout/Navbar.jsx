import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Insights" },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <img src="/sadaAIv Logo_Black.png" alt="sadaAIv.grow" className="navbar-logo-img" />
          </Link>
          <ul className="navbar-links">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={pathname === l.to ? "active" : ""}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-dark navbar-cta" style={{ fontSize: 13, padding: "10px 20px" }}>
            {/* Let us talk */}
            Transform your business
            (Book a strategy call)
          </Link>
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen
                ? <><line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>
                : <><line x1="2" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="2" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="2" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>
              }
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <Link to="/">Home</Link>
        {links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        <Link to="/contact" style={{ color: "var(--accent)" }}>Let us talk</Link>
      </div>
    </>
  );
}