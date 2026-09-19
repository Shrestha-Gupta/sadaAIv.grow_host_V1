import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import CubeReveal from "../components/ui/CubeReveal";
import TypewriterWord from "../components/ui/TypewriterWord";
import { team } from "../data/content";
import member1Img from "../assets/I1.jpeg";
import member2Img from "../assets/I2.png";
import member3Img from "../assets/i3-fixed.jpg";

const LINKEDIN = "https://www.linkedin.com/company/sadaaiv-grow";

export default function About() {
  return (
    <main className="page-enter">
      <section className="about-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-label">About us</div>
            {/* FIX 5: Typewriter on one line using nowrap span */}
            <h1>
              Technology +{" "}
              <span style={{ whiteSpace: "nowrap" }}>
                <TypewriterWord words={["People", "Expertise", "Teams"]} pauseMs={2600} />
              </span>
              <br />+ Execution.
            </h1>
            <p>sadaAIv.grow is a technology and execution-focused initiative working at the intersection of AI, automation, digital solutions and campaign management.</p>
          </ScrollReveal>
        </div>
      </section>

      <CubeReveal>
        <section>
          <div className="wrap about-grid">
            <ScrollReveal>
              <div className="section-label">Our story</div>
              <h3 style={{ marginBottom: 24 }}>Built from the gap between strategy and execution.</h3>
              <div className="about-story-body">
                <p>sadaAIv.grow was born out of a simple observation: most organisations have ideas, plans, even strategies -- but they struggle to turn them into something that actually runs. The gap between a plan and a working system is where most things die.</p>
                <p>We started to close that gap. Not as consultants who hand over a deck, but as a team that builds, deploys, and stays accountable to what actually goes live.</p>
              </div>
              <div className="mv-cards">
                <div className="mv-card mission">
                  <h4>Mission</h4>
                  <p>To help organisations turn ideas into structured, technology-enabled execution -- fast, practically and with measurable outcomes.</p>
                </div>
                <div className="mv-card vision">
                  <h4>Vision</h4>
                  <p>A world where execution is never the bottleneck -- where every organisation has the systems and support to bring its best ideas to life.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="section-label">How we are different</div>
              <h3 style={{ marginBottom: 24 }}>We do not just advise. We execute.</h3>
              <div className="differentiators-list">
                {[
                  { title: "Tech-first by default", desc: "Every solution we build has AI and automation as the foundation, not an afterthought." },
                  { title: "Integrated delivery", desc: "Strategy, technology, and campaign execution under one roof -- no handoffs, no gaps." },
                  { title: "Outcome accountability", desc: "We measure success by what goes live and what results it produces, not by deliverables." },
                  { title: "Practical scalability", desc: "We build for the real world -- systems that work with your constraints and grow as you do." },
                ].map((item) => (
                  <div key={item.title} className="diff-item">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </CubeReveal>

      {/* FIX 2: Core values section REMOVED */}

      {/* ── TEAM SECTION ── */}
      <CubeReveal>
        <section style={{ paddingBottom: 112 }}>
          <div className="wrap">
            {/* Header */}
            <ScrollReveal>
              <div className="section-label">The team</div>
              <div className="tl-header">
                <h2>
                  The people behind<br />
                  the <em>execution.</em>
                </h2>
                <p className="tl-header-sub">
                  Three faces lead the work. More than 20 people bring it to life across technology, strategy, design and execution.
                </p>
              </div>
            </ScrollReveal>

            {/* Portrait cards — staggered editorial grid */}
            <div className="tl-grid">
              {[
                {
                  name: "Shivam Rai",
                  role: "Founder & Strategy",
                  desc: "Sets the direction, owns the vision and leads every client engagement from the front.",
                  img: member1Img,
                  linkedin: "https://www.linkedin.com/in/shiva-rai/",
                  index: "01",
                  rotated: false,
                  objPosition: "center 15%",
                },
                {
                  name: "Shrestha Gupta",
                  role: "Full Stack Developer",
                  desc: "Architects and builds the technology systems that make execution possible.",
                  img: member2Img,
                  linkedin: "https://www.linkedin.com/in/shrestha01gupta",
                  index: "02",
                  rotated: false,
                },
                {
                  name: "Alok Kumar",
                  role: "Design Lead",
                  desc: "Shapes how every product, campaign and deliverable is seen and experienced.",
                  img: member3Img,
                  linkedin: "https://www.linkedin.com/in/alok-kumar-6374aa299/",
                  index: "03",
                  rotated: false,
                  objPosition: "center 20%",
                },
              ].map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 100}>
                  <div className="tl-card">
                    <div className="tl-img-wrap">
                      <span className="tl-index">{member.index}</span>
                      <img
                        src={member.img}
                        alt={member.name}
                        style={member.objPosition ? { objectPosition: member.objPosition } : {}}
                      />
                    </div>
                    <div className="tl-info">
                      <div className="tl-name">{member.name}</div>
                      <div className="tl-role">{member.role}</div>
                      <p className="tl-desc">{member.desc}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tl-linkedin"
                      >
                        LinkedIn &rarr;
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* 20+ team statement */}
            <ScrollReveal>
              <div className="tl-wider-team">
                <div className="tl-wider-num">
                  20<em>+</em>
                </div>
                <div className="tl-wider-body">
                  <div className="tl-wider-eyebrow">People behind the work</div>
                  <h3>Beyond the three faces<br />you see here.</h3>
                  <p>
                    A wider team of 20+ people work across technology, strategy, design,
                    content and campaign execution — making sure that what we promise
                    is what gets delivered.
                  </p>
                  <div className="tl-tracks">
                    {["Technology", "Strategy", "Design", "Content", "Campaign Execution", "AI & Automation"].map((t) => (
                      <span key={t} className="tl-track">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </CubeReveal>

      <CubeReveal>
        <section className="cta-strip">
          <div className="wrap">
            <ScrollReveal>
              <h2>Let us build something <em>together.</em></h2>
              <p>Whether it is a technology system, a campaign, or something that spans both -- we are ready.</p>
              <Link to="/contact" className="btn btn-accent" style={{ fontSize: 15, padding: "14px 28px" }}>Start a conversation &rarr;</Link>
            </ScrollReveal>
          </div>
        </section>
      </CubeReveal>
    </main>
  );
}