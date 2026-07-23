import React from "react";
import {
  Box,
  Heading,
  Text,
  Icon,
  useColorMode,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaExchangeAlt,
  FaCloudUploadAlt,
  FaMicrochip,
  FaLock,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import theme from "../theme";

const MotionBox = motion(Box);

const ContentBlock = ({ number, icon, title, children, index }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const accentColor = isDark
    ? theme.colors.dark.textTeriary
    : theme.colors.light.textTeriary;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      pt={8}
      borderTop="1px solid"
      borderColor={isDark ? "whiteAlpha.200" : "blackAlpha.200"}
      position="relative"
    >
      {/* Oversized ghost number */}
      <Text
        position="absolute"
        top={2}
        right={2}
        fontSize="7xl"
        fontWeight="bold"
        fontFamily="'Space Grotesk', sans-serif"
        lineHeight="1"
        color={accentColor}
        opacity={0.14}
        userSelect="none"
        aria-hidden
      >
        {number}
      </Text>

      <Flex direction="column" gap={4} maxW="90%">
        <Flex
          align="center"
          justify="center"
          boxSize="44px"
          borderRadius="xl"
          bg={`${accentColor}1f`}
          border="1px solid"
          borderColor={`${accentColor}40`}
        >
          <Icon as={icon} fontSize="xl" color={accentColor} />
        </Flex>
        <Box>
          <Heading
            as="h3"
            size="md"
            mb={2}
            color={isDark ? "dark.textPrimary" : "light.textPrimary"}
          >
            {title}
          </Heading>
          <Text
            fontSize="md"
            lineHeight="1.8"
            color={isDark ? "dark.textSecondary" : "light.textSecondary"}
          >
            {children}
          </Text>
        </Box>
      </Flex>
    </MotionBox>
  );
};

const Why = ({ bgColor }) => {
  const blocks = [
    {
      number: "01",
      icon: FaExchangeAlt,
      title: "How AI Scribes Work",
      content:
        "AI scribing is straightforward: your audio gets transcribed, then a language model (like ChatGPT) structures it into notes. That's it. No magic, just good technology. Many services just send data to the same servers that ChatGPT or Claude run on.",
    },
    {
      number: "02",
      icon: FaCloudUploadAlt,
      title: "The Privacy Question",
      content:
        "When you send audio to a cloud service, you're trusting them with sensitive information. Do you know where that data goes? Who has access? How long it's stored?",
    },
    {
      number: "03",
      icon: FaMicrochip,
      title: "Your Hardware Is Ready",
      content:
        "Modern computers—especially Apple Silicon or systems with a decent GPU—are more than capable of running language models locally. You don't need enterprise hardware or a massive server. A laptop from the last few years is likely all you need.",
    },
    {
      number: "04",
      icon: FaLock,
      title: "Keep It Close",
      content:
        "Phlox runs entirely on your machine. Your audio, your transcripts, your notes—they never leave your computer. Nothing is uploaded, nothing is logged remotely. Your data stays yours, period.",
    },
  ];

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg={bgColor}>
      <SectionHeading
        eyebrow="Why Local"
        title="Why Run It Locally?"
        subtext="A different approach to AI-powered documentation."
      />
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 12 }}
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        {blocks.map((block, index) => (
          <ContentBlock
            key={block.number}
            number={block.number}
            icon={block.icon}
            title={block.title}
            index={index}
          >
            {block.content}
          </ContentBlock>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Why;
