import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import CubeReveal from "../components/ui/CubeReveal";
import TypewriterWord from "../components/ui/TypewriterWord";
import ProjectCard from "../components/ui/ProjectCard";
import StackedProjects from "../components/ui/StackedProjects";
import { services, portfolio } from "../data/content";
import hppchriImg from "../assets/hppchri-v2.png";

const LINKEDIN = "https://www.linkedin.com/company/sadaaiv-grow";

/* ===== SCROLL-DRIVEN STACKED CARDS ("Work that actually ships.") ===== */
const stackCards = [
  { sector: "AI & Automation", title: "Automate the work that slows your team down and focus on what actually matters.", result: "From idea to running system", tags: ["AI Agents", "Workflows", "Integration"], bg: "#FBE9E4" },
  { sector: "Campaign Execution", title: "Plan, launch and monitor campaigns that reach people and produce measurable outcomes.", result: "End-to-end delivery", tags: ["Strategy", "On-ground", "Data"], bg: "#F2FBCC" },
  { sector: "Digital Platforms", title: "Build the web presence and internal tools your organisation actually needs to run.", result: "Shipped and maintained", tags: ["Web", "Dashboards", "CMS"], bg: "#EEEAFF" },
];

function StackedCards() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId = null;

    const update = () => {
      const rect = track.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height - windowHeight;

      let progress = 0;
      if (totalDist > 0) {
        progress = Math.min(Math.max(-rect.top / totalDist, 0), 1);
      }

      // Determine active card index for dots
      let currentIdx = 0;
      if (progress >= 0.7) currentIdx = 2;
      else if (progress >= 0.3) currentIdx = 1;
      setActiveIndex(currentIdx);

      // Transition 1: Card 0 -> Card 1 (progress 0.08 to 0.46)
      const t1 = Math.min(Math.max((progress - 0.08) / 0.38, 0), 1);
      // Transition 2: Card 1 -> Card 2 (progress 0.54 to 0.92)
      const t2 = Math.min(Math.max((progress - 0.54) / 0.38, 0), 1);

      // Card 0 (AI & Automation)
      if (cardRefs.current[0]) {
        const scale0 = 1 - t1 * 0.04 - t2 * 0.03;
        const y0 = -t1 * 14 - t2 * 12;
        cardRefs.current[0].style.transform = `translate3d(0, ${y0}px, 0) scale(${scale0})`;
        cardRefs.current[0].style.opacity = 1;
        cardRefs.current[0].style.zIndex = 10;
        cardRefs.current[0].style.visibility = "visible";
      }

      // Card 1 (Campaign Execution)
      if (cardRefs.current[1]) {
        if (t1 <= 0) {
          cardRefs.current[1].style.visibility = "hidden";
          cardRefs.current[1].style.opacity = 0;
          cardRefs.current[1].style.pointerEvents = "none";
        } else {
          cardRefs.current[1].style.visibility = "visible";
          cardRefs.current[1].style.pointerEvents = "auto";
          cardRefs.current[1].style.opacity = 1;
          cardRefs.current[1].style.zIndex = 20;
          if (t2 <= 0) {
            const scale1 = 0.96 + t1 * 0.04;
            const y1 = (1 - t1) * 80;
            cardRefs.current[1].style.transform = `translate3d(0, ${y1}px, 0) scale(${scale1})`;
          } else {
            const scale1 = 1 - t2 * 0.04;
            const y1 = -t2 * 14;
            cardRefs.current[1].style.transform = `translate3d(0, ${y1}px, 0) scale(${scale1})`;
          }
        }
      }

      // Card 2 (Digital Platforms)
      if (cardRefs.current[2]) {
        if (t2 <= 0) {
          cardRefs.current[2].style.visibility = "hidden";
          cardRefs.current[2].style.opacity = 0;
          cardRefs.current[2].style.pointerEvents = "none";
        } else {
          cardRefs.current[2].style.visibility = "visible";
          cardRefs.current[2].style.pointerEvents = "auto";
          cardRefs.current[2].style.opacity = 1;
          cardRefs.current[2].style.zIndex = 30;
          const scale2 = 0.96 + t2 * 0.04;
          const y2 = (1 - t2) * 80;
          cardRefs.current[2].style.transform = `translate3d(0, ${y2}px, 0) scale(${scale2})`;
        }
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToProgress = (targetP) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const trackTop = rect.top + scrollTop;
    const totalDistance = rect.height - window.innerHeight;
    window.scrollTo({
      top: trackTop + targetP * totalDistance,
      behavior: "smooth",
    });
  };

  return (
    <section ref={trackRef} className="stacked-section">
      <div className="stacked-sticky-pin">
        <div className="wrap">
          <ScrollReveal>
            <div className="stacked-header">
              <div className="section-label">What we deliver</div>
              <h2>Work that actually <em>ships.</em></h2>
              <p>Three tracks, one integrated team -- technology and execution working together.</p>
            </div>
          </ScrollReveal>

          <div className="stacked-cards-stage">
            {stackCards.map((c, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="project-stack-card"
                style={{
                  background: c.bg,
                }}
              >
                <div className="psc-sector">{c.sector}</div>
                <div className="psc-title">{c.title}</div>
                <div className="psc-result"><span className="psc-result-dot" />{c.result}</div>
                <div className="psc-tags">{c.tags.map((t) => <span key={t} className="psc-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>

          <div className="cards-progress">
            {stackCards.map((_, i) => (
              <span
                key={i}
                className={`cards-progress-dot${activeIndex === i ? " active" : ""}`}
                onClick={() => scrollToProgress(i === 0 ? 0.05 : i === 1 ? 0.50 : 0.95)}
                style={{ cursor: "pointer" }}
                title={`Go to track 0${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const buildRows = services.build.map((s) => ({ title: s.title, items: s.bullets.slice(0, 3) }));
const runRows = services.run.map((s) => ({ title: s.title, items: s.bullets.slice(0, 2) }));



/* ===== HOW WE WORK — Timeline ===== */
const approachItems = [
  { num: "01", tag: "Technology", title: "AI and automation as the foundation.", body: "Every solution we build has AI as the working layer underneath -- not a feature bolted on afterward. We design systems that run themselves wherever possible.", pills: ["AI Agents", "Workflow Automation", "LLM Integration", "Custom APIs"] },
  { num: "02", tag: "People", title: "A team that stays hands-on through delivery.", body: "We plan, build and stay accountable to what actually goes live. No handoffs to implementation partners. The people who design it are the people who ship it.", pills: ["Strategy", "Engineering", "Execution", "Support"] },
  { num: "03", tag: "Execution", title: "Measured by what actually goes live.", body: "We do not measure success by deliverables. We measure it by what runs in the real world and what results it produces. Practical, scalable, outcome-oriented by default.", pills: ["On-ground rollout", "Real-time monitoring", "Iteration", "Outcomes"] },
];

/* ===== METHODOLOGY TIMELINE ===== */
const methodologySteps = [
  {
    num: "01",
    title: "Book a Call",
    body: "Take the first step — schedule a quick call with our team. No commitment, no pressure. Just a conversation to understand if we are the right fit for your goals.",
  },
  {
    num: "02",
    title: "Discovery Discussion",
    body: "We don't give generic suggestions. We sit down with you, understand your business, and identify the specific challenges and opportunities you are facing.",
  },
  {
    num: "03",
    title: "Senior Executive Meeting",
    body: "A senior member of our team takes a deeper look at your business — your requirements, challenges, goals, and where we can create the most impact.",
  },
  {
    num: "04",
    title: "Customised Plan of Action",
    body: "Within 1–2 working days, we deliver a tailored plan outlining the specific steps and solutions we recommend to help your business grow.",
  },
  {
    num: "05",
    title: "Move Forward Together",
    body: "You choose the solutions that are feasible and valuable for you. Our team ensures everything is executed smoothly, efficiently, and on time.",
  },
  {
    num: "06",
    title: "MOU Signing",
    body: "We sign a formal Memorandum of Understanding with you — so that every commitment and promise we make is clearly defined and held to account.",
  },
  {
    num: "07",
    title: "Execution & Growth",
    body: "We put the agreed strategies into action and work alongside you to execute them effectively, driving measurable business growth.",
  },
  {
    num: "08",
    title: "Detailed Growth Updates",
    body: "We provide detailed updates on every aspect of your growth — what has been implemented, what benefits you are receiving, and what progress has been made.",
  },
];

function MethodologyStep({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else setVisible(false);
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="meth-row">
      {/* Left content */}
      <div
        className="meth-content"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0) translateY(0)"
            : isLeft
            ? "translateX(-90px) translateY(10px)"
            : "translateX(0) translateY(0)",
          transition: `opacity 1.2s cubic-bezier(0.22,0.85,0.32,1) 0.05s, transform 1.2s cubic-bezier(0.22,0.85,0.32,1) 0.05s`,
          visibility: isLeft ? "visible" : "hidden",
          textAlign: "right",
        }}
      >
        {isLeft && (
          <>
            <div className="meth-num">{step.num}</div>
            <h3 className="meth-title">{step.title}</h3>
            <p className="meth-body">{step.body}</p>
          </>
        )}
      </div>

      {/* Centre spine */}
      <div className="meth-spine">
        <div
          className="meth-dot"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0)",
            transition: "opacity 0.5s ease 0.3s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s",
          }}
        />
      </div>

      {/* Right content */}
      <div
        className="meth-content"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0) translateY(0)"
            : !isLeft
            ? "translateX(90px) translateY(10px)"
            : "translateX(0) translateY(0)",
          transition: `opacity 1.2s cubic-bezier(0.22,0.85,0.32,1) 0.05s, transform 1.2s cubic-bezier(0.22,0.85,0.32,1) 0.05s`,
          visibility: !isLeft ? "visible" : "hidden",
          textAlign: "left",
        }}
      >
        {!isLeft && (
          <>
            <div className="meth-num">{step.num}</div>
            <h3 className="meth-title">{step.title}</h3>
            <p className="meth-body">{step.body}</p>
          </>
        )}
      </div>
    </div>
  );
}

function MethodologySection() {
  return (
    <CubeReveal>
      <section className="meth-section">
        <div className="wrap">
          <ScrollReveal>
            <div className="meth-header">
              <div className="section-label">Our methodology</div>
              <h2>Our <em>process.</em></h2>
              <p>Eight steps. One clear path from first conversation to measurable growth.</p>
            </div>
          </ScrollReveal>
          <div className="meth-timeline">
            {methodologySteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 60}>
                <MethodologyStep step={step} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </CubeReveal>
  );
}

export default function HomePage() {

  return (
    <main className="page-enter">

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-content">
            <div className="section-label hero-label">AI Automation | Digital Solutions | Campaign Management</div>
            <h1>Turning <TypewriterWord words={["ideas", "visions", "goals", "plans"]} /><br />into structured execution.</h1>
            <p className="hero-sub">We build AI-powered systems, digital platforms and on-ground campaign execution that take an organisation from a plan on paper to something running in the world.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-dark">Start a project</Link>
              <Link to="/services" className="btn btn-outline">See what we do</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><span className="hero-stat-num">70<em>+</em></span><span className="hero-stat-label">Businesses served</span></div>
              <div className="hero-stat-div" />
              <div className="hero-stat"><span className="hero-stat-num">7<em>+</em></span><span className="hero-stat-label">Service lines</span></div>
              <div className="hero-stat-div" />
              <div className="hero-stat"><span className="hero-stat-num"><em>AI</em> first</span><span className="hero-stat-label">Every engagement</span></div>
              <div className="hero-stat-div" />
              <div className="hero-stat"><span className="hero-stat-num">Tech <em>+</em> People</span><span className="hero-stat-label">Integrated execution</span></div>
              <div className="hero-stat-div" />
              <div className="hero-stat"><span className="hero-stat-num"><em>End-to-end</em></span><span className="hero-stat-label">Not just consulting</span></div>
            </div>
            <div className="hero-annotation left">AI + people<br />+ action</div>
            <div className="hero-annotation right">real execution,<br />not just strategy</div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <CubeReveal>
        <section className="capabilities-section">
          <div className="wrap">
            <ScrollReveal>
              <div className="capabilities-header">
                <div className="section-label">What we work on</div>
                <h2>The technology we <em>build</em><br />and the execution we <em>run.</em></h2>
              </div>
            </ScrollReveal>
            {[{ label: "Build -- The Systems", rows: buildRows }, { label: "Run -- The Execution", rows: runRows }].map((cluster) => (
              <div key={cluster.label} className="cap-cluster">
                <div className="cap-cluster-label"><h3>{cluster.label}</h3></div>
                {cluster.rows.map((row, i) => (
                  <ScrollReveal key={row.title} delay={i * 120} noTransform>
                    <div className="cap-row">
                      <div className="cap-row-title">{row.title}</div>
                      <div className="cap-row-items">{row.items.join(" · ")}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ))}
          </div>
        </section>
      </CubeReveal>

      {/* STACKED CARDS — Scroll-driven stacked cards */}
      <StackedCards />

      {/* HOW WE WORK */}
      <CubeReveal>
        <section>
          <div className="wrap approach-redesign">
            <ScrollReveal>
              <div className="approach-redesign-header">
                <div className="section-label">How we work</div>
                <h2>Three things held <em style={{ color: "var(--accent)" }}>together.</em></h2>
                <p style={{ color: "var(--ink-2)", fontSize: 17, marginTop: 16, maxWidth: "44ch" }}>Not three separate departments. Technology, people and execution as one integrated offering.</p>
              </div>
            </ScrollReveal>
            <div className="approach-timeline">
              {approachItems.map((item, i) => (
                <ScrollReveal key={item.num} delay={i * 120}>
                  <div className="approach-timeline-item">
                    <div className="approach-timeline-left">
                      <div className="approach-timeline-dot" />
                      <div className="approach-tl-num">{item.num}</div>
                    </div>
                    <div className="approach-timeline-right">
                      <div className="approach-tl-tag">{item.tag}</div>
                      <div className="approach-tl-title">{item.title}</div>
                      <p className="approach-tl-body">{item.body}</p>
                      <div className="approach-tl-pills">{item.pills.map((pill) => <span key={pill} className="approach-tl-pill">{pill}</span>)}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            {/* CTA button at bottom of How we work */}
            <ScrollReveal>
              <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <Link to="/contact" className="btn btn-accent" style={{ fontSize: 15, padding: "14px 28px" }}>Book a call &rarr;</Link>
                <Link to="/services" style={{ fontSize: 14, color: "var(--accent)", fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                  See our services &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </CubeReveal>

      {/* RECENT WORK — Portfolio-style sticky stacking */}
      <CubeReveal>
        <div>
          <div className="wrap">
            <div style={{ paddingTop: 96, paddingBottom: 48 }}>
              <ScrollReveal>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
                  <div>
                    <div className="section-label">Recent work</div>
                    <h2>Projects that went <em style={{ color: "var(--accent)" }}>live.</em></h2>
                  </div>
                  <Link to="/portfolio" className="btn btn-outline">View all work &rarr;</Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="wrap">
            <div style={{ paddingBottom: 80 }}>
              <StackedProjects projects={portfolio.slice(0, 3)} />
            </div>
          </div>
        </div>
      </CubeReveal>

      {/* METHODOLOGY SECTION */}
      <MethodologySection />

      {/* CTA */}
      <CubeReveal>
        <section className="cta-strip" style={{ marginBottom: 0, paddingBottom: 112 }}>
          <div className="wrap">
            <ScrollReveal>
              <div className="section-label" style={{ justifyContent: "center", color: "rgba(255,255,255,0.35)" }}>Get started</div>
              <h2>Have an idea?<br /><em>Let us talk.</em></h2>
              <p>Tell us what you are trying to get done. We will come back with how we would structure and execute it.</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
                <Link to="/contact" className="btn btn-accent" style={{ fontSize: 15, padding: "14px 28px" }}>Start a conversation &rarr;</Link>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: 15, padding: "14px 28px", borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)" }}>LinkedIn &rarr;</a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </CubeReveal>
    </main>
  );
}