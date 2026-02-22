import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import theme from "../theme";

const ColorModeToggle = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      variant="ghost"
      size="md"
      aria-label="Toggle color mode"
      color={theme.colors.dark.textPrimary}
      _hover={{
        bg: "whiteAlpha.200",
        color: theme.colors.dark.textTeriary,
      }}
      {...props}
    />
  );
};

export default ColorModeToggle;
