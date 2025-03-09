import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const FAQ = ({ bgColor }) => {
  const { colorMode } = useColorMode();
  const faqData = [
    {
      question: "What is Phlox?",
      answer:
        "Phlox is an open-source, local-first clinical tool with features including patient records, medical transcription using Whisper + Ollama, task management, RSS reader with LLM summaries, and an AI assistant with RAG capabilities.",
    },
    {
      question: "What are the main features of Phlox?",
      answer:
        "Key features include medical transcription with note summarization, flexible template system, task manager for tracking action items, correspondence generation, AI chat with documents and clinical notes, and a dashboard with RSS reader for medical updates.",
    },
    {
      question: "How does Phlox handle privacy?",
      answer:
        "Phlox is designed to be local-first, with all data staying on your machine. It uses SQLite for database storage (with encryption), local LLMs via Ollama, and local Whisper for transcription. No data is sent to external services unless you configure it to do so.",
    },
    {
      question: "What are the prerequisites for running Phlox?",
      answer:
        "You need Podman or Docker, an Ollama instance (local or remote) with appropriate LLMs installed, and a Whisper-compatible transcription service like Speaches (self-hosted) or a cloud API.",
    },
    {
      question: "How do I set up Phlox?",
      answer:
        "Clone the repository, build the Docker image, create an .env file with your encryption key and timezone, and run the container. Access Phlox at http://localhost:3000 and configure your Ollama and Whisper endpoints in the Settings page.",
    },
    {
      question: "Is Phlox suitable for clinical use?",
      answer:
        "Phlox is provided for educational and research purposes only. It is NOT intended for direct clinical use in its current state without rigorous validation, security hardening, and adherence to all applicable regulations. All AI-generated outputs MUST be independently verified.",
    },
    {
      question: "What are the limitations of Phlox?",
      answer:
        "Phlox is experimental software that may contain bugs and security vulnerabilities. LLMs can hallucinate and generate incorrect information, especially smaller locally-run models. It lacks advanced security features and user authentication required for regulatory compliance.",
    },
    {
      question:
        "Is Phlox compliant with healthcare regulations (HIPAA, GDPR, etc)?",
      answer:
        "No. Phlox, in its default configuration, does not comply with regulations such as HIPAA, GDPR, or other patient data privacy or medical device regulations. It lacks required security features, user authentication, audit logs, and access controls.",
    },
    {
      question: "How does the transcription process work?",
      answer:
        "Audio is recorded or uploaded, then processed by a Whisper endpoint. The transcript is broken into template fields and processed by Ollama to extract key points as structured JSON. After refinement and formatting, the fields are combined into a complete note.",
    },
    {
      question: "How do AI features like Document Chat and Case Chat work?",
      answer:
        "Document Chat lets you upload and query medical documents with citations to sources. Case Chat enables discussion of patient cases with reference to clinical notes. The Clinical Reasoning Assistant generates structured analyses with differentials and recommendations.",
    },
    {
      question: "What template features are available?",
      answer:
        "Templates have customizable fields with system prompts, format specifications, persistence flags, and post-processing rules. You can create templates manually or generate them from example notes, with version control for tracking changes.",
    },
    {
      question: "How does the task manager work?",
      answer:
        "Tasks are automatically extracted from numbered items in the Plan section of clinical notes. You can view tasks by clinic day or all outstanding tasks, and mark them complete with checkboxes.",
    },
  ];

  return (
    <Box as="section" py={16} bg={bgColor} id="faq">
      <Heading as="h2" variant="h2" sx={{ textAlign: "center" }} mb={10}>
        Frequently Asked Questions
      </Heading>

      <Accordion
        maxW="container.md"
        mx="auto"
        allowMultiple
        px={{ base: 4, md: 8 }}
      >
        {faqData.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton
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
              pb={4}
              color={
                colorMode === "dark"
                  ? "dark.textSecondary"
                  : "light.textSecondary"
              }
            >
              <Text>{item.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQ;
