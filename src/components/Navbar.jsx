import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  Button,
  useTheme,
  useColorMode,
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
const { light, dark } = theme.colors;

const Navbar = ({ activeSection }) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
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
      const offset = id === "workflow" ? 10 : -50;
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
      bg={theme.colors.dark.secondary}
      py={4}
      minH={{ base: "4vh", md: "5vh", lg: "auto" }}
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
          mt={{ base: 7, sm: 8, md: 10, lg: 0 }}
          position="absolute"
          left={{ base: "8px", sm: "20px", md: "50px" }}
          cursor="pointer"
          onClick={scrollToTop}
        />

        {/* Mobile hamburger menu */}
        <Box
          position="absolute"
          right={{ base: "50px", sm: "80px" }}
          mt={{ base: "30px", md: "45px", lg: "10px" }}
          display={{ base: "block", md: "block", lg: "none" }}
        >
          <IconButton
            aria-label="Open menu"
            icon={<Icon as={FaBars} />}
            onClick={onOpen}
            variant="ghost"
            color="white"
            fontSize="24px"
            _hover={{
              bg: "whiteAlpha.200",
            }}
          />
        </Box>

        {/* GitHub Star Button */}
        <Box
          position="absolute"
          right={{ base: "8px", sm: "25px", md: "50px" }}
          mt={{
            base: "30px!important",
            md: "45px!important",
            lg: "10px!important",
          }}
          display={{ base: "none", sm: "block" }}
          transform={{
            base: "scale(0.6)",
            sm: "scale(0.7)",
            md: "scale(0.7)",
            lg: "scale(0.9)",
          }}
          transformOrigin="right center"
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
              colors={dark}
            />
          ))}
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg={dark.secondary}>
          <DrawerCloseButton color={dark.textPrimary} />
          <DrawerHeader color={dark.textPrimary} borderBottomWidth="1px">
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
                      ? dark.textTeriary
                      : dark.textPrimary
                  }
                  onClick={() => handleNavClick(item.id)}
                  _hover={{
                    color: dark.textTeriary,
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
        const offset = id === "workflow" ? 10 : -50;
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
