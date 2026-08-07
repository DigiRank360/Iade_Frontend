/** Tiny classnames merge helper — avoids pulling in a dependency for it. */
export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}
