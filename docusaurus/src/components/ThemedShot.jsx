import React from "react";

/**
 * Theme-aware screenshot. Renders both light and dark variants; CSS in
 * custom.css hides whichever doesn't match the active docs theme
 * (html[data-theme]). No JS hook, so it works at first paint and switches
 * instantly with the theme toggle. Both <img>s live inside .theme-doc-markdown,
 * so the global border-radius rule applies automatically.
 *
 * Usage in MDX:
 *   import ThemedShot from "@site/src/components/ThemedShot";
 *   import heroLight from "@site/static/img/hero-dashboard-light.png";
 *   import heroDark  from "@site/static/img/hero-dashboard-dark.png";
 *
 *   <ThemedShot light={heroLight} dark={heroDark} alt="Agent Dashboard" width={720} />
 */
export default function ThemedShot({ light, dark, alt, width = 500 }) {
  return (
    <p className="themed-shot" style={{ textAlign: "center", margin: "1.5em 0" }}>
      <img src={light} alt={alt} width={width} className="themed-shot-light" />
      <img src={dark} alt={alt} width={width} className="themed-shot-dark" />
    </p>
  );
}
