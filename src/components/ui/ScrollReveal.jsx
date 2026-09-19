import { useEffect, useRef } from "react";
import { observeReveal } from "../../utils/scrollMotion";

/**
 * ScrollReveal — Direction-aware entrance animation with guaranteed replay on scroll.
 *
 * Props:
 *  - children: React nodes
 *  - delay: delay in milliseconds (e.g. 60, 120)
 *  - className: extra CSS classes
 *  - noTransform: if true, fades opacity only without translation
 *  - is3D: if true, applies subtle 3D card tilt
 *  - style: extra inline styles
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  noTransform = false,
  is3D = false,
  style = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeReveal(el, { delay });
  }, [delay]);

  const classes = [
    is3D ? "cube-reveal" : "scroll-reveal",
    noTransform ? "reveal-fade" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}