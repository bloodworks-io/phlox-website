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
          Phlox is built on open-source principles with a local-first
          architecture. All data stays on your machine, using only free and
          open-source tools. No subscriptions, no vendor lock-in, and complete
          transparency through open source code.
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
                    <Box>100% Local</Box>
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
                description="Runs entirely on your machine with no third-party services. All data stays local using only free, open-source tools for complete privacy control."
                colorMode={colorMode}
              />
              <FeaturePoint
                icon={FaTools}
                title="Local-First Architecture"
                description="Built with local tools like Ollama, Whisper, SQLite, and ChromaDB. No cloud dependencies means you control your data and workflow completely."
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
                title="Experimental Software"
                description="This is experimental software for educational use. Always verify AI outputs and use professional judgment for any clinical decisions."
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
                href="https://github.com/bloodworks-io/phlox/blob/main/README.md#usage-warning-️"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                colorScheme={colorMode === "dark" ? "orange" : "orange"}
                leftIcon={<FaExclamationTriangle />}
              >
                Usage Guidelines
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
