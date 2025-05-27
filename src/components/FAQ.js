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
      answer: "Phlox is an open-source experimental project intended for educational and personal experimentation. It explores concepts like local AI for text processing (Whisper + Ollama) and text organization. It is NOT a certified medical device and MUST NOT be used for clinical decision-making."
    },
    {
      question: "What are the main features of Phlox?",
      answer: "Phlox includes several experimental modules for demonstration, such as audio transcription, text templating, rudimentary task parsing, and example text generation. These are for educational and personal experimentation ONLY, not for real-world use."
    },
    {
      question: "How does Phlox handle privacy?",
      answer: "Phlox is designed around local-first principles for experimental purposes. However, it does not guarantee privacy or security for any real-world application. Any data handling (SQLite, local models) is for testing within an experimental context and should NOT be considered secure for sensitive or clinical information."
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
      answer: "NO. Phlox is an experimental project intended for educational and personal experimentation ONLY. It is NOT a certified medical device and MUST NOT be used in actual clinical settings or for clinical decision-making. It has not undergone validation or security hardening and does not meet regulatory standards."
    },
    {
      question: "What are the limitations of Phlox?",
      answer: "Phlox is experimental software and may contain bugs and inconsistencies. AI outputs can be unreliable and inaccurate; always verify information. It lacks security features and user authentication suitable for regulated environments or clinical use."
    },
    {
      question:
        "Is Phlox compliant with healthcare regulations (HIPAA, GDPR, etc)?",
      answer: "NO. Phlox, as an experimental project, does not comply with regulations such as HIPAA or GDPR. It lacks the necessary security, authentication, and audit features for handling protected health information."
    },
    {
      question: "How does the transcription process work?",
      answer: "The system demonstrates experimental audio transcription using Whisper, followed by text processing with Ollama via templates. This is for illustrative purposes within an educational context; results are not guaranteed for reliability or accuracy."
    },
    {
      question: "How do AI features like Document Chat and Case Chat work?",
      answer: "These are experimental modules demonstrating text interaction with an AI. They are for educational and personal experimentation ONLY and are not intended for real document analysis, case discussion, or clinical reasoning."
    },
    {
      question: "What template features are available?",
      answer: "The project includes experimental features for text templating, allowing for exploration of field definition and prompting. This is not a robust or complete system for production use."
    },
    {
      question: "How does the task manager work?",
      answer: "This is an experimental feature attempting to parse tasks from text. It is rudimentary and not reliable for actual task management or clinical use."
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
