import React from "react";
import { Box, Grid, Heading, Text, Icon, useColorMode } from "@chakra-ui/react";
import {
  FaMicrophone,
  FaRegFileAlt,
  FaTasks,
  FaRobot,
  FaEnvelope,
  FaRss,
  FaDatabase,
  FaUserMd,
} from "react-icons/fa";
import theme from "../theme";

const FeatureItem = ({ title, description, icon, accentColor }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={6}
      textAlign="center"
      borderRadius="lg"
      bg={colorMode === "dark" ? "dark.base" : "light.base"}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
        borderColor: accentColor,
        borderWidth: "1px",
      }}
      transition="all 0.3s ease-in-out"
      position="relative"
      overflow="hidden"
    >
      <Icon
        as={icon}
        fontSize="3xl"
        mb={4}
        color={accentColor}
        transition="transform 0.5s ease-in-out"
      />
      <Heading
        as="h3"
        size="md"
        mb={2}
        fontWeight="semibold"
        color={colorMode === "dark" ? "dark.textPrimary" : "light.textPrimary"}
      >
        {title}
      </Heading>
      <Text
        fontSize="sm"
        color={
          colorMode === "dark" ? "dark.textSecondary" : "light.textSecondary"
        }
      >
        {description}
      </Text>
    </Box>
  );
};

const Features = ({ bgColor }) => {
  const { colorMode } = useColorMode();
  const accentColor = colorMode === "dark" ? "orange.400" : "orange.500";

  const features = [
    {
      title: "AI Transcription",
      description:
        "Convert audio to structured clinic notes using Whisper and templates",
      icon: FaMicrophone,
      accentColor,
    },
    {
      title: "Flexible Templates",
      description:
        "Create customizable templates with fields, prompts, and formatting rules",
      icon: FaRegFileAlt,
      accentColor,
    },
    {
      title: "Task Manager",
      description:
        "Automatically extract and track action items from clinical notes",
      icon: FaTasks,
      accentColor,
    },
    {
      title: "Correspondence",
      description:
        "Generate patient letters from notes using templates and LLM refinement",
      icon: FaEnvelope,
      accentColor,
    },
    {
      title: "AI Assistant",
      description:
        "Chat with clinical notes and uploaded medical documents using RAG",
      icon: FaRobot,
      accentColor,
    },
    {
      title: "Dashboard & RSS",
      description:
        "Track tasks and get LLM-generated summaries of medical articles",
      icon: FaRss,
      accentColor,
    },
    {
      title: "Patient Records",
      description:
        "Basic database for patient demographics and clinical history",
      icon: FaDatabase,
      accentColor,
    },
    {
      title: "Clinical Reasoning",
      description:
        "Generate structured clinical analysis with differential diagnoses",
      icon: FaUserMd,
      accentColor,
    },
  ];

  return (
    <Box as="section" py={16} bg={bgColor} id="features">
      <Heading as="h2" variant="h2" sx={{ textAlign: "center" }} mb={8}>
        Key Features
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={8}
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
