import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";
function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}
function getServerSnapshot() {
  return false;
}

// Hydration must use the same initial variants as SSR. React reads the browser
// preference immediately after hydration and subscribes to subsequent changes.
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
