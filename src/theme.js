import { extendTheme } from "@chakra-ui/react";

const colors = {
  light: {
    base: "#eff1f5", // Latte Base
    secondary: "#e6e9ef", // Slightly darker Base
    textPrimary: "#4c4f69", // Latte Text
    textSecondary: "#6c6f85", // Latte Subtext0
    textTeriary: "#fe640b", // Latte Peach
    invertedText: "#e6e9ef", // Light text for buttons
    primaryButton: "#179299", // Latte Teal
    secondaryButton: "#df8e1d", // Orange
    dangerButton: "#d20f39", // Latte Red
    successButton: "#40a02b", // Latte Green
    neutralButton: "#7287fd", // Latte Lavender
    tertiaryButton: "#dd7878", // Latte Flamingo
  },
  dark: {
    base: "#24273a", // Macchiato Base
    secondary: "#1e2030", // Macchiato Mantle
    deep: "#181926", // Macchiato Crust — dark-first sections
    textPrimary: "#cad3f5", // Macchiato Text
    textSecondary: "#a5adcb", // Macchiato Subtext0
    textTeriary: "#f5a97f", // Machiatto Peach
    invertedText: "#24273a", // Dark text for buttons
    primaryButton: "#8aadf4", // Macchiato Blue
    secondaryButton: "#eed49f", // Yellow
    dangerButton: "#ed8796", // Macchiato Red
    successButton: "#a6da95", // Macchiato Green
    neutralButton: "#b7bdf8", // Macchiato Lavender
    tertiaryButton: "#f5bde6", // Macchiato Pink
  },
};

const fonts = {
  heading: `'Space Grotesk', sans-serif`,
  body: `'Open Sans', sans-serif`,
};

// Aurora blobs used by the dark-first hero (and subtle accents elsewhere)
const aurora = {
  // Warm brand orange
  orange:
    "radial-gradient(circle at center, rgba(255, 140, 66, 0.55) 0%, rgba(255, 107, 53, 0.25) 35%, transparent 70%)",
  // Cool counterpoint
  blue: "radial-gradient(circle at center, rgba(138, 173, 244, 0.45) 0%, rgba(114, 135, 253, 0.2) 40%, transparent 70%)",
  // Soft teal fill
  teal: "radial-gradient(circle at center, rgba(23, 146, 153, 0.4) 0%, rgba(23, 146, 153, 0.15) 40%, transparent 70%)",
};

// Dot-grid texture overlay for dark sections
const textures = {
  dotGridDark:
    "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
  dotGridLight:
    "radial-gradient(circle, rgba(36,39,58,0.06) 1px, transparent 1px)",
};

// Glassmorphism surfaces
const glass = {
  dark: {
    bg: "rgba(255, 255, 255, 0.04)",
    border: "rgba(255, 255, 255, 0.09)",
    hoverBorder: "rgba(245, 169, 127, 0.45)",
  },
  light: {
    bg: "rgba(255, 255, 255, 0.55)",
    border: "rgba(36, 39, 58, 0.08)",
    hoverBorder: "rgba(254, 100, 11, 0.4)",
  },
};

// Gradients for text accents and glows
const gradients = {
  accentText:
    "linear-gradient(90deg, #f5a97f 0%, #ff8c42 50%, #ed8796 100%)",
  sectionAccent: {
    light: "linear-gradient(180deg, transparent 0%, rgba(255,107,53,0.03) 100%)",
    dark: "linear-gradient(180deg, transparent 0%, rgba(255,107,53,0.02) 100%)",
  },
};

// Shadow scale
const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
  glow: "0 0 24px rgba(255, 140, 66, 0.35), 0 0 64px rgba(255, 107, 53, 0.15)",
  glowSm: "0 0 12px rgba(255, 140, 66, 0.3)",
  frameDark: "0 24px 80px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255,255,255,0.06)",
};

// Transition presets
const transitions = {
  fast: "0.15s ease",
  normal: "0.3s ease",
  slow: "0.5s ease",
};

const textStyles = {
  h1: {
    fontSize: ["2xl", "3xl", "4xl"],
    fontWeight: "bold",
    lineHeight: "1.2",
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: ["xl", "2xl", "3xl"],
    fontWeight: "bold",
    lineHeight: "1.3",
    letterSpacing: "-0.01em",
    marginBottom: "4",
  },
  h3: {
    fontSize: ["lg", "xl", "2xl"],
    fontWeight: "semibold",
    lineHeight: "1.4",
    letterSpacing: "-0.01em",
  },
  h4: {
    fontSize: ["md", "lg", "xl"],
    fontWeight: "semibold",
    lineHeight: "1.5",
  },
  h5: {
    fontSize: ["sm", "md", "lg"],
    fontWeight: "semibold",
    lineHeight: "1.5",
  },
  h6: {
    fontSize: ["xs", "sm", "md"],
    fontWeight: "semibold",
    lineHeight: "1.5",
  },
  body: {
    fontSize: ["sm", "md"],
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  caption: {
    fontSize: ["xs", "sm"],
    lineHeight: "1.4",
    color: "textSecondary",
  },
  eyebrow: {
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
  },
};

const theme = extendTheme({
  colors,
  fonts,
  textStyles,
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? colors.light.base : colors.dark.base,
        color:
          props.colorMode === "light"
            ? colors.light.textPrimary
            : colors.dark.textPrimary,
        fontFamily: fonts.body,
      },
      "@keyframes spin": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      // Slow ambient drift for aurora blobs
      "@keyframes auroraDrift1": {
        "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
        "33%": { transform: "translate(6%, -4%) scale(1.08)" },
        "66%": { transform: "translate(-4%, 5%) scale(0.95)" },
      },
      "@keyframes auroraDrift2": {
        "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
        "50%": { transform: "translate(-7%, 6%) scale(1.1)" },
      },
      "@keyframes auroraDrift3": {
        "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
        "50%": { transform: "translate(5%, 7%) scale(1.05)" },
      },
      "@keyframes floatY": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(8px)" },
      },
      "@keyframes caretBlink": {
        "0%, 45%": { opacity: 1 },
        "50%, 95%": { opacity: 0 },
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: fonts.heading,
      },
      variants: {
        h1: textStyles.h1,
        h2: textStyles.h2,
        h3: textStyles.h3,
        h4: textStyles.h4,
        h5: textStyles.h5,
        h6: textStyles.h6,
      },
    },
    Text: {
      baseStyle: {
        fontFamily: fonts.body,
      },
      variants: {
        body: textStyles.body,
        caption: textStyles.caption,
        eyebrow: textStyles.eyebrow,
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "xl",
      },
      variants: {
        primary: {
          bg: colors.light.primaryButton,
          color: colors.light.invertedText,
          _dark: {
            bg: colors.dark.primaryButton,
            color: colors.dark.invertedText,
          },
          _hover: {
            bg: colors.light.neutralButton,
            _dark: {
              bg: colors.dark.neutralButton,
            },
          },
        },
        secondary: {
          bg: colors.light.secondaryButton,
          color: colors.light.invertedText,
          _dark: {
            bg: colors.dark.secondaryButton,
            color: colors.dark.invertedText,
          },
          _hover: {
            bg: colors.light.neutralButton,
            _dark: {
              bg: colors.dark.neutralButton,
            },
          },
        },
        // Brand-orange CTA used on dark surfaces (hero, navbar)
        cta: {
          bg: "#ff8c42",
          color: "#1a1b26",
          borderRadius: "full",
          boxShadow: shadows.glow,
          transition: "all 0.25s ease",
          _hover: {
            bg: "#ffa25e",
            transform: "translateY(-2px)",
            boxShadow:
              "0 0 32px rgba(255, 140, 66, 0.5), 0 0 80px rgba(255, 107, 53, 0.2)",
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        // Ghost button with subtle border for dark surfaces
        ghostDark: {
          bg: "rgba(255, 255, 255, 0.04)",
          color: "#cad3f5",
          borderRadius: "full",
          border: "1px solid",
          borderColor: "rgba(255, 255, 255, 0.14)",
          backdropFilter: "blur(8px)",
          transition: "all 0.25s ease",
          _hover: {
            bg: "rgba(255, 255, 255, 0.09)",
            borderColor: "rgba(255, 255, 255, 0.28)",
            transform: "translateY(-2px)",
          },
        },
        navButton: {
          bg: "transparent",

          fontFamily: fonts.heading,
          fontWeight: "bold",
          borderRadius: "full",
          position: "relative",
          px: 6,
          py: 2,
          _hover: {
            color: colors.light.textTeriary,
            _dark: {
              color: colors.dark.textTeriary,
            },
          },
        },
      },
    },
  },
});

export default theme;

// Export design tokens for use in components
export { aurora, textures, glass, gradients, shadows, transitions };
