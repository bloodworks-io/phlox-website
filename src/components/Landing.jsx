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
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Community from "./Community"; // Import the new component
import Footer from "./Footer";

const Landing = () => {
  const { colorMode } = useColorMode();
  const [activeSection, setActiveSection] = useState("hero");

  const baseColor = colorMode === "dark" ? "dark.base" : "light.base";
  const secondaryColor =
    colorMode === "dark" ? "dark.secondary" : "light.secondary";

  useEffect(() => {
    const sectionIds = ["hero", "workflow", "features", "community", "faq"];

    const handleScroll = () => {
      const navbarHeight = 100;
      const scrollPosition = window.scrollY + navbarHeight;

      let currentSection = "hero";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      minH="100vh"
      bg={colorMode === "dark" ? "dark.base" : "light.base"}
      color={colorMode === "dark" ? "dark.textPrimary" : "light.textPrimary"}
    >
      

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

        <Footer />
      </Box>
      <Navbar activeSection={activeSection} />
    </Box>
  );
};
export default Landing;
