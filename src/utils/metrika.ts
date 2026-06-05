/* eslint-disable */
declare global {
  interface Window {
    ym?: (id: number, action: string, ...args: any[]) => void;
  }
}

/**
 * Initializes the Yandex.Metrika counter script and initializes the tracking session.
 * @param id The Yandex.Metrika counter ID.
 */
export function initYandexMetrica(id: string | undefined): void {
  if (!id) {
    console.warn("Yandex.Metrika: Counter ID is not provided. Tracking is disabled.");
    return;
  }

  const counterId = parseInt(id, 10);
  if (isNaN(counterId)) {
    console.error(`Yandex.Metrika: Invalid Counter ID "${id}". Must be a number.`);
    return;
  }

  // Only run Metrika script loading and tracking in production mode
  if (!import.meta.env.PROD) {
    console.log(`[Yandex.Metrika Dev] Simulation initialized for counter ${counterId}. Actual script loading skipped.`);
    return;
  }

  // Prevent duplicate script injection and initialization
  if (window.ym) {
    return;
  }

  // Standard Yandex.Metrika loading snippet
  (function (m: any, e: Document, t: string, r: string, i: 'ym', k?: HTMLScriptElement, a?: HTMLScriptElement) {
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
    m[i].l = 1 * (new Date() as any);
    
    // Check if tag.js script is already present on the page
    for (let j = 0; j < e.scripts.length; j++) {
      if (e.scripts[j].src === r) {
        return;
      }
    }

    k = e.createElement(t) as HTMLScriptElement;
    a = e.getElementsByTagName(t)[0] as HTMLScriptElement;
    k.async = true;
    k.src = r;
    if (a && a.parentNode) {
      a.parentNode.insertBefore(k, a);
    }
  })(window, document, "script", `https://mc.yandex.ru/metrika/tag.js?id=${counterId}`, "ym");

  // Initialize the counter with user-specified SPA options
  const ymCall = (window as any).ym;
  if (typeof ymCall === "function") {
    ymCall(counterId, "init", {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: "dataLayer",
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce: true,
      trackLinks: true
    });
  }

  console.log(`Yandex.Metrika: Counter ${counterId} initialized successfully.`);
}

/**
 * Sends a custom goal event to Yandex.Metrika.
 * @param target The target identifier of the goal (defined in Metrika dashboard).
 * @param params Optional custom parameters associated with the goal.
 */
export function reachGoal(target: string, params?: any): void {
  const metricaId = import.meta.env.VITE_YANDEX_METRICA_ID;
  if (!metricaId) return;

  const counterId = parseInt(metricaId, 10);
  if (isNaN(counterId)) return;

  if (!import.meta.env.PROD) {
    console.log(`[Yandex.Metrika Dev] Goal reached: "${target}"`, params);
    return;
  }

  if (window.ym) {
    window.ym(counterId, "reachGoal", target, params);
  }
}

/**
 * Sends a manual page hit (pageview) to Yandex.Metrika.
 * Useful for virtual page view tracking (e.g., when a modal opens, or in custom routing).
 * @param url The custom URL path to track.
 * @param options Optional configuration (referrer, title, etc.).
 */
export function trackHit(url: string, options?: any): void {
  const metricaId = import.meta.env.VITE_YANDEX_METRICA_ID;
  if (!metricaId) return;

  const counterId = parseInt(metricaId, 10);
  if (isNaN(counterId)) return;

  if (!import.meta.env.PROD) {
    console.log(`[Yandex.Metrika Dev] Pageview hit: "${url}"`, options);
    return;
  }

  if (window.ym) {
    window.ym(counterId, "hit", url, options);
  }
}
