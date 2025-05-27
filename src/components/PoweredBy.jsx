import React from "react";
import {
  Box,
  Heading,
  Image,
  Flex,
  useColorMode,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import chakraLogo from "../assets/chakra-logo.png";
import ollamaLogo from "../assets/ollama-logo.png";
import whisperLogo from "../assets/whisper-logo.webp";
import llamaLogo from "../assets/llama-logo.png";
import chromaLogo from "../assets/chroma-logo.png";

const badges = [
  {
    src: "https://github.com/bloodworks-io/phlox/actions/workflows/coverage.yml/badge.svg",
    alt: "Tests",
    link: "https://github.com/bloodworks-io/phlox/actions/workflows/coverage.yml",
  },
  {
    src: "https://snyk.io/test/github/bloodworks-io/phlox/badge.svg",
    alt: "Known Vulnerabilities",
    link: "https://snyk.io/test/github/bloodworks-io/phlox/badge.svg",
  },
  {
    src: "https://coveralls.io/repos/github/bloodworks-io/phlox/badge.svg?branch=main",
    alt: "Coverage Status",
    link: "https://coveralls.io/github/bloodworks-io/phlox?branch=main",
  },
  {
    src: "https://img.shields.io/badge/License-MIT-yellow.svg",
    alt: "MIT License",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    src: "https://img.shields.io/badge/code%20style-black-000000.svg",
    alt: "Code style: black",
    link: "https://github.com/psf/black",
  },
  {
    src: "https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat",
    alt: "Contributions welcome",
    link: "https://github.com/bloodworks-io/phlox/issues",
  },
];

const techLogos = [
  { src: chakraLogo, alt: "Chakra UI Logo", link: "https://chakra-ui.com/" },
  { src: ollamaLogo, alt: "Ollama Logo", link: "https://ollama.com/" },
  { src: chromaLogo, alt: "ChromaDB Logo", link: "https://www.trychroma.com/" }, // Add ChromaDB
];

const PoweredBy = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      py={2}
      mb={10}
      textAlign="center"
      bg={colorMode === "dark" ? "dark.base" : "light.base"}
      color={colorMode === "dark" ? "dark.textPrimary" : "light.textPrimary"}
    >
      <Text maxW="container.md" mx="auto" mb={8}>
        Phlox is an experimental project built with free and open-source technologies to explore concepts of privacy and local processing. These are for demonstration and educational purposes ONLY, not for production or real-world use. Components are intended to run on your own hardware for testing.
      </Text>

      <Flex justify="center" flexWrap="wrap" gap={12} mb={12}>
        {techLogos.map((tech, index) => (
          <a
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <Image
              src={tech.src}
              alt={tech.alt}
              height="50px"
              filter={colorMode === "dark" ? "brightness(0.8)" : "none"}
            />
          </a>
        ))}
      </Flex>

      <Text
        fontSize="sm"
        color={
          colorMode === "dark" ? "dark.textSecondary" : "light.textSecondary"
        }
        maxW="container.sm"
        mx="auto"
      >
        Licensed under{" "}
        <Link
          href="https://opensource.org/licenses/MIT"
          isExternal
          color="blue.400"
        >
          MIT License
        </Link>
        . Contributions are welcome! See our{" "}
        <Link
          href="https://github.com/bloodworks-io/phlox/blob/main/.github/CONTRIBUTING.md"
          isExternal
          color="blue.400"
        >
          Contributing Guidelines
        </Link>
        .
      </Text>
    </Box>
  );
};

export default PoweredBy;
