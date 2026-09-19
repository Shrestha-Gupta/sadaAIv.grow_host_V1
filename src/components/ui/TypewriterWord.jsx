import { useState, useEffect } from "react";

export default function TypewriterWord({ words, speed = 110, pauseMs = 2400, color = "var(--accent)" }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const word = words[wordIdx];
    let t;
    if (phase === "typing") {
      if (displayed.length < word.length) {
        t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), speed);
      } else {
        t = setTimeout(() => setPhase("pause"), pauseMs);
      }
    } else if (phase === "pause") {
      t = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), speed / 2);
      } else {
        t = setTimeout(() => { setWordIdx((p) => (p + 1) % words.length); setPhase("typing"); }, 250);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, phase, wordIdx, words, speed, pauseMs]);

  return (
    <em style={{ color, fontStyle: "italic", position: "relative", display: "inline-block", minWidth: "1ch" }}>
      {displayed || "\u00A0"}
      <span style={{
        display: "inline-block", width: 2.5, height: "0.72em", background: color,
        verticalAlign: "middle", marginLeft: 2, borderRadius: 2,
        animation: "cursor-blink 1s steps(1) infinite",
      }} />
    </em>
  );
}