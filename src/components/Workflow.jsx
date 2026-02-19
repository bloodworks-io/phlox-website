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

const PixelatedDivider = ({ isLast }) => {
  const { colorMode } = useColorMode();
  const dividerColor = colorMode === "dark" ? "#666666" : "#CCCCCC";
  const accentColor = colorMode === "dark" ? "#f5a97f" : "#fe640b";

  return (
    <Box
      my={0}
      mx="auto"
      maxW="80%"
      height="80px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      {/* Dashed line */}
      <Box
        width="2px"
        height="100%"
        style={{
          background: `repeating-linear-gradient(
            to bottom,
            ${dividerColor} 0px,
            ${dividerColor} 4px,
            transparent 4px,
            transparent 8px
          )`,
        }}
      />
      {/* Connecting dot */}
      {!isLast && (
        <Box
          position="absolute"
          bottom="-6px"
          width="12px"
          height="12px"
          borderRadius="full"
          bg={accentColor}
          boxShadow={`0 0 10px ${accentColor}`}
        />
      )}
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
      title: "Record or Upload Audio",
      description: "Capture patient encounters through audio recording or upload existing audio files for transcription using Whisper-compatible services.",
      icon: <FaMicrophone />,
      imageSrc: transcriptionImg,
    },
    {
      number: "02",
      title: "Structure Clinical Notes",
      description: "Transform transcribed audio into structured clinical notes using customizable templates that match your documentation style and requirements.",
      icon: <FaRegFileAlt />,
      imageSrc: templateImg,
    },
    {
      number: "03",
      title: "Chat with AI Assistant",
      description: "Ask questions about cases, explore differential diagnoses, or discuss treatment options with the AI assistant backed by your local knowledge base.",
      icon: <FaRobot />,
      imageSrc: chatImg,
    },
    {
      number: "04",
      title: "Generate Correspondence",
      description: "Create patient letters, referrals, and discharge summaries automatically based on your clinical notes with one-click generation.",
      icon: <FaEnvelope />,
      imageSrc: correspondenceImg,
    },
    {
      number: "05",
      title: "Manage Clinical Tasks",
      description: "Extract actionable tasks from clinical notes automatically and track follow-ups, investigations, and patient care plans in an organized dashboard.",
      icon: <FaTasks />,
      imageSrc: tasksImg,
    },
  ];

  return (
    <Box mb={10} id="workflow" bg={bgColor}>
      <Heading as="h2" variant="h2" sx={{ textAlign: "center" }}>
        How Phlox Works
      </Heading>
      <Text textAlign="center" variant="body" mb={10} maxW="60%" mx="auto">
        Phlox integrates several AI-powered tools into a streamlined workflow for clinical documentation and patient management. Everything runs locally on your machine for complete privacy and control.
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
          {index < workflow.length - 1 && <PixelatedDivider isLast={index === workflow.length - 2} />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Workflow;
