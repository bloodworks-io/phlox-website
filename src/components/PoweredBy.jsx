import React from "react";
import {
  Box,
  Image,
  Flex,
  useColorMode,
  Text,
  Link,
} from "@chakra-ui/react";
import chakraLogo from "../assets/chakra-logo.png";
import ollamaLogo from "../assets/ollama-logo.png";
import vllmLogo from "../assets/vllm-logo.png";
import llamacppLogo from "../assets/llamacpp-logo.svg";

const techLogos = [
  { src: chakraLogo, alt: "Chakra UI Logo", link: "https://chakra-ui.com/" },
  { src: ollamaLogo, alt: "Ollama Logo", link: "https://ollama.com/" },
  { src: vllmLogo, alt: "vLLM Logo", link: "https://docs.vllm.ai/" },
  { src: llamacppLogo, alt: "llama.cpp Logo", link: "https://github.com/ggml-org/llama.cpp" },
];

const PoweredBy = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      pb={16}
      textAlign="center"
      bg={isDark ? "dark.base" : "light.base"}
      color={isDark ? "dark.textPrimary" : "light.textPrimary"}
    >
      <Text maxW="container.md" mx="auto" mb={10} px={{ base: 4, md: 0 }}>
        Phlox is built with free and open-source technologies that prioritize
        privacy and local processing. Use any OpenAI-compatible endpoint
        including Ollama, vLLM, llama.cpp, and more.
      </Text>

      <Flex
        justify="center"
        align="center"
        flexWrap="wrap"
        gap={{ base: 8, md: 14 }}
        mb={12}
        px={4}
      >
        {techLogos.map((tech, index) => (
          <Link
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            lineHeight={0}
          >
            <Image
              src={tech.src}
              alt={tech.alt}
              height={{ base: "36px", md: "44px" }}
              filter={isDark ? "grayscale(1) brightness(0.9)" : "grayscale(1)"}
              opacity={0.65}
              transition="all 0.3s ease"
              _hover={{
                filter: isDark ? "grayscale(0) brightness(0.95)" : "grayscale(0)",
                opacity: 1,
                transform: "translateY(-2px)",
              }}
            />
          </Link>
        ))}
      </Flex>

      <Text
        fontSize="sm"
        color={isDark ? "dark.textSecondary" : "light.textSecondary"}
        maxW="container.sm"
        mx="auto"
        px={{ base: 4, md: 0 }}
      >
        Licensed under{" "}
        <Link
          href="https://opensource.org/licenses/MIT"
          isExternal
          color={isDark ? "dark.textTeriary" : "light.textTeriary"}
        >
          MIT License
        </Link>
        . This is experimental software for educational use - always verify AI
        outputs and use professional judgment. Contributions are welcome! See
        our{" "}
        <Link
          href="https://github.com/bloodworks-io/phlox/blob/main/.github/CONTRIBUTING.md"
          isExternal
          color={isDark ? "dark.textTeriary" : "light.textTeriary"}
        >
          Contributing Guidelines
        </Link>
        .
      </Text>
    </Box>
  );
};

export default PoweredBy;
