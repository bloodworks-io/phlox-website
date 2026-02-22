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

// Gradients for hero and section accents
const gradients = {
  hero: {
    light:
      "linear-gradient(135deg, #ff6b35 0%, #f7931e 25%, #ff8c42 50%, #ffa62b 75%, #ff6b35 100%)",
    dark: "linear-gradient(135deg, #cc4125 0%, #cc5500 25%, #e65c00 50%, #cc4125 75%, #cc5500 100%)",
  },
  heroRadial1: {
    light:
      "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,107,53,0.4) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(247,147,30,0.4) 0%, transparent 40%)",
    dark: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,107,53,0.2) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(247,147,30,0.2) 0%, transparent 40%)",
  },
  heroRadial2: {
    light:
      "radial-gradient(circle at 60% 40%, rgba(255,166,43,0.3) 0%, transparent 45%), radial-gradient(circle at 40% 60%, rgba(255,107,53,0.3) 0%, transparent 45%)",
    dark: "radial-gradient(circle at 60% 40%, rgba(255,166,43,0.15) 0%, transparent 45%), radial-gradient(circle at 40% 60%, rgba(255,107,53,0.15) 0%, transparent 45%)",
  },
  sectionAccent: {
    light:
      "linear-gradient(180deg, transparent 0%, rgba(255,107,53,0.03) 100%)",
    dark: "linear-gradient(180deg, transparent 0%, rgba(255,107,53,0.02) 100%)",
  },
};

// Shadow scale
const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
  glow: {
    light: "0 0 20px rgba(255, 107, 53, 0.3)",
    dark: "0 0 20px rgba(255, 107, 53, 0.2)",
  },
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
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
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
export { gradients, shadows, transitions };
