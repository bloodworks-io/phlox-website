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
import theme from "../theme";

const MotionBox = motion(Box);

const ContentBlock = ({ number, icon, title, children, index }) => {
  const { colorMode } = useColorMode();
  const accentColor =
    colorMode === "dark"
      ? theme.colors.dark.textTeriary
      : theme.colors.light.textTeriary;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      p={6}
    >
      <Flex align="flex-start" gap={4}>
        <Flex direction="column" align="center" minW="40px">
          <Text fontSize="sm" fontWeight="bold" color={accentColor} mb={2}>
            {number}
          </Text>
          <Icon as={icon} fontSize="2xl" color={accentColor} />
        </Flex>
        <Box>
          <Heading
            as="h3"
            size="md"
            mb={2}
            color={
              colorMode === "dark"
                ? theme.colors.dark.textPrimary
                : theme.colors.light.textPrimary
            }
          >
            {title}
          </Heading>
          <Text
            fontSize="md"
            lineHeight="1.8"
            color={
              colorMode === "dark"
                ? theme.colors.dark.textSecondary
                : theme.colors.light.textSecondary
            }
          >
            {children}
          </Text>
        </Box>
      </Flex>
    </MotionBox>
  );
};

const Why = ({ bgColor }) => {
  const { colorMode } = useColorMode();

  const blocks = [
    {
      number: "01",
      icon: FaExchangeAlt,
      title: "How AI Scribes Work",
      content:
        "AI scribing is straightforward: your audio gets transcribed, then a language model (like ChatGPT) structures it into notes. That's it. No magic, just good technology. Many services just send data to the same servers that ChatGPT or Claude run on.",
    },
    {
      number: "03",
      icon: FaMicrochip,
      title: "Your Hardware Is Ready",
      content:
        "Modern computers—especially Apple Silicon or systems with a decent GPU—are more than capable of running language models locally. You don't need enterprise hardware or a massive server. A laptop from the last few years is likely all you need.",
    },
    {
      number: "02",
      icon: FaCloudUploadAlt,
      title: "The Privacy Question",
      content:
        "When you send audio to a cloud service, you're trusting them with sensitive information. Do you know where that data goes? Who has access? How long it's stored?",
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
    <Box as="section" py={10} bg={bgColor}>
      <Heading as="h2" variant="h2" sx={{ textAlign: "center" }} mb={4}>
        Why Run It Locally?
      </Heading>
      <Text
        textAlign="center"
        fontSize="lg"
        maxW="600px"
        mx="auto"
        mb={{ base: 10, md: 16 }}
        color={
          colorMode === "dark"
            ? theme.colors.dark.textSecondary
            : theme.colors.light.textSecondary
        }
      >
        A different approach to AI-powered documentation.
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        {blocks.map((block, index) => (
          <ContentBlock
            key={index}
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
