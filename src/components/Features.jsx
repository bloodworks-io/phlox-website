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
      description: "Demonstrates audio-to-text experimentation using Whisper. For educational and personal experimentation ONLY. Not for reliable note-taking or clinical use.",
      icon: FaMicrophone,
      accentColor,
    },
    {
      title: "Flexible Templates",
      description: "Allows exploration of text template creation. Functionality is for experimental purposes ONLY and may not work as expected.",
      icon: FaRegFileAlt,
      accentColor,
    },
    {
      title: "Task Manager",
      description: "Illustrates an attempt to parse text for tasks. Highly experimental; NOT FOR REAL-WORLD USE or clinical task management.",
      icon: FaTasks,
      accentColor,
    },
    {
      title: "Correspondence",
      description: "Shows text generation based on notes. Output is for illustrative and experimental purposes ONLY; not for actual correspondence.",
      icon: FaEnvelope,
      accentColor,
    },
    {
      title: "AI Assistant",
      description: "Basic chat interface to experiment with RAG. For educational exploration ONLY. DO NOT use with real or sensitive data; highly experimental.",
      icon: FaRobot,
      accentColor,
    },
    {
      title: "Dashboard & RSS",
      description: "Simple display for text processing experiments (tasks, RSS). Summaries are illustrative and for experimentation ONLY.",
      icon: FaRss,
      accentColor,
    },
    {
      title: "Patient Records",
      description: "Rudimentary data storage fields for experimental purposes. Absolutely NOT for real patient data; insecure and not for clinical use.",
      icon: FaDatabase,
      accentColor,
    },
    {
      title: "Clinical Reasoning",
      description: "Attempts to generate text in a clinical analysis format. Purely an EXPERIMENTAL FEATURE, NOT actual clinical reasoning. NOT FOR CLINICAL DECISION-MAKING.",
      icon: FaUserMd,
      accentColor,
    },
  ];

  return (
    <Box as="section" py={16} bg={bgColor} id="features">
      <Heading as="h2" variant="h2" sx={{ textAlign: "center" }} mb={8}>
        Experimental Modules & Concepts
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
