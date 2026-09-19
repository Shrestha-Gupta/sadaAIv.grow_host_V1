import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";
import TypewriterWord from "../components/ui/TypewriterWord";
const hppchriImg = "/image/1.jpeg";
const bikanervalaImg = "/image/2.jpeg";
const wakhraImg = "/image/3.jpeg";
const seeCityImg = "/image/4.jpeg";

// ─── Real Client Stories Data ───────────────────────────────────────────────────
const editorialStories = [
  {
    num: "01",
    theme: "ed-theme-dark",
    eyebrow: "FEATURED CLIENT STORY  ·  HEALTHCARE / NGO",
    client: "HPPC HRI",
    clientSub: "Hanuman Prasad Poddar Cancer Hospital & Research Institute",
    image: hppchriImg,
    imageAlt: "HPPCHRI Yuva Sanchar Cancer Awareness Campaign Platform",
    imageCaption: "hppchri-campaign.vercel.app · Yuva Sanchar Campaign Platform",
    quote:
      "I had been carrying the idea of a large-scale cancer awareness drive for almost a year, but we simply couldn't get it off the ground on our own. When we connected with the sadaAIv.grow team and shared our vision, they took it seriously from day one.",
    author: "Rasendu Fogla",
    role: "Joint Secretary, Hanuman Prasad Poddar Cancer Hospital & Research Institute (HPPCHRI)",
    workItems: ["Campaign Strategy", "Communication", "Digital Execution", "Portal Engineering"],
    metrics: [
      { num: "800+", label: "Schools & institutes reached" },
      { num: "10K+", label: "Student registrations" },
      { num: "13+", label: "Districts of Eastern UP" },
    ],
    direction: "image-left",
  },
  {
    num: "02",
    theme: "ed-theme-light",
    eyebrow: "CLIENT STORY  ·  F&B / RESTAURANT",
    client: "Bikanervala Gorakhpur",
    clientSub: "Flagship Outlet & Organic Community Growth",
    image: bikanervalaImg,
    imageAlt: "Bikanervala Gorakhpur Festive and Weekend Offer Campaign Creative",
    imageCaption: "Bikanervala Gorakhpur · Festival & Weekend Campaign Creative",
    quote:
      "Before working with sadaAIv.grow, our social media was mostly just another place where we posted about the brand. They helped us understand how to actually connect with customers in Gorakhpur. The festival and weekend campaigns have made a real difference — people now look forward to the offers and engage with us much more. It feels like we've built a local community around the outlet, not just a social media page.",
    author: "Outlet Leadership",
    role: "Franchise Owner, Bikanervala Gorakhpur",
    workItems: ["Social Media Growth", "Local Brand Connect", "Content Strategy", "Offer Calendars"],
    metrics: [
      { num: "3,400+", label: "Organic followers (from <300)" },
      { num: "Weekly", label: "Festival & weekend campaigns" },
      { num: "Local", label: "Direct Gorakhpur customer connect" },
    ],
    direction: "text-left",
  },
  {
    num: "03",
    theme: "ed-theme-dark",
    eyebrow: "CLIENT STORY  ·  F&B / RESTAURANT",
    client: "Wakhra Swaad",
    clientSub: "Authentic North Indian Cuisine, Noida Sector 11",
    image: wakhraImg,
    imageAlt: "Wakhra Swaad Restaurant Website Revamp and Curated Digital Menu",
    imageCaption: "wakhraswaad.in/noida · Digital Menu & Table Reservation Portal",
    quote:
      "We knew the food was good, but something wasn't working when it came to getting people to come in and spend. sadaAIv.grow helped us look at the problem from the customer's point of view instead of just guessing. They took feedback seriously, worked on our menu pricing, and improved the website as well. Since then, we've seen much steadier footfall, and the revenue has become more consistent. That change has been very noticeable for us.",
    author: "Restaurant Ownership",
    role: "Founder & Owner, Wakhra Swaad Noida",
    workItems: ["Website Revamp", "Menu Optimisation", "Digital Solutions", "User Feedback Analysis"],
    metrics: [
      { num: "Steady", label: "Professional dining footfall" },
      { num: "Predictable", label: "Weekly revenue & volume" },
      { num: "Aligned", label: "Customer-first menu pricing" },
    ],
    direction: "image-left",
  },
  {
    num: "04",
    theme: "ed-theme-light",
    eyebrow: "CLIENT STORY  ·  TRAVEL & TOURISM",
    client: "See City Destination",
    clientSub: "Varanasi Tours & Travels",
    image: seeCityImg,
    imageAlt: "See City Destination Tours & Travels Varanasi Web Portal and SEO",
    imageCaption: "seecitytoursvaranasi.com · Varanasi Heritage Travel Platform",
    quote:
      "Earlier, even when people were searching for travel services in Varanasi, our name simply wasn't visible. sadaAIv.grow worked on our SEO and helped us get to the top for important searches, which changed the number of people finding us online. What we also appreciated was that they didn't treat the customer relationship as finished after the trip. They helped us maintain a proper client database and stay in touch, and that has brought us some very valuable repeat and referral business.",
    author: "Management Team",
    role: "Managing Director, See City Destination Tours & Travels",
    workItems: ["Search Engine Optimisation (SEO)", "Client Database Management", "Digital Outreach"],
    metrics: [
      { num: "#1 on Google", label: "For key Varanasi travel searches" },
      { num: "Repeat CRM", label: "Structured client database system" },
      { num: "Organic", label: "Direct inquiry & referral pipeline" },
    ],
    direction: "text-left",
  },
];

// ─── Individual Editorial Story Section ────────────────────────────────────────
function EditorialStorySection({ story }) {
  return (
    <section className={`ed-review-section ${story.theme}`} id={`story-${story.num}`}>
      <div className="wrap">
        <ScrollReveal>
          {/* Header Row */}
          <div className="ed-story-header">
            <div className="ed-story-meta-left">
              <div className="ed-story-eyebrow">
                <span className="ed-caption-dot" />
                {story.eyebrow}
              </div>
              <h3 className="ed-story-client-title">{story.client}</h3>
              <div className="ed-story-client-sub">{story.clientSub}</div>
            </div>
            <div className="ed-story-num">{story.num}</div>
          </div>

          {/* Thin Divider */}
          <div className="ed-divider" />

          {/* Two-Column Review Grid */}
          <div className="ed-review-grid">

            {/* ── LEFT COLUMN: Image + What We Worked On ── */}
            <div className="ed-review-left">
              {/* Portrait Image */}
              <div className="ed-image-container">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="ed-image"
                  loading="lazy"
                />
              </div>
              <div className="ed-image-caption">
                <span className="ed-caption-dot" />
                {story.imageCaption}
              </div>

              {/* What We Worked On — directly below image */}
              <div className="ed-worked-on-block">
                <div className="ed-block-label">What we worked on</div>
                <ul className="ed-work-items-list">
                  {story.workItems.map((item) => (
                    <li key={item} className="ed-work-item">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Review + Attribution + Outcome ── */}
            <div className="ed-review-right">
              {/* Full Client Review */}
              <blockquote className="ed-quote">
                &ldquo;{story.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="ed-attribution">
                <div className="ed-author-name">{story.author}</div>
                <div className="ed-author-role">{story.role}</div>
              </div>

              {/* Sub Divider */}
              <div className="ed-sub-divider" />

              {/* Project Outcome */}
              <div className="ed-outcome-block">
                <div className="ed-block-label">Project Outcome</div>
                <div className="ed-metrics-row">
                  {story.metrics.map((m) => (
                    <div key={m.num} className="ed-metric-col">
                      <div className="ed-metric-num">{m.num}</div>
                      <div className="ed-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


// ─── Main Insights / Reviews Page ─────────────────────────────────────────────
export default function Blog() {
  return (
    <main className="page-enter ed-page">
      {/* ========================================================
          INSIGHTS HERO — 100% UNCHANGED
          ======================================================== */}
      <section className="blog-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-label">Insights</div>
            <h1>
              From the{" "}
              <TypewriterWord
                words={["field.", "trenches.", "frontlines."]}
                pauseMs={2800}
              />
            </h1>
            <p
              style={{
                color: "var(--ink-2)",
                fontSize: 17,
                marginTop: 16,
                maxWidth: "46ch",
              }}
            >
              Thinking, frameworks and lessons from building real technology and
              running real campaigns.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          CLIENT STORIES INTRO
          ======================================================== */}
      <section className="ed-intro-section">
        <div className="wrap">
          <ScrollReveal>
            <div className="ed-intro-header">
              <div className="section-label">Client Stories</div>
              <h2>
                Real work. <br />
                Real people. <br />
                <em>Real stories.</em>
              </h2>
              <p>
                See what happened when ideas moved from planning to execution —
                through the words of the people we built with.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          EDITORIAL CLIENT STORIES SECTIONS
          ======================================================== */}
      {editorialStories.map((story) => (
        <EditorialStorySection key={story.num} story={story} />
      ))}

      {/* ========================================================
          FINAL EDITORIAL CLOSING CTA
          ======================================================== */}
      <section className="ed-cta-section">
        <div className="wrap">
          <ScrollReveal>
            <div className="ed-cta-inner">
              <div className="ed-cta-eyebrow">Next Story</div>
              <h2>
                Your next project <br />
                could be <em>the next story.</em>
              </h2>
              <p>
                Have something important to build, launch or execute? Let's talk.
              </p>
              <Link
                to="/contact"
                className="btn btn-accent"
                style={{ fontSize: 15, padding: "14px 30px" }}
              >
                Start a project &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}