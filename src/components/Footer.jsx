import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  IconButton,
  VStack,
  HStack,
  useColorMode,
  Divider,
} from "@chakra-ui/react";
import { FaGithub, FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo.webp";

const Footer = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Workflow", href: "#workflow" },
    { label: "Features", href: "#features" },
    { label: "Community", href: "#community" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <Box
      as="footer"
      py={10}
      px={{ base: 6, md: 40 }}
      bg={isDark ? "dark.secondary" : "light.secondary"}
      color={isDark ? "dark.textSecondary" : "light.textSecondary"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        maxW="1200px"
        mx="auto"
        gap={8}
      >
        {/* Logo and tagline */}
        <VStack align="start" spacing={3}>
          <HStack>
            <img src={logo} alt="Phlox Logo" width="32" height="32" />
            <Text
              fontWeight="bold"
              fontSize="lg"
              color={isDark ? "dark.textPrimary" : "light.textPrimary"}
            >
              Phlox
            </Text>
          </HStack>
          <Text fontSize="sm" maxW="280px">
            Your local AI scribe, organizer, assistant, and knowledge base.
            Privacy-first, open-source.
          </Text>
        </VStack>

        {/* Quick Links */}
        <VStack align="start" spacing={3}>
          <Text
            fontWeight="semibold"
            fontSize="sm"
            color={isDark ? "dark.textPrimary" : "light.textPrimary"}
          >
            Quick Links
          </Text>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              fontSize="sm"
              _hover={{
                color: isDark ? "dark.textTeriary" : "light.textTeriary",
              }}
            >
              {link.label}
            </Link>
          ))}
        </VStack>

        {/* Resources */}
        <VStack align="start" spacing={3}>
          <Text
            fontWeight="semibold"
            fontSize="sm"
            color={isDark ? "dark.textPrimary" : "light.textPrimary"}
          >
            Resources
          </Text>
          <HStack spacing={4}>
            <Link
              href="https://github.com/bloodworks-io/phlox"
              isExternal
              _hover={{
                color: isDark ? "dark.textTeriary" : "light.textTeriary",
              }}
            >
              <IconButton
                as="span"
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                size="sm"
              />
            </Link>
          </HStack>
        </VStack>

        {/* Back to top */}
        <VStack align="start" spacing={3}>
          <Text
            fontWeight="semibold"
            fontSize="sm"
            color={isDark ? "dark.textPrimary" : "light.textPrimary"}
          >
            Back to Top
          </Text>
          <IconButton
            aria-label="Scroll to top"
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            borderRadius="full"
            _hover={{
              bg: isDark ? "dark.textTeriary" : "light.textTeriary",
              color: isDark ? "dark.base" : "light.base",
            }}
          />
        </VStack>
      </Flex>

      <Divider my={6} borderColor={isDark ? "dark.base" : "light.base"} />

      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        gap={2}
      >
        <Text fontSize="xs">
          Built with privacy-first principles using open-source tools.
        </Text>
        <Text fontSize="xs">
          Licensed under{" "}
          <Link
            href="https://github.com/bloodworks-io/phlox/blob/main/LICENSE"
            isExternal
            _hover={{
              color: isDark ? "dark.textTeriary" : "light.textTeriary",
            }}
          >
            MIT License
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
