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
  Image,
  Tooltip,
  Icon as ChakraIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTools,
  FaLock,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { glass } from "../theme";
import filipeImage from "../assets/filipe.jpg";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Community = ({ bgColor }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const g = isDark ? glass.dark : glass.light;

  return (
    <Box id="community" py={{ base: 16, md: 24 }} bg={bgColor}>
      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
        <SectionHeading
          eyebrow="Community"
          title="Open Source & Local-First"
          subtext="No subscriptions, no vendor lock-in, and complete transparency through open source code. All data stays on your machine."
        />
        <MotionFlex
          direction={{ base: "column", lg: "row" }}
          align="stretch"
          justify="space-between"
          gap={10}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column: Text Content */}
          <MotionBox
            flex="1"
            textAlign={{ base: "center", lg: "left" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Stack spacing={7} mb={10}>
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
            </Stack>

            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              justify={{ base: "center", lg: "flex-start" }}
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
            </Stack>
          </MotionBox>

          {/* Right Column: Built by a Clinician */}
          <MotionBox
            flex="1"
            p={{ base: 6, md: 8 }}
            borderRadius="2xl"
            bg={g.bg}
            border="1px solid"
            borderColor={g.border}
            backdropFilter="blur(10px)"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Flex align="center" gap={4} mb={6}>
              <Image
                src={filipeImage}
                alt="Filipe Gonsalves"
                borderRadius="full"
                boxSize="60px"
                border="2px solid"
                borderColor={isDark ? "dark.textTeriary" : "light.textTeriary"}
              />
              <Box>
                <Heading
                  as="h3"
                  size="lg"
                  color={isDark ? "dark.textPrimary" : "light.textPrimary"}
                >
                  Built for Clinicians, by a Clinician
                </Heading>
                <Text
                  fontSize="sm"
                  color={isDark ? "dark.textSecondary" : "light.textSecondary"}
                >
                  Filipe Gonsalves, Clinical and Laboratory Haematologist
                </Text>
              </Box>
            </Flex>

            <Text
              fontSize="lg"
              mb={6}
              color={isDark ? "dark.textSecondary" : "light.textSecondary"}
            >
              I built Phlox because I wanted a simple, practical tool that works
              for me - something that didn't overcomplicate things or charge
              hundreds of dollars a month. It's been a fun project to work on,
              and honestly, there's nothing particularly special here - just
              straightforward functionality that I hope others might find useful
              too.
            </Text>

            <Stack spacing={4}>
              <Text
                color={isDark ? "dark.textSecondary" : "light.textSecondary"}
              >
                <strong>Why I built it:</strong>
              </Text>
              <Text
                color={isDark ? "dark.textSecondary" : "light.textSecondary"}
              >
                - To have a tool that's simple and gets the job done
              </Text>
              <Text
                color={isDark ? "dark.textSecondary" : "light.textSecondary"}
              >
                - To keep things local and under my control
              </Text>
              <Text
                color={isDark ? "dark.textSecondary" : "light.textSecondary"}
              >
                - To avoid the subscription traps of other tools
              </Text>
              <Text
                color={isDark ? "dark.textSecondary" : "light.textSecondary"}
              >
                - To have fun building something useful
              </Text>
            </Stack>
          </MotionBox>
        </MotionFlex>
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
