import { extendTheme } from "@chakra-ui/react";

const colors = {
  light: {
    base: "#eff1f5", // Latte Base
    secondary: "#e6e9ef", // Slightly darker Base
    textPrimary: "#4c4f69", // Latte Text
    textSecondary: "#6c6f85", // Latte Subtext0
    textTeriary: "#fe640b", // Latte Peach
    primaryButton: "#179299", // Latte Teal
    secondaryButton: "#162694", // Secondary color
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
    primaryButton: "#8aadf4", // Macchiato Blue
    secondaryButton: "#ADB3E4", // Secondary color
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
        borderRadius: "sm",
      },
      variants: {
        primary: {
          bg: colors.light.primaryButton,
          color: colors.light.base,
          _dark: {
            bg: colors.dark.primaryButton,
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
          color: colors.light.base,
          _dark: {
            bg: colors.dark.secondaryButton,
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
          color: colors.light.base,
          fontFamily: fonts.heading,
          fontWeight: "bold",
          borderRadius: "full",
          position: "relative",
          px: 6,
          py: 2,
          _dark: {
            color: colors.dark.textPrimary,
          },
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
