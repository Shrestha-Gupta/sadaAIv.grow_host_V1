import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import CubeReveal from "../components/ui/CubeReveal";
import TypewriterWord from "../components/ui/TypewriterWord";
import { services } from "../data/content";

/* ===== Directional Card Reveal for Services ===== */
function ServiceSlideCard({ children, direction = "left", delay = 0, isStep = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.18) {
          el.style.transitionDelay = `${delay}ms`;
          requestAnimationFrame(() => {
            el.classList.add("is-revealed");
          });
        } else if (!entry.isIntersecting) {
          // Off-screen: silently reset with no transition for replay
          el.classList.remove("is-revealed");
          el.style.transitionDelay = "0ms";
        }
      },
      {
        threshold: [0, 0.2],
        rootMargin: "0px 0px -4% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass = direction === "right" ? "svc-slide-right" : "svc-slide-left";
  const stepClass = isStep ? "svc-step-reveal" : "";

  return (
    <div ref={ref} className={`svc-slide-card ${dirClass} ${stepClass}`}>
      {children}
    </div>
  );
}

/* ===== EXPANDABLE SERVICE ROW ===== */
function ServiceRow({ item, index }) {
  const [open, setOpen] = useState(false);
  const dir = index % 2 === 0 ? "left" : "right";
  const delay = index * 120;

  return (
    <ServiceSlideCard direction={dir} delay={delay}>
      <div
        className="svc-grid-card"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="svc-grid-num">0{index + 1}</div>
        <div className="svc-grid-title">{item.title}</div>
        <div className="svc-grid-quote">"{item.description}"</div>
        <div className="svc-grid-answer">{item.bullets[0]}.</div>
        {open && (
          <div className="svc-grid-extra">
            {item.bullets.slice(1).map((b) => (
              <div key={b} className="svc-grid-bullet">
                <span className="svc-gbullet-dot" />
                {b}
              </div>
            ))}
          </div>
        )}
        <button className="svc-grid-toggle" aria-label="Toggle">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform 0.3s ease" }}>
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </ServiceSlideCard>
  );
}

export default function Services() {
  const allItems = [...services.build, ...services.run];

  return (
    <main className="page-enter">

      {/* ===== HERO (kept as-is) ===== */}
      <section className="services-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-label">Services</div>
            <h1>
              What we{" "}
              <TypewriterWord words={["build", "create", "ship"]} pauseMs={2800} /><br />
              and <TypewriterWord words={["run", "execute", "deliver"]} pauseMs={2600} />.
            </h1>
            <p>Seven service lines across technology and execution -- designed to work individually or as an integrated system built around your goals.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== GRID CARD SECTION ===== */}
      <section className="svc-newgrid-section">
        <div className="wrap">
          <ScrollReveal>
            <div className="svc-newgrid-header">
              <div className="section-label">What we offer</div>
              <h2>The problems we <em>solve.</em></h2>
              <p>Click any card to see all capabilities within that service line.</p>
            </div>
          </ScrollReveal>

          {/* Build cluster */}
          <div className="svc-newgrid-cluster-label">
            <span className="svc-newgrid-cluster-tag svc-tag-build">Build — The Systems</span>
          </div>
          <div className="svc-newgrid-grid">
            {services.build.map((item, i) => (
              <ServiceRow key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Run cluster */}
          <div className="svc-newgrid-cluster-label" style={{ marginTop: 56 }}>
            <span className="svc-newgrid-cluster-tag svc-tag-run">Run — The Execution</span>
          </div>
          <div className="svc-newgrid-grid">
            {services.run.map((item, i) => (
              <ServiceRow key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="svc-process-section">
        <div className="wrap">
          <ScrollReveal>
            <div className="svc-process-header">
              <div className="section-label">How we engage</div>
              <h2>From first call to<br /><em>live system.</em></h2>
            </div>
          </ScrollReveal>
          <div className="svc-process-steps">
            {[
              { num: "01", title: "Discovery", desc: "We understand your goals, existing stack and the gap between where you are and where you need to be." },
              { num: "02", title: "Scope & Plan", desc: "We define the service lines, timeline, team structure and success metrics before any work begins." },
              { num: "03", title: "Build & Execute", desc: "The same team that scoped the work delivers it — no handoffs, no surprises, consistent ownership." },
              { num: "04", title: "Measure & Iterate", desc: "We track outcomes in real time and iterate until the result matches the goal — not just the brief." },
            ].map((step, i) => {
              const dir = i % 2 === 0 ? "left" : "right";
              const delay = i * 100;
              return (
                <ServiceSlideCard key={step.num} direction={dir} delay={delay} isStep>
                  <div className="svc-step">
                    <div className="svc-step-num">{step.num}</div>
                    <div className="svc-step-content">
                      <h4 className="svc-step-title">{step.title}</h4>
                      <p className="svc-step-desc">{step.desc}</p>
                    </div>
                  </div>
                </ServiceSlideCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CubeReveal>
        <section className="cta-strip">
          <div className="wrap">
            <ScrollReveal>
              <div className="section-label" style={{ justifyContent: "center", color: "rgba(255,255,255,0.35)" }}>Get started</div>
              <h2>Ready to <em>get started?</em></h2>
              <p>Tell us which service lines apply to your situation and we will scope a plan for you.</p>
              <Link to="/contact" className="btn btn-accent" style={{ fontSize: 15, padding: "14px 28px" }}>Talk to us →</Link>
            </ScrollReveal>
          </div>
        </section>
      </CubeReveal>

    </main>
  );
}