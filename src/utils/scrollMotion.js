/**
 * Global Scroll Motion Manager
 *
 * Provides a unified, high-performance IntersectionObserver system
 * with scroll-direction detection (DOWN vs UP) and guaranteed replay
 * on every viewport entry.
 */

let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
let scrollDirection = 'down'; // 'down' | 'up'

if (typeof window !== 'undefined') {
  window.addEventListener(
    'scroll',
    () => {
      const current = window.scrollY;
      if (current > lastScrollY + 2) {
        scrollDirection = 'down';
      } else if (current < lastScrollY - 2) {
        scrollDirection = 'up';
      }
      lastScrollY = current;
    },
    { passive: true }
  );
}

export function getScrollDirection() {
  return scrollDirection;
}

const observedElements = new Map();
let globalObserver = null;

function getGlobalObserver() {
  if (globalObserver) return globalObserver;
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;

  globalObserver = new IntersectionObserver(
    (entries) => {
      const vh = window.innerHeight || document.documentElement.clientHeight;

      entries.forEach((entry) => {
        const el = entry.target;
        const config = observedElements.get(el);
        if (!config) return;

        // Entry threshold: triggers when at least 8-12% of element enters viewport
        if (entry.isIntersecting && entry.intersectionRatio >= 0.08) {
          const rect = entry.boundingClientRect;

          // Determine whether entering from below or above:
          // If the top of the element is in the lower portion of the screen, user is scrolling down.
          // If the top is above or near the top, user is scrolling up.
          const fromBottom = rect.top > vh * 0.35 || scrollDirection === 'down';

          el.classList.remove('reveal-from-bottom', 'reveal-from-top');
          el.classList.add(fromBottom ? 'reveal-from-bottom' : 'reveal-from-top');

          if (config.delay) {
            el.style.transitionDelay = `${config.delay}ms`;
          }

          // Trigger smooth entrance
          requestAnimationFrame(() => {
            el.classList.add('is-revealed');
          });
        } else if (!entry.isIntersecting) {
          // COMPLETELY off-screen (0% intersecting):
          // Reset silently off-screen with no transition so it's ready for replay
          el.classList.remove('is-revealed', 'reveal-from-bottom', 'reveal-from-top');
          el.style.transitionDelay = '0ms';
        }
      });
    },
    {
      threshold: [0, 0.12],
      rootMargin: '0px 0px -4% 0px',
    }
  );

  return globalObserver;
}

export function observeReveal(el, config = {}) {
  const observer = getGlobalObserver();
  if (!observer || !el) return () => {};

  observedElements.set(el, config);
  observer.observe(el);

  // Check if element is already in viewport on mount (e.g., hero section)
  if (typeof window !== 'undefined') {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      el.classList.add('reveal-from-bottom');
      if (config.delay) {
        el.style.transitionDelay = `${config.delay}ms`;
      }
      requestAnimationFrame(() => {
        el.classList.add('is-revealed');
      });
    }
  }

  return () => {
    observedElements.delete(el);
    observer.unobserve(el);
  };
}
