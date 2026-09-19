import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import CubeReveal from "../components/ui/CubeReveal";
import TypewriterWord from "../components/ui/TypewriterWord";
import ProjectCard from "../components/ui/ProjectCard";
import StackedProjects from "../components/ui/StackedProjects";
import { portfolio } from "../data/content";


export default function Portfolio() {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section className="portfolio-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-label">Our work</div>
            <h1>Work that <TypewriterWord words={["shipped.", "launched.", "delivered.", "works."]} pauseMs={2600} /></h1>
            <p style={{ marginTop: 20 }}>Structured, executed and delivered. Real projects across AI, campaigns, digital platforms and automation.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* STICKY STACK */}
      <div style={{ position: "relative" }}>
        <div className="wrap">
          {/* Non-sticky heading */}
          <ScrollReveal>
            <div className="port-sticky-header" style={{ position: "static" }}>
              <div className="port-sticky-header-inner">
                <div>
                  <div className="section-label">Case studies</div>
                  <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>Four projects. <em style={{ color: "var(--accent)" }}>Real outcomes.</em></h2>
                </div>
                <Link to="/contact" className="btn btn-dark" style={{ flexShrink: 0 }}>Start a project &rarr;</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Stacked cards */}
          <div style={{ paddingBottom: 120 }}>
            <StackedProjects projects={portfolio} />
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <CubeReveal>
        <section className="cta-strip">
          <div className="wrap">
            <ScrollReveal>
              <h2>Want to be our next<br /><em>case study?</em></h2>
              <p>We are actively looking for organisations ready to build, launch and measure results.</p>
              <Link to="/contact" className="btn btn-accent" style={{ fontSize: 15, padding: "14px 28px" }}>Start a collaboration &rarr;</Link>
            </ScrollReveal>
          </div>
        </section>
      </CubeReveal>
    </main>
  );
}