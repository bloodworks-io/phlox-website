import React from "react";

/**
 * Inline icon for use inside doc text. Wraps any react-icons component and
 * applies consistent inline alignment so it sits neatly on the text baseline.
 * react-icons components already use currentColor, so icons adapt to the
 * light/dark theme automatically.
 *
 * Usage in MDX:
 *   import InlineIcon from "@site/src/components/InlineIcon";
 *   import { FaComments } from "react-icons/fa";
 *
 *   <InlineIcon icon={FaComments} label="Ambient mode" />
 */
export default function InlineIcon({ icon: Icon, label, size = "1.05em" }) {
  return (
    <Icon
      size={size}
      role="img"
      aria-label={label}
      style={{
        display: "inline-block",
        verticalAlign: "-0.18em",
        marginRight: "0.35em",
      }}
    />
  );
}
