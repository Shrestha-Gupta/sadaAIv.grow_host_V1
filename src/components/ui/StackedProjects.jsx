import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import hppchriImg from "../../assets/hppchri-v2.png";
import { renderMetricText } from "./ProjectCard";

const cardPalettes = [
  { bg: "linear-gradient(135deg, #E0F7F4 0%, #B2EBE8 100%)", accent: "#0B6E6B" },
  { bg: "linear-gradient(135deg, #FFF6EA 0%, #FDE4CD 100%)", accent: "#C85D0A" },
  { bg: "linear-gradient(135deg, #F4FACC 0%, #E2F29A 100%)", accent: "#5A6D00" },
  { bg: "linear-gradient(135deg, #EBF4FD 0%, #D1E5FC 100%)", accent: "#1A5FA8" },
];

export default function StackedProjects({ projects = [] }) {
  const [activeCard, setActiveCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const infoRefs = useRef([]);
  const stageRef = useRef(null);
  const touchStartY = useRef(0);
  const total = projects.length;

  const hppchriMetrics = [
    { num: "800+", label: "Schools & Institutes Reached" },
    { num: "10K+", label: "Registrations" },
    { num: "13+", label: "Districts Reached" },
    { num: "End-to-End", label: "UP CM Event Management" },
  ];

  const goToCard = useCallback(
    (index) => {
      if (index < 0 || index >= total || index === activeCard || isAnimating) return;
      setIsAnimating(true);
      setActiveCard(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 820);
    },
    [activeCard, isAnimating, total]
  );

  const handleWheel = useCallback(
    (e) => {
      // Check if desktop layout (stage is active)
      if (window.innerWidth <= 900) return;

      if (isAnimating) {
        e.preventDefault();
        return;
      }

      const currInfo = infoRefs.current[activeCard];
      const isScrollable =
        currInfo && currInfo.scrollHeight > currInfo.clientHeight + 4;

      if (e.deltaY > 0) {
        // Scrolling DOWN
        const atBottom =
          !isScrollable ||
          currInfo.scrollTop + currInfo.clientHeight >= currInfo.scrollHeight - 6;

        if (atBottom) {
          if (activeCard < total - 1) {
            e.preventDefault();
            goToCard(activeCard + 1);
          }
          // If on last card and at bottom, let normal page scroll continue down
        } else {
          // If cursor is on the stage but outside info panel, forward scroll into info panel
          if (!currInfo.contains(e.target)) {
            currInfo.scrollTop += e.deltaY * 0.85;
            e.preventDefault();
          }
        }
      } else if (e.deltaY < 0) {
        // Scrolling UP
        const atTop = !isScrollable || currInfo.scrollTop <= 6;

        if (atTop) {
          if (activeCard > 0) {
            e.preventDefault();
            goToCard(activeCard - 1);
          }
          // If on first card and at top, let normal page scroll continue up
        } else {
          // If cursor is on stage but outside info panel, forward scroll into info panel
          if (!currInfo.contains(e.target)) {
            currInfo.scrollTop += e.deltaY * 0.85;
            e.preventDefault();
          }
        }
      }
    },
    [activeCard, isAnimating, total, goToCard]
  );

  const handleTouchStart = (e) => {
    if (window.innerWidth <= 900) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (window.innerWidth <= 900 || isAnimating) return;
    const deltaY = touchStartY.current - e.touches[0].clientY;
    if (Math.abs(deltaY) < 35) return;

    const currInfo = infoRefs.current[activeCard];
    const isScrollable =
      currInfo && currInfo.scrollHeight > currInfo.clientHeight + 4;

    if (deltaY > 0) {
      // Swiping UP (scrolling DOWN)
      const atBottom =
        !isScrollable ||
        currInfo.scrollTop + currInfo.clientHeight >= currInfo.scrollHeight - 6;
      if (atBottom && activeCard < total - 1) {
        goToCard(activeCard + 1);
        touchStartY.current = e.touches[0].clientY;
      }
    } else {
      // Swiping DOWN (scrolling UP)
      const atTop = !isScrollable || currInfo.scrollTop <= 6;
      if (atTop && activeCard > 0) {
        goToCard(activeCard - 1);
        touchStartY.current = e.touches[0].clientY;
      }
    }
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    // Attach passive: false wheel listener so we can preventDefault when transitioning cards
    stage.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      stage.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <div className="stacked-projects-container">
      {/* Editorial stack progress indicator */}
      <div className="stacked-projects-nav">
        <div className="stacked-nav-count">
          <em>0{activeCard + 1}</em> / 0{total}
        </div>
        <div className="stacked-nav-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`stacked-nav-dot${i === activeCard ? " active" : ""}`}
              onClick={() => goToCard(i)}
              aria-label={`View project ${i + 1}`}
            />
          ))}
        </div>
        <div className="stacked-nav-hint">
          <span>Scroll to advance</span>
          <span>↓</span>
        </div>
      </div>

      {/* Viewing stage containing the stacked project cards */}
      <div
        ref={stageRef}
        className="stacked-projects-stage"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {projects.map((proj, index) => {
          const isFirst = proj.id === 1 || index === 0;
          const pal = cardPalettes[index % cardPalettes.length];
          const isPast = index < activeCard;
          const isActive = index === activeCard;
          const isFuture = index > activeCard;

          let cardClass = "stacked-project-card";
          if (isPast) cardClass += " card-past";
          else if (isActive) cardClass += " card-active";
          else if (isFuture) cardClass += " card-future";

          return (
            <div
              key={proj.id || index}
              className={cardClass}
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="port-card-full">
                {/* LEFT: Unified Browser Window & Visual Preview */}
                <div
                  className="port-card-media-col"
                  style={{ background: pal.bg }}
                >
                  <div className="port-browser-window">
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
                                  width: "70%",
                                  height: 10,
                                  background: pal.accent,
                                  borderRadius: 4,
                                  marginBottom: 10,
                                  opacity: 0.8,
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
                                    height: 24,
                                    background: pal.accent,
                                    borderRadius: 6,
                                    opacity: 0.85,
                                  }}
                                />
                                <div
                                  style={{
                                    flex: 1,
                                    height: 24,
                                    background: "rgba(26,25,22,0.07)",
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
                <div
                  className="port-card-info"
                  ref={(el) => (infoRefs.current[index] = el)}
                >
                  <div className="port-sector-label">{proj.sector}</div>

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

                  <h3 className="port-title">{proj.title}</h3>

                  <p className="port-desc">{proj.description}</p>

                  {proj.result && (
                    <div className="port-result-pill">
                      <span className="port-result-dot" />
                      <span>{renderMetricText(proj.result)}</span>
                    </div>
                  )}

                  {proj.bullets && proj.bullets.length > 0 && (
                    <ul className="port-bullets">
                      {proj.bullets.map((b) => (
                        <li key={b} className="port-bullet-item">
                          <span className="port-bullet-check">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
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
        })}
      </div>
    </div>
  );
}
