import { Link } from "react-router-dom";
import hppchriImg from "../../assets/hppchri-v2.png";

/**
 * Utility to parse outcome text and highlight numeric metrics in brand orange.
 * Matches patterns like 800+, 10K+, 13+, 300, 3,400+, #1, etc.
 */
export function renderMetricText(text) {
  if (!text) return null;
  // Regex to split on numbers with optional # prefix and optional K/k/M/B/+ suffixes
  const parts = text.split(/(#?\d[\d,]*(?:[KkMB])?\+?)/g);
  return parts.map((part, i) => {
    if (/^(#?\d[\d,]*(?:[KkMB])?\+?)$/.test(part)) {
      return (
        <span key={i} style={{ color: "var(--accent)", fontWeight: 700 }}>
          {part}
        </span>
      );
    }
    return part;
  });
}

const cardPalettes = [
  { bg: "linear-gradient(135deg, #E0F7F4 0%, #B2EBE8 100%)", accent: "#0B6E6B" },
  { bg: "linear-gradient(135deg, #FFF6EA 0%, #FDE4CD 100%)", accent: "#C85D0A" },
  { bg: "linear-gradient(135deg, #F4FACC 0%, #E2F29A 100%)", accent: "#5A6D00" },
  { bg: "linear-gradient(135deg, #EBF4FD 0%, #D1E5FC 100%)", accent: "#1A5FA8" },
];

export default function ProjectCard({ proj, index, totalCards = 1 }) {
  const isFirst = proj.id === 1 || index === 0;
  const pal = cardPalettes[index % cardPalettes.length];
  const isLast = index >= totalCards - 1;

  // Outcome numbers for HPPCHRI
  const hppchriMetrics = [
    { num: "800+", label: "Schools & Institutes Reached" },
    { num: "10K+", label: "Registrations" },
    { num: "13+", label: "Districts Reached" },
    { num: "End-to-End", label: "UP CM Event Management" },
  ];

  // Natural scroll-chaining: when panel reaches bottom/top, continued scroll flows to main window
  const handleInfoWheel = (e) => {
    const el = e.currentTarget;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight + 1) return;

    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;

    const atBottom = scrollTop + clientHeight >= scrollHeight - 2;
    const atTop = scrollTop <= 2;

    if ((isScrollingDown && atBottom) || (isScrollingUp && atTop)) {
      window.scrollBy({ top: e.deltaY, behavior: "auto" });
    }
  };

  return (
    <div
      className="port-card-sticky"
      style={{
        zIndex: index + 1,
        marginBottom: isLast ? 0 : "75vh",
      }}
    >
      <div className="port-card-full">
        {/* LEFT: Unified Browser Window & Visual Preview */}
        <div className="port-card-media-col" style={{ background: pal.bg }}>
          <div className="port-browser-window">
            {/* Browser Chrome Bar */}
            <div className="port-browser-chrome">
              <div className="port-browser-dots">
                <span style={{ background: "#FF5F57" }} />
                <span style={{ background: "#FEBC2E" }} />
                <span style={{ background: "#28C840" }} />
              </div>
              <div className="port-browser-address">
                {isFirst
                  ? "hppchri-campaign.vercel.app"
                  : `sadaaiv.grow/work/${proj.id}`}
              </div>
            </div>

            {/* Browser Content */}
            <div className="port-browser-body">
              {isFirst && hppchriImg ? (
                <div className="port-screenshot-wrap">
                  <img
                    src={hppchriImg}
                    alt={proj.title}
                    className="port-screenshot-img"
                  />
                </div>
              ) : (
                <div className="port-editorial-mockup">
                  {/* Clean Mockup UI matching project palette */}
                  <div className="port-mockup-canvas">
                    <div className="port-mockup-header">
                      <div
                        style={{
                          width: 60,
                          height: 8,
                          background: pal.accent,
                          borderRadius: 4,
                          opacity: 0.85,
                        }}
                      />
                      <div style={{ display: "flex", gap: 8 }}>
                        {[36, 44, 40].map((w, j) => (
                          <div
                            key={j}
                            style={{
                              width: w,
                              height: 6,
                              background: "rgba(26,25,22,0.12)",
                              borderRadius: 3,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="port-mockup-card">
                      <div
                        style={{
                          width: "75%",
                          height: 12,
                          background: pal.accent,
                          borderRadius: 4,
                          marginBottom: 10,
                          opacity: 0.75,
                        }}
                      />
                      <div
                        style={{
                          width: "90%",
                          height: 7,
                          background: "rgba(26,25,22,0.1)",
                          borderRadius: 3,
                          marginBottom: 6,
                        }}
                      />
                      <div
                        style={{
                          width: "60%",
                          height: 7,
                          background: "rgba(26,25,22,0.07)",
                          borderRadius: 3,
                          marginBottom: 14,
                        }}
                      />
                      <div style={{ display: "flex", gap: 8 }}>
                        <div
                          style={{
                            flex: 1,
                            height: 26,
                            background: pal.accent,
                            borderRadius: 6,
                            opacity: 0.85,
                          }}
                        />
                        <div
                          style={{
                            flex: 1,
                            height: 26,
                            background: "rgba(26,25,22,0.08)",
                            borderRadius: 6,
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: 8,
                      }}
                    >
                      {["01", "02", "03"].map((s, i) => (
                        <div
                          key={i}
                          style={{
                            background: "rgba(255,255,255,0.7)",
                            borderRadius: 8,
                            padding: "10px 8px",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Playfair Display, serif",
                              fontSize: 14,
                              fontWeight: 700,
                              color: pal.accent,
                            }}
                          >
                            {s}
                          </span>
                          <div
                            style={{
                              width: "50%",
                              height: 4,
                              background: "rgba(26,25,22,0.08)",
                              borderRadius: 2,
                              margin: "4px auto 0",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: Structured Editorial Project Information */}
        <div className="port-card-info" onWheel={handleInfoWheel}>
          {/* Sector label */}
          <div className="port-sector-label">{proj.sector}</div>

          {/* Tags */}
          <div className="port-tags">
            {proj.tags.map((t, ti) => (
              <span
                key={t}
                className={`port-tag${
                  proj.tagColors && proj.tagColors[ti] === "accent"
                    ? " accent"
                    : proj.tagColors && proj.tagColors[ti] === "lime"
                    ? " lime"
                    : ""
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="port-title">{proj.title}</h3>

          {/* Description */}
          <p className="port-desc">{proj.description}</p>

          {/* Key Outcome Result Pill with Green Dot and ORANGE Numbers */}
          {proj.result && (
            <div className="port-result-pill">
              <span className="port-result-dot" />
              <span>{renderMetricText(proj.result)}</span>
            </div>
          )}

          {/* Bullets (if provided) */}
          {proj.bullets && proj.bullets.length > 0 && (
            <ul className="port-bullets">
              {proj.bullets.map((b) => (
                <li key={b} className="port-bullet-item">
                  <span className="port-bullet-check">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1.5 4L3.5 6L6.5 2"
                        stroke="var(--accent)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{renderMetricText(b)}</span>
                </li>
              ))}
            </ul>
          )}

          {/* HPPCHRI Special Inauguration and Metric Highlight Badges */}
          {isFirst && (
            <div className="port-inauguration-block">
              <div className="port-inauguration-badge">
                <span className="port-inauguration-star">★</span>
                <div>
                  <strong>TO BE INAUGURATED BY</strong>
                  <br />
                  Hon&apos;ble Chief Minister of Uttar Pradesh
                  <br />
                  <span className="port-inauguration-name">
                    Shri Yogi Adityanath Ji
                  </span>
                </div>
              </div>

              {/* Metric Outcome Badges with ORANGE Numbers */}
              <div className="port-metrics-grid">
                {hppchriMetrics.map((s) => (
                  <div key={s.label} className="port-metric-pill">
                    <span className="port-metric-num">{s.num}</span>
                    <span className="port-metric-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live site CTA */}
          {proj.liveUrl && (
            <div className="port-cta-row">
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: 13, padding: "8px 20px" }}
              >
                View live site &rarr;
              </a>
            </div>
          )}

          {/* Card Footer: Index & Contact CTA */}
          <div className="port-card-bottom-row">
            <span className="port-card-index">0{index + 1}</span>
            <Link to="/contact" className="port-card-discuss">
              Discuss this project &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
