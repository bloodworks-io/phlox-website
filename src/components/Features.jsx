import React from "react";
import { Box, Grid, Heading, Text, Icon, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
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

const MotionBox = motion(Box);

const FeatureItem = ({ title, description, icon, accentColor, index }) => {
  const { colorMode } = useColorMode();

  return (
    <MotionBox
      p={6}
      textAlign="center"
      borderRadius="lg"
      bg={colorMode === "dark" ? "dark.base" : "light.base"}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
        borderColor: accentColor,
        borderWidth: "1px",
        "& .feature-icon": {
          transform: "scale(1.1) rotate(5deg)",
        },
      }}
      transition="all 0.3s ease-in-out"
      position="relative"
      overflow="hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Icon
        as={icon}
        fontSize="3xl"
        mb={4}
        color={accentColor}
        className="feature-icon"
        transition="transform 0.3s ease-in-out"
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
    </MotionBox>
  );
};

const Features = ({ bgColor }) => {
  const { colorMode } = useColorMode();
  const accentColor = colorMode === "dark" ? "orange.400" : "orange.500";

  const features = [
    {
      title: "AI Transcription",
      description:
        "Convert audio recordings to structured clinical notes using Whisper-compatible transcription services with customizable templates.",
      icon: FaMicrophone,
      accentColor,
    },
    {
      title: "Flexible Template System",
      description:
        "Structure clinical notes to your preferences with versioning and automated template generation from example notes.",
      icon: FaRegFileAlt,
      accentColor,
    },
    {
      title: "Task Manager",
      description:
        "Parse clinical plans into actionable task lists with AI-generated summaries and automated follow-up tracking.",
      icon: FaTasks,
      accentColor,
    },
    {
      title: "Correspondence Generation",
      description:
        "One-click generation of patient letters, referrals, and discharge summaries based on your clinical notes.",
      icon: FaEnvelope,
      accentColor,
    },
    {
      title: "AI Chat & RAG",
      description:
        "Chat with an LLM about cases, backed by a local document knowledge base using ChromaDB for retrieval-augmented generation.",
      icon: FaRobot,
      accentColor,
    },
    {
      title: "Dashboard & RSS Reader",
      description:
        "Stay updated with LLM-summarized articles from medical RSS feeds and view your recent activity at a glance.",
      icon: FaRss,
      accentColor,
    },
    {
      title: "Patient Records",
      description:
        "Local SQLite database for storing patient information, notes, and generated content with full privacy control.",
      icon: FaDatabase,
      accentColor,
    },
    {
      title: "Clinical Reasoning",
      description:
        "AI-assisted differential diagnosis and investigation planning to support your clinical decision-making process.",
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
          <FeatureItem key={index} {...feature} index={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
