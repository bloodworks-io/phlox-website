import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import { glass } from "../theme";
import { docsHref, docsIsExternal } from "../docsLink";

const FAQ = ({ bgColor }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const g = isDark ? glass.dark : glass.light;
  const accentColor = isDark ? "dark.textTeriary" : "light.textTeriary";

  // Short, accurate pre-docs questions. Depth lives in the docs — each
  // answer ends with a link to the relevant page.
  const faqData = [
    {
      question: "What is Phlox?",
      answer:
        "A free, open-source (MIT), local-first AI scribe with a built-in patient management system, agentic AI tools, and document/PDF processing. It runs entirely on your machine — no account, no cloud.",
      link: { label: "Overview", to: docsHref },
    },
    {
      question: "Does any of my data leave my machine?",
      answer:
        "No — Phlox is local-first and your clinical data (patients, notes) stays on your machine, encrypted at rest. Uploaded reference literature (journal articles, guidelines) lives in a separate, unencrypted file, so keep PHI out of document collections. External web tools (PubMed, Wikipedia) and MCP servers are disabled by default, with a per-server PHI filter that strips identifiers when you do enable them.",
      link: { label: "Security", to: `${docsHref}/security` },
    },
    {
      question: "Do I need Docker?",
      answer:
        "No. The desktop app (macOS Apple Silicon, or Linux Flatpak) bundles the LLM, transcription, and embedding engines and downloads models on first run. Docker is optional, for server deployments that point at external inference endpoints.",
      link: { label: "Setup", to: `${docsHref}/setup` },
    },
    {
      question: "What hardware do I need?",
      answer:
        "A GPU (CUDA or ROCm) or Apple Silicon is strongly recommended. Plan on 16GB+ RAM for general use (8GB minimum), and 32GB+ for larger models like Qwen3.5-27B.",
      link: { label: "Setup", to: `${docsHref}/setup` },
    },
    {
      question: "Which AI models and backends does Phlox support?",
      answer:
        "Any OpenAI-compatible endpoint — Ollama, vLLM, llama.cpp, sglang, or hosted OpenAI-compatible APIs. On the desktop app you can also use the bundled llama.cpp engine, and transcription works with any Whisper-compatible endpoint or the bundled parakeet.cpp.",
      link: { label: "Architecture", to: `${docsHref}/architecture` },
    },
    {
      question: "Is Phlox safe for clinical use, or HIPAA/GDPR compliant?",
      answer:
        "No. Phlox is experimental, is not a certified medical device, and does not comply with HIPAA, GDPR, or TGA. It does include encryption at rest and an audit log, but these are not compliance-grade. Always verify AI-generated content against primary sources.",
      link: { label: "Limitations & Warnings", to: `${docsHref}/limitations` },
    },
  ];

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg={bgColor} id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtext="The basics — privacy, setup, hardware, and scope."
      />

      <Accordion maxW="container.lg" mx="auto" allowMultiple px={{ base: 4, md: 8 }}>
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            mb={3}
            borderRadius="xl"
            border="1px solid"
            borderColor={g.border}
            bg={g.bg}
            backdropFilter="blur(10px)"
            overflow="hidden"
          >
            <h2>
              <AccordionButton
                py={4}
                _hover={{
                  bg:
                    colorMode === "dark" ? "dark.secondary" : "light.secondary",
                }}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  color={
                    colorMode === "dark"
                      ? "dark.textPrimary"
                      : "light.textPrimary"
                  }
                  fontWeight="semibold"
                >
                  {item.question}
                </Box>
                <AccordionIcon
                  color={
                    colorMode === "dark"
                      ? "dark.textPrimary"
                      : "light.textPrimary"
                  }
                />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={5}
              color={
                colorMode === "dark"
                  ? "dark.textSecondary"
                  : "light.textSecondary"
              }
              lineHeight="1.7"
            >
              <Text>{item.answer}</Text>
              {item.link && (
                <Text mt={3} fontSize="sm">
                  <Link
                    href={item.link.to}
                    isExternal={docsIsExternal}
                    fontWeight="semibold"
                    color={accentColor}
                    _hover={{ textDecoration: "none", opacity: 0.85 }}
                  >
                    {item.link.label} →
                  </Link>
                </Text>
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQ;
