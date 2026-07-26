import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Icon,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
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
import SectionHeading from "./SectionHeading";
import MediaPlaceholder from "./MediaPlaceholder";
import { glass } from "../theme";

const MotionGridItem = motion(GridItem);

const IconTile = ({ icon, accentColor }) => (
  <Flex
    align="center"
    justify="center"
    boxSize="44px"
    borderRadius="xl"
    bg={`${accentColor}1f`}
    border="1px solid"
    borderColor={`${accentColor}40`}
    mb={4}
    className="feature-icon"
    transition="transform 0.3s ease-in-out"
  >
    <Icon as={icon} fontSize="xl" color={accentColor} />
  </Flex>
);

const FeatureCard = ({
  title,
  description,
  icon,
  accentColor,
  placeholder,
  imageLight,
  imageDark,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const g = isDark ? glass.dark : glass.light;
  const resolvedImage = isDark
    ? imageDark || imageLight
    : imageLight || imageDark;

  return (
    <MotionGridItem
      p={{ base: 6, md: 7 }}
      borderRadius="2xl"
      bg={g.bg}
      border="1px solid"
      borderColor={g.border}
      backdropFilter="blur(10px)"
      sx={{ transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease" }}
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
        borderColor: g.hoverBorder,
        "& .feature-icon": {
          transform: "scale(1.08) rotate(-4deg)",
        },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      <IconTile icon={icon} accentColor={accentColor} />
      <Heading
        as="h3"
        size="md"
        mb={2}
        fontWeight="semibold"
        color={isDark ? "dark.textPrimary" : "light.textPrimary"}
      >
        {title}
      </Heading>
      <Text
        fontSize="sm"
        lineHeight="1.7"
        mb={placeholder || resolvedImage ? 5 : 0}
        color={isDark ? "dark.textSecondary" : "light.textSecondary"}
      >
        {description}
      </Text>
      {resolvedImage ? (
        <Box
          w="100%"
          sx={{ aspectRatio: "16 / 10" }}
          borderRadius="lg"
          overflow="hidden"
          border="1px solid"
          borderColor={g.border}
        >
          <Image
            src={resolvedImage}
            alt={`${title} screenshot`}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
      ) : placeholder ? (
        <MediaPlaceholder
          dark={isDark}
          ratio={16 / 10}
          label={placeholder.label}
          dimensions="1200 × 750"
          description={placeholder.description}
        />
      ) : null}
    </MotionGridItem>
  );
};

const Features = ({ bgColor }) => {
  const { colorMode } = useColorMode();
  const accentColor = colorMode === "dark" ? "#f5a97f" : "#fe640b";

  const largeFeatures = [
    {
      title: "AI Transcription",
      description:
        "Record a consult and watch it become a structured clinical note. Whisper-compatible transcription with customizable templates — all processed on your own hardware.",
      icon: FaMicrophone,
      imageLight: "/images/feature-transcription-light.webp",
      imageDark: "/images/feature-transcription-dark.webp",
    },
    {
      title: "AI Chat & RAG",
      description:
        "Build a private knowledge base from medical guidelines, literature, and your own PDFs. Search across your references with cited source passages — all on your own hardware.",
      icon: FaRobot,
      imageLight: "/images/feature-chat-light.webp",
      imageDark: "/images/feature-chat-dark.webp",
    },
  ];

  const smallFeatures = [
    {
      title: "Flexible Templates",
      description:
        "Structure notes to your preferences with versioning and automated template generation from example notes.",
      icon: FaRegFileAlt,
    },
    {
      title: "Task Manager",
      description:
        "Parse clinical plans into actionable task lists with AI summaries and follow-up tracking.",
      icon: FaTasks,
    },
    {
      title: "Correspondence",
      description:
        "One-click patient letters, referrals, and discharge summaries from your clinical notes.",
      icon: FaEnvelope,
    },
    {
      title: "Dashboard & RSS",
      description:
        "LLM-summarized articles from medical RSS feeds and your recent activity at a glance.",
      icon: FaRss,
    },
    {
      title: "Patient Records",
      description:
        "Local SQLite database for patients, notes, and generated content with full privacy control.",
      icon: FaDatabase,
    },
    {
      title: "Encounter Summaries",
      description:
        "Automatically extract key findings from encounters into clear, structured documentation.",
      icon: FaUserMd,
    },
  ];

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg={bgColor} id="features">
      <SectionHeading
        eyebrow="Features"
        title="Everything runs locally"
        subtext="A complete clinical documentation toolkit built on free and open-source tools."
      />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={6}
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        {largeFeatures.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            accentColor={accentColor}
            colSpan={{ base: 1, md: 2, lg: 3 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          />
        ))}
        {smallFeatures.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            accentColor={accentColor}
            colSpan={{ base: 1, md: 1, lg: 2 }}
            transition={{ duration: 0.4, delay: (index + 2) * 0.08 }}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
