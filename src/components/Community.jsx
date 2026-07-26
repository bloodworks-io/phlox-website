import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  useColorMode,
  Stack,
  Icon,
  Link,
  Tooltip,
  Icon as ChakraIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTools,
  FaLock,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCodeBranch,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const MotionBox = motion(Box);

const Community = ({ bgColor }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box id="community" py={{ base: 16, md: 24 }} bg={bgColor}>
      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading
          eyebrow="Community"
          title="Open Source & Local-First"
          subtext="No subscriptions, no vendor lock-in, and complete transparency through open source code. All data stays on your machine."
        />
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 8, md: 10 }}
            mb={10}
          >
            <FeaturePoint
              icon={FaLock}
              title={
                <Flex align="center" gap={2}>
                  <Box>100% Local</Box>
                  <Tooltip
                    label="Phlox's security ultimately depends on your system's security. Ensure your machine is protected with strong passwords, encryption, and up-to-date software."
                    hasArrow
                    placement="top"
                    fontSize="sm"
                    bg={isDark ? "dark.secondary" : "light.secondary"}
                    color={isDark ? "dark.textPrimary" : "light.textPrimary"}
                  >
                    <span>
                      <ChakraIcon
                        as={FaInfoCircle}
                        w={4}
                        h={4}
                        color={
                          isDark ? "dark.textTeriary" : "light.textTeriary"
                        }
                      />
                    </span>
                  </Tooltip>
                </Flex>
              }
              description="Runs entirely on your machine with no third-party services. All data stays local using only free, open-source tools for complete privacy control."
              isDark={isDark}
            />
            <FeaturePoint
              icon={FaTools}
              title="Local-First Architecture"
              description="Built with local tools like llama.cpp, whisper.cpp, SQLite, and ChromaDB. No cloud dependencies means you control your data and workflow completely."
              isDark={isDark}
            />
            <FeaturePoint
              icon={FaGithub}
              title="Open Source Transparency"
              description="Full source code available on GitHub. Audit, modify, and contribute - never be locked into proprietary systems."
              isDark={isDark}
            />
            <FeaturePoint
              icon={FaExclamationTriangle}
              title="Experimental Software"
              description="This is experimental software for educational use. Always verify AI outputs and use professional judgment for any clinical decisions."
              isDark={isDark}
            />
          </SimpleGrid>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            justify="center"
          >
            <Button
              as={Link}
              href="https://github.com/bloodworks-io/phlox"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="green"
              size="lg"
              borderRadius="full"
              leftIcon={<FaGithub />}
            >
              View on GitHub
            </Button>
            <Button
              as={Link}
              href="https://github.com/bloodworks-io/phlox/blob/main/README.md#usage-warning-️"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              borderRadius="full"
              colorScheme="orange"
              leftIcon={<FaExclamationTriangle />}
            >
              Usage Guidelines
            </Button>
            <Button
              as={Link}
              href="https://github.com/bloodworks-io/phlox/blob/main/.github/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              borderRadius="full"
              colorScheme="teal"
              leftIcon={<FaCodeBranch />}
            >
              Contribute
            </Button>
          </Stack>
        </MotionBox>
      </Box>
    </Box>
  );
};

// Reusable Feature Point Component
const FeaturePoint = ({ icon, title, description, isDark }) => {
  const accentColor = isDark
    ? "dark.primaryButton"
    : "light.primaryButton";

  return (
    <Flex align="flex-start" gap={4}>
      <Flex
        align="center"
        justify="center"
        boxSize="44px"
        flexShrink={0}
        borderRadius="xl"
        bg={isDark ? "rgba(138,173,244,0.12)" : "rgba(23,146,153,0.1)"}
        border="1px solid"
        borderColor={isDark ? "rgba(138,173,244,0.25)" : "rgba(23,146,153,0.2)"}
      >
        <Icon as={icon} fontSize="lg" color={accentColor} />
      </Flex>
      <Box textAlign="left">
        <Heading
          as="h4"
          size="md"
          mb={1}
          color={isDark ? "dark.textPrimary" : "light.textPrimary"}
        >
          {title}
        </Heading>
        <Text
          fontSize="sm"
          lineHeight="1.7"
          color={isDark ? "dark.textSecondary" : "light.textSecondary"}
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default Community;
