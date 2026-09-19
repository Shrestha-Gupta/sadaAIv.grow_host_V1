import { useEffect, useRef } from "react";
import { observeReveal } from "../../utils/scrollMotion";

/**
 * CubeReveal — 3D subtle card/cube entrance for major sections.
 *
 * Direction-aware:
 *  - Scrolling DOWN: enters from slightly below with subtle 3.5deg rotateX and 36px translateY
 *  - Scrolling UP: enters from slightly above with subtle -3.5deg rotateX and -36px translateY
 *  - Replays smoothly in BOTH directions whenever a section enters the viewport.
 */
export default function CubeReveal({ children, className = "", style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeReveal(el, { delay: 0 });
  }, []);

  const classes = ["cube-reveal", className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}