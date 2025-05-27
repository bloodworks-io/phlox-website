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
        "Phlox is an open-source patient management system integrating AI-powered medical transcription, clinical note generation, and an AI chatbot interface. It's designed to run locally with privacy-first principles, supporting any OpenAI-compatible endpoint including Ollama, vLLM, llama.cpp, and others for local inference. This is experimental software for educational and personal use - not a certified medical device.",
    },
    {
      question: "What are the main features of Phlox?",
      answer:
        "Phlox includes AI medical transcription and summarization, flexible template systems for clinical notes, task management with AI-generated summaries, correspondence generation, AI chat with RAG capabilities, clinical reasoning assistance, and a dashboard with RSS reader. All features run locally using open-source tools.",
    },
    {
      question: "How does Phlox handle privacy?",
      answer:
        "Phlox runs entirely on your machine with no third-party services - all data stays local using SQLite, local AI models, and open-source tools. However, as experimental software, it lacks enterprise-grade security features and should not be used with sensitive data without proper security hardening.",
    },
    {
      question: "What are the prerequisites for running Phlox?",
      answer:
        "You need Podman or Docker, an OpenAI-compatible LLM endpoint (such as Ollama, vLLM, llama.cpp, or OpenAI API) with appropriate models, and a Whisper-compatible transcription service. For reasonable performance with local inference, a GPU (CUDA, ROCm) or Apple M-Series chip is strongly recommended.",
    },
    {
      question: "How do I set up Phlox?",
      answer:
        "Clone the repository, build the Docker image, create an .env file with your encryption key and timezone, and run the container. Access Phlox at http://localhost:5000 and configure your OpenAI-compatible LLM endpoint (Ollama, vLLM, llama.cpp, etc.) and Whisper endpoints in the Settings page. See the documentation for detailed setup instructions.",
    },
    {
      question: "Is Phlox suitable for clinical use?",
      answer:
        "Phlox is experimental software not certified for clinical use. It should only be used for educational purposes and personal experimentation unless you have implemented robust security measures and undertaken thorough validation. Always verify AI-generated content and use professional clinical judgment.",
    },
    {
      question: "What are the limitations of Phlox?",
      answer:
        "As experimental software, Phlox may contain bugs and inconsistencies. AI outputs can be unreliable and inaccurate, especially with smaller models, so always verify information. It currently lacks user authentication and enterprise security features.",
    },
    {
      question:
        "Is Phlox compliant with healthcare regulations (HIPAA, GDPR, etc)?",
      answer:
        "No, Phlox does not comply with healthcare regulations like HIPAA or GDPR in its current form. It lacks the necessary security, authentication, and audit features required for handling protected health information in regulated environments.",
    },
    {
      question: "How does the transcription process work?",
      answer:
        "Audio is transcribed using Whisper-compatible services, then processed through customizable templates using any OpenAI-compatible endpoint (including Ollama, vLLM, llama.cpp, or OpenAI API) to generate structured clinical notes. The system supports both real-time recording and file uploads.",
    },
    {
      question: "How do AI features like Document Chat and Case Chat work?",
      answer:
        "The AI chat features use retrieval-augmented generation (RAG) with ChromaDB to let you interact with your documents and cases. You can ask questions, explore differential diagnoses, and discuss treatment options with the AI assistant.",
    },
    {
      question: "What template features are available?",
      answer:
        "Phlox offers flexible template creation for structuring clinical notes, with versioning support and automated template generation from example notes. You can customize templates to match your documentation style and requirements.",
    },
    {
      question: "How does the task manager work?",
      answer:
        "The task manager automatically extracts actionable tasks from clinical notes and plans. It also provides AI-generated summaries and helps track clinical workflows.",
    },
    {
      question:
        "What LLM backends and infrastructure options does Phlox support?",
      answer:
        "Phlox supports any OpenAI-compatible endpoint, giving you flexibility in your AI infrastructure. You can use local solutions like Ollama, vLLM, or llama.cpp for complete privacy and control, or cloud services like OpenAI, Anthropic, or other hosted APIs. This allows you to choose the best balance of performance, privacy, and cost for your specific needs.",
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
        px={{ base: 2, md: 8 }}
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
