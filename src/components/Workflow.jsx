import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  useColorMode,
  Circle,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaRobot,
  FaRegFileAlt,
  FaTasks,
  FaEnvelope,
} from "react-icons/fa";
import Screenshots from "./Screenshots";
import theme from "../theme";

// Update these imports with actual screenshots when available
import transcriptionImg from "../assets/screenshots/screenshot-dark.png";
import templateImg from "../assets/screenshots/screenshot-dark.png";
import chatImg from "../assets/screenshots/screenshot-dark.png";
import correspondenceImg from "../assets/screenshots/screenshot-dark.png";
import tasksImg from "../assets/screenshots/tasks-dark.gif";

const MotionBox = motion(Box);

const PixelatedDivider = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      my={0}
      mx="auto"
      maxW="80%"
      height="60px"
      display="flex"
      justifyContent="center"
    >
      <Box
        width="2px"
        height="100%"
        style={{
          background: `repeating-linear-gradient(
            to bottom,
            ${colorMode === "dark" ? "#666666" : "#CCCCCC"} 0px,
            ${colorMode === "dark" ? "#666666" : "#CCCCCC"} 4px,
            transparent 4px,
            transparent 8px
          )`,
        }}
      />
    </Box>
  );
};

const WorkflowSection = ({
  number,
  title,
  description,
  icon,
  imageSrc,
  isReversed,
}) => {
  const { colorMode } = useColorMode();
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      mb={0}
      maxW="80%"
      mx="auto"
      position="relative"
    >
      <MotionBox
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        <Flex
          direction={{ base: "column", md: isReversed ? "row-reverse" : "row" }}
          align="center"
          justify="space-between"
          p={8}
          bg={
            colorMode === "dark"
              ? theme.colors.dark.secondary
              : theme.colors.light.secondary
          }
          borderRadius="xl"
          boxShadow="none"
          position="relative"
          overflow="hidden"
        >
          <Stack
            spacing={4}
            mb={{ base: 8, md: 0 }}
            maxW={{ base: "100%", md: "50%" }}
            textAlign={{ base: "center", md: isReversed ? "right" : "left" }}
            position="relative"
            zIndex={1}
          >
            {/* Background number */}
            <Text
              position="absolute"
              left={isReversed ? "auto" : "-8px"}
              right={isReversed ? "-8px" : "auto"}
              top="50%"
              transform="translateY(-50%)"
              fontSize="180px"
              fontWeight="900"
              color={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.50"}
              lineHeight="1"
              userSelect="none"
              zIndex={-1}
            >
              {number}
            </Text>

            <Box
              textAlign={{ base: "center", md: isReversed ? "right" : "left" }}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Box
                color={
                  colorMode === "dark"
                    ? "dark.textSecondary"
                    : "light.textSecondary"
                }
                fontSize="3xl"
              >
                {icon}
              </Box>
              <Heading
                as="h3"
                size="lg"
                color={
                  colorMode === "dark"
                    ? "dark.textPrimary"
                    : "light.textPrimary"
                }
                display="inline"
              >
                {title}
              </Heading>
            </Box>
            <Text
              color={
                colorMode === "dark"
                  ? "dark.textSecondary"
                  : "light.textSecondary"
              }
            >
              {description}
            </Text>
          </Stack>
          <Box
            maxW={{ base: "100%", md: "45%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            zIndex={1}
          >
            <Image
              src={imageSrc}
              alt={title}
              borderRadius="md"
              boxShadow="none"
              w="full"
            />
          </Box>
        </Flex>
      </MotionBox>
    </MotionBox>
  );
};

const Workflow = ({ bgColor }) => {
  const workflow = [
    {
      number: "01",
      title: "Experiment with Audio Input",
      description: "Experiment with recording or uploading audio for transcription via Whisper. Reliability and quality will vary; for educational/experimental use ONLY.",
      icon: <FaMicrophone />,
      imageSrc: transcriptionImg,
    },
    {
      number: "02",
      title: "Attempt Note Structuring",
      description: "Demonstrates how transcribed text *might* be processed by a template. This is a basic experimental feature, not for clinical note generation.",
      icon: <FaRegFileAlt />,
      imageSrc: templateImg,
    },
    {
      number: "03",
      title: "Interact with the Experimental AI",
      description: "Engage with the experimental AI. For educational exploration ONLY. DO NOT rely on it for any decisions or clinical information.",
      icon: <FaRobot />,
      imageSrc: chatImg,
    },
    {
      number: "04",
      title: "Experiment with Text Generation",
      description: "Illustrates how text *could be* generated from notes. This feature is for experimental purposes ONLY, not for producing real documents.",
      icon: <FaEnvelope />,
      imageSrc: correspondenceImg,
    },
    {
      number: "05",
      title: "Explore Task Extraction Ideas",
      description: "Shows an attempt to find tasks in text. Highly experimental and unreliable; NOT for actual task management or clinical follow-up.",
      icon: <FaTasks />,
      imageSrc: tasksImg,
    },
  ];

  return (
    <Box mb={10} id="workflow" bg={bgColor}>
      <Heading as="h2" variant="h2" sx={{ textAlign: "center" }}>
        Exploring a Potential Workflow (Experimental Concept)
      </Heading>
      <Text textAlign="center" variant="body" mb={10} maxW="60%" mx="auto">
        The following illustrates an experimental workflow concept within Phlox. This is for educational and personal experimentation ONLY, not for actual practice use. It demonstrates how one *might* interact with such a system, but remember, any data handling is for testing only and NOT suitable for real-world or clinical data.
      </Text>
      {workflow.map((step, index) => (
        <React.Fragment key={index}>
          <WorkflowSection
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
            imageSrc={step.imageSrc}
            isReversed={index % 2 === 1}
          />
          {index < workflow.length - 1 && <PixelatedDivider />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Workflow;
