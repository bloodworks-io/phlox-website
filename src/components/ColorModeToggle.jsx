// src/components/ColorModeToggle.jsx
import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import theme from "../theme";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      position="fixed"
      top={{ base: 1, md: 3, lg: 3 }}
      right="4"
      icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      onClick={toggleColorMode}
      variant="ghost"
      size="lg"
      aria-label="Toggle color mode"
      zIndex="overlay"
      color={theme.colors.light.base}
      _hover={{
        bg: "transparent",
        color: theme.colors.light.textTeriary,
      }}
    />
  );
};

export default ColorModeToggle;
