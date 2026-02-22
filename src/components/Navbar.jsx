import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  Button,
  useTheme,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.webp";
import theme from "../theme";
import ColorModeToggle from "./ColorModeToggle";
const { dark } = theme.colors;

const Navbar = ({ activeSection }) => {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "workflow", label: "Workflow" },
    { id: "features", label: "Features" },
    { id: "community", label: "Community" },
    { id: "faq", label: "FAQ" },
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80;
      const offset = id === "workflow" ? navbarHeight : navbarHeight - 40;
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    onClose();
  };

  return (
    <Box
      bg="rgba(30, 32, 48, 0.85)"
      backdropFilter="blur(12px)"
      py={3}
      mx="auto"
      w={{ base: "95%", md: "90%", lg: "80%", xl: "1200px" }}
      borderRadius="full"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      position="fixed"
      left="50%"
      transform="translateX(-50%)"
      top={4}
      zIndex="9999"
    >
      <Flex
        maxW="100%"
        px={{ base: 4, md: 8, lg: 12 }}
        justify="center"
        align="center"
        position="relative"
        minH="40px"
      >
        <Image
          src={logo}
          alt="Phlox Logo"
          w={{ base: "100px", sm: "120px", md: "150px" }}
          position="absolute"
          left={{ base: "16px", sm: "24px", md: "32px" }}
          top="50%"
          transform="translateY(-50%)"
          cursor="pointer"
          onClick={scrollToTop}
        />

        {/* Right side actions */}
        <HStack
          position="absolute"
          right={{ base: "16px", sm: "24px", md: "32px" }}
          top="50%"
          transform="translateY(-50%)"
          spacing={{ base: 2, md: 4 }}
        >
          {/* GitHub Star Button */}
          <Box
            display={{ base: "none", sm: "block" }}
            transform={{
              base: "scale(0.6)",
              sm: "scale(0.7)",
              md: "scale(0.7)",
              lg: "scale(0.9)",
            }}
            transformOrigin="right center"
            mt={2}
          >
            <iframe
              src="https://ghbtns.com/github-btn.html?user=bloodworks-io&repo=phlox&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="170"
              height="40"
              title="GitHub Star Button"
              style={{
                border: "none",
                colorScheme: "light",
              }}
            />
          </Box>

          <ColorModeToggle />

          {/* Mobile hamburger menu */}
          <Box display={{ base: "block", md: "block", lg: "none" }}>
            <IconButton
              aria-label="Open menu"
              icon={<Icon as={FaBars} />}
              onClick={onOpen}
              variant="ghost"
              color={theme.colors.dark.textPrimary}
              fontSize="24px"
              _hover={{
                bg: "whiteAlpha.200",
              }}
            />
          </Box>
        </HStack>

        {/* Desktop Navigation */}
        <HStack
          spacing={8}
          align="center"
          display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          justify="center"
          width="100%"
        >
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              id={item.id}
              activeSection={activeSection}
              label={item.label}
              colors={theme.colors.dark}
            />
          ))}
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg={theme.colors.dark.secondary}>
          <DrawerCloseButton color={theme.colors.dark.textPrimary} />
          <DrawerHeader
            color={theme.colors.dark.textPrimary}
            borderBottomWidth="1px"
          >
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} mt={8}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  fontSize="xl"
                  fontWeight="medium"
                  color={
                    activeSection === item.id
                      ? theme.colors.dark.textTeriary
                      : theme.colors.dark.textPrimary
                  }
                  onClick={() => handleNavClick(item.id)}
                  _hover={{
                    color: theme.colors.dark.textTeriary,
                    transform: "translateX(4px)",
                  }}
                  transition="all 0.2s"
                >
                  {item.label}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

// Helper component for nav buttons
const NavButton = ({ id, activeSection, label, colors }) => (
  <Button
    onClick={() => {
      const section = document.getElementById(id);
      if (section) {
        const navbarHeight = 100;
        const offset = id === "workflow" ? navbarHeight : navbarHeight - 60;
        const sectionTop = section.offsetTop - offset;
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    }}
    variant="navButton"
    color={colors.textPrimary}
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
