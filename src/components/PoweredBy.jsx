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
import chromaLogo from "../assets/chroma-logo.png";
import vllmLogo from "../assets/vllm-logo.png";
import llamacppLogo from "../assets/llamacpp-logo.svg";

const techLogos = [
  { src: chakraLogo, alt: "Chakra UI Logo", link: "https://chakra-ui.com/" },
  { src: ollamaLogo, alt: "Ollama Logo", link: "https://ollama.com/" },
  { src: vllmLogo, alt: "vLLM Logo", link: "https://docs.vllm.ai/" },
  { src: llamacppLogo, alt: "llama.cpp Logo", link: "https://github.com/ggml-org/llama.cpp" },
  { src: chromaLogo, alt: "ChromaDB Logo", link: "https://www.trychroma.com/" },
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
        Phlox is built with free and open-source technologies that prioritize privacy and local processing. Use any OpenAI-compatible endpoint including Ollama, vLLM, llama.cpp, and more. Run everything on your own hardware with complete control over your data and workflow.
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
        . This is experimental software for educational use - always verify AI outputs and use professional judgment. Contributions are welcome! See our{" "}
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
