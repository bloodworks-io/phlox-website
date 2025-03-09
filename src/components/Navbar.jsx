import React from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  Button,
  useTheme,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import theme from "../theme";
const { light, dark } = theme.colors;

const Navbar = ({ activeSection }) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <Box
      bg={theme.colors.dark.secondary}
      py={4}
      boxShadow="none"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <Flex
        maxW="100%"
        px={{ base: 4, md: 8, lg: 12 }}
        justify="center"
        align="center"
        position="relative"
      >
        <Image
          src={logo}
          alt="Phlox Logo"
          w={{ base: "100px", sm: "120px", md: "150px" }}
          mt={{ base: 5, md: 0, lg: 0 }}
          position="absolute"
          left={{ base: "8px", md: "50px" }}
          cursor="pointer" // Add cursor pointer for better UX
          onClick={scrollToTop} // Scroll to top on click
        />
        <HStack
          spacing={8}
          align="center"
          display={{ base: "none", sm: "none", md: "flex" }}
          justify="center"
          width="100%"
        >
          <NavButton
            id="workflow"
            activeSection={activeSection}
            label="Workflow"
            colors={dark}
          />
          <NavButton
            id="features"
            activeSection={activeSection}
            label="Features"
            colors={dark}
          />
          <NavButton
            id="community"
            activeSection={activeSection}
            label="Community"
            colors={dark}
          />
          <NavButton
            id="faq"
            activeSection={activeSection}
            label="FAQ"
            colors={dark}
          />
        </HStack>
      </Flex>
    </Box>
  );
};
// Helper component for nav buttons
const NavButton = ({ id, activeSection, label, colors }) => (
  <Button
    onClick={() => {
      const section = document.getElementById(id);
      if (section) {
        const offset = id === "workflow" ? 10 : -50; // Apply offset only for workflow
        const sectionTop = section.offsetTop - offset;
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    }}
    variant="navButton"
    sx={{
      _after: {
        content: '""',
        position: "absolute",
        bottom: "-2px",
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: colors.textTeriary,
        transform: activeSection === id ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 0.3s ease",
      },
    }}
  >
    {label}
  </Button>
);

export default Navbar;
