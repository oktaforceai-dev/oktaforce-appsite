export type AnalyticsPayload = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: string, payload: AnalyticsPayload = {}): void {
  if (typeof window === 'undefined') return;
  const entry = {event, ...payload};
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(entry);
    return;
  }
  window.dispatchEvent(new CustomEvent(event, {detail: entry}));
}
