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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Tooltip,
  Icon as ChakraIcon,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaHeart,
  FaHandsHelping,
  FaTools,
  FaLock,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import filipeImage from "../assets/filipe.jpg"; // Import your image

const Community = ({ bgColor }) => {
  const { colorMode } = useColorMode();

  return (
    <Box id="community" py={16} bg={bgColor}>
      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading as="h2" variant="h2" sx={{ textAlign: "center" }} mb={10}>
          Open Source & Local-First
        </Heading>
        <Text textAlign="center" variant="body" mb={10} maxW="60%" mx="auto">
          Phlox is an open-source experimental project exploring local-first concepts. While it aims to demonstrate privacy-conscious design, it is intended for educational and personal experimentation ONLY and does NOT guarantee control or security for real data or workflows.
        </Text>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={10}
        >
          {/* Left Column: Text Content */}
          <Box flex="1" textAlign={{ base: "center", lg: "left" }}>
            <Stack spacing={6} mb={8}>
              <FeaturePoint
                icon={FaLock}
                title={
                  <Flex align="center" gap={2}>
                    <Box>Experiment in Local Data Handling</Box>
                    <Tooltip
                      label="Phlox's security ultimately depends on your system's security. Ensure your machine is protected with strong passwords, encryption, and up-to-date software."
                      hasArrow
                      placement="top"
                      fontSize="sm"
                      bg={
                        colorMode === "dark"
                          ? "dark.secondary"
                          : "light.secondary"
                      }
                      color={
                        colorMode === "dark"
                          ? "dark.textPrimary"
                          : "light.textPrimary"
                      }
                    >
                      <span>
                        <ChakraIcon
                          as={FaInfoCircle}
                          w={4}
                          h={4}
                          color={
                            colorMode === "dark"
                              ? "dark.textTeriary"
                              : "light.textTeriary"
                          }
                        />
                      </span>
                    </Tooltip>
                  </Flex>
                }
                description="Demonstrates keeping data on your machine for experimental purposes. This is illustrative only and NOT a secure system. Not for use with real or sensitive patient information."
                colorMode={colorMode}
              />
              <FeaturePoint
                icon={FaTools}
                title="Local-First Architecture"
                description="Experiments with local tools like Ollama, Whisper, and SQLite. Performance and reliability will vary; for educational and testing purposes ONLY."
                colorMode={colorMode}
              />
              <FeaturePoint
                icon={FaGithub}
                title="Open Source Transparency"
                description="Full source code available on GitHub. Audit, modify, and contribute - never be locked into proprietary systems."
                colorMode={colorMode}
              />
              <FeaturePoint
                icon={FaExclamationTriangle}
                title="Use With Caution"
                description="LLMs can hallucinate or produce incorrect information. Always verify AI outputs against trusted sources."
                colorMode={colorMode}
              />
            </Stack>

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
                leftIcon={<FaGithub />}
              >
                View on GitHub
              </Button>
              <Button
                as={Link}
                href="https://github.com/bloodworks-io/phlox/blob/main/docs/warnings.md"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                colorScheme={colorMode === "dark" ? "red" : "red"}
                leftIcon={<FaExclamationTriangle />}
              >
                Read Warnings
              </Button>
            </Stack>
          </Box>

          {/* Right Column: Built by a Clinician */}
          <Box
            flex="1"
            p={6}
            borderRadius="lg"
            bg={colorMode === "dark" ? "dark.secondary" : "light.secondary"}
          >
            <Text fontStyle="italic" fontSize="md" mb={4}>
              The following section shares the personal motivation and journey behind this experimental project from its creator:
            </Text>
            <Flex align="center" gap={4} mb={6}>
              <Image
                src={filipeImage}
                alt="Filipe Gonsalves"
                borderRadius="full"
                boxSize="60px"
              />
              <Box>
                <Heading
                  as="h3"
                  size="lg"
                  color={
                    colorMode === "dark"
                      ? "dark.textPrimary"
                      : "light.textPrimary"
                  }
                >
                  Built for Clinicians, by a Clinician
                </Heading>
                <Text
                  fontSize="sm"
                  color={
                    colorMode === "dark"
                      ? "dark.textSecondary"
                      : "light.textSecondary"
                  }
                >
                  Filipe Gonsalves, Clinical and Laboratory Haematologist
                </Text>
              </Box>
            </Flex>

            <Text
              fontSize="lg"
              mb={6}
              color={
                colorMode === "dark"
                  ? "dark.textSecondary"
                  : "light.textSecondary"
              }
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
                color={
                  colorMode === "dark"
                    ? "dark.textSecondary"
                    : "light.textSecondary"
                }
              >
                <strong>Why I built it:</strong>
              </Text>
              <Text
                color={
                  colorMode === "dark"
                    ? "dark.textSecondary"
                    : "light.textSecondary"
                }
              >
                - To have a tool that's simple and gets the job done
              </Text>
              <Text
                color={
                  colorMode === "dark"
                    ? "dark.textSecondary"
                    : "light.textSecondary"
                }
              >
                - To keep things local and under my control
              </Text>
              <Text
                color={
                  colorMode === "dark"
                    ? "dark.textSecondary"
                    : "light.textSecondary"
                }
              >
                - To avoid the subscription traps of other tools
              </Text>
              <Text
                color={
                  colorMode === "dark"
                    ? "dark.textSecondary"
                    : "light.textSecondary"
                }
              >
                - To have fun building something useful
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

// Reusable Feature Point Component
const FeaturePoint = ({ icon, title, description, colorMode }) => (
  <Flex align="center" gap={4}>
    <Icon
      as={icon}
      fontSize="2xl"
      color={
        colorMode === "dark" ? "dark.primaryButton" : "light.primaryButton"
      }
    />
    <Box align="justify">
      <Heading
        as="h4"
        size="md"
        mb={1}
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
  </Flex>
);

export default Community;
