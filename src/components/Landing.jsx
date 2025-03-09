import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Image,
  useColorMode,
  IconButton,
  HStack,
  Flex,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Workflow from "./Workflow";
import Hero from "./Hero";
import Features from "./Features";
import logo from "../assets/logo.webp";
import PoweredBy from "./PoweredBy";
import ColorModeToggle from "./ColorModeToggle";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Community from "./Community"; // Import the new component

const Landing = () => {
  const { colorMode } = useColorMode();
  const [activeSection, setActiveSection] = useState("hero");

  const baseColor = colorMode === "dark" ? "dark.base" : "light.base";
  const secondaryColor =
    colorMode === "dark" ? "dark.secondary" : "light.secondary";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // Lower threshold for taller sections
        rootMargin: "-60px 0px 0px 0px", // Adjust for navbar height
      },
    );

    const sections = document.querySelectorAll(
      "#hero, #workflow, #features, #opensource, #community, #faq",
    );
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <Box
      minH="100vh"
      bg={colorMode === "dark" ? "dark.base" : "light.base"}
      color={colorMode === "dark" ? "dark.textPrimary" : "light.textPrimary"}
    >
      <ColorModeToggle />
      <Navbar activeSection={activeSection} />

      <Box maxW="100%" position="relative">
        <Box id="hero">
          <Hero />
        </Box>

        <Box id="workflow">
          <Workflow bgColor={baseColor} />
        </Box>

        <Box id="features">
          <Features bgColor={secondaryColor} />
        </Box>

        <Box id="community">
          <Community bgColor={baseColor} />
          <PoweredBy />
        </Box>

        <Box id="faq">
          <FAQ bgColor={secondaryColor} />
        </Box>
      </Box>
    </Box>
  );
};
export default Landing;
