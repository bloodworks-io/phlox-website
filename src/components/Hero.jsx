import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorMode,
  Stack,
  Flex,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { FaDownload, FaBook, FaGitHub } from "react-icons/fa";
import halfScreenDark from "../assets/half-screen-dark.webp";
import halfScreenLight from "../assets/half-screen-light.webp";
import bgDark from "../assets/bg.webp";
import { gradients } from "../theme";
import { LATEST_VERSION } from "../version";

const Hero = () => {
  const { colorMode } = useColorMode();
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const words = ["Scribe.", "Organizer.", "Assistant.", "Knowledge Base."];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBeforeDelete = 2000;

  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursor);
  }, []);

  useEffect(() => {
    let timeout;

    const animate = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
          timeout = setTimeout(animate, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            animate();
          }, delayBeforeDelete);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
          timeout = setTimeout(animate, deletingSpeed);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          timeout = setTimeout(animate, typingSpeed);
        }
      }
    };

    timeout = setTimeout(animate, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      mb={5}
      px={{ base: 6, md: 40 }}
      paddingTop={{ base: 24, md: 28 }}
      pos="relative"
      overflow="hidden"
      sx={{
        background:
          colorMode === "light" ? gradients.hero.light : gradients.hero.dark,
      }}
    >
      <Box
        position="absolute"
        top="-50%"
        left="-50%"
        width="200%"
        height="200%"
        zIndex="0"
        sx={{
          background:
            colorMode === "light"
              ? gradients.heroRadial1.light
              : gradients.heroRadial1.dark,
          animation: "swirl 20s ease-in-out infinite",
          borderRadius: "40%",
        }}
      />
      <Box
        position="absolute"
        top="-50%"
        left="-50%"
        width="200%"
        height="200%"
        zIndex="0"
        sx={{
          background:
            colorMode === "light"
              ? gradients.heroRadial2.light
              : gradients.heroRadial2.dark,
          animation: "swirl 25s ease-in-out infinite reverse",
          borderRadius: "40%",
        }}
      />
      <style>
        {`
          @keyframes swirl {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(180deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      {/* Dots background overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage={`url(${bgDark})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity={0.15}
        zIndex="1"
        pointerEvents="none"
      />

      {/* Disclaimer Badge */}
      <Box
        position="absolute"
        top={{ base: "100px", md: "120px" }}
        right="20%"
        bg="rgba(0, 0, 0, 0.8)"
        backdropFilter="blur(10px)"
        color="white"
        px={3}
        py={2}
        borderRadius="lg"
        fontSize="sm"
        fontWeight="medium"
        maxWidth="250px"
        textAlign="center"
        border="1px solid rgba(255, 255, 255, 0.1)"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        zIndex="2"
        display={{ base: "none", md: "block" }}
      >
        ⚠️ Phlox is experimental software. Feedback welcome!
      </Box>

      {/* Mobile Warning Tooltip */}
      <Tooltip
        label="Experimental project for educational and personal use - not a certified medical device"
        hasArrow
        placement="bottom"
        bg="gray.700"
        color="white"
        fontSize="sm"
        maxWidth="250px"
        textAlign="center"
        display={{ base: "block", md: "none" }}
      >
        <Box
          position="absolute"
          top="20px"
          right="20px"
          bg="rgba(0, 0, 0, 0.8)"
          backdropFilter="blur(10px)"
          color="white"
          p={2}
          borderRadius="full"
          fontSize="lg"
          border="1px solid rgba(255, 255, 255, 0.1)"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          zIndex="2"
          cursor="pointer"
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          justifyContent="center"
          width="40px"
          height="40px"
        >
          ⚠️
        </Box>
      </Tooltip>

      {/* Content container */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        width="100%"
        maxWidth="90%" // Wider max width
        position="relative"
        zIndex="1"
      >
        {/* First Box for the heading */}
        <Box width="100%" textAlign="center">
          <Heading
            as="h1"
            size={{ base: "2xl", sm: "3xl", md: "3xl" }}
            mb={4}
            fontWeight="bold"
            color="white"
            lineHeight="1.5"
          >
            Your Local AI
            <br />
            <Box
              as="span"
              bgGradient="linear(to-r, #1a1a2e, #16213e, #0f3460)"
              bgClip="text"
              display="inline-block"
              lineHeight="1.5"
              whiteSpace="nowrap"
              textShadow="0 2px 10px rgba(0,0,0,0.3)"
              sx={{
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.15))",
              }}
            >
              {text}
              <Box
                as="span"
                opacity={showCursor ? 1 : 0}
                bgGradient="linear(to-b, #1a1a2e, #0f3460)"
                bgClip="text"
              >
                |
              </Box>
            </Box>
          </Heading>
        </Box>

        {/* Second Box for the rest of the content */}
        <Box width="100%" maxWidth="90%" textAlign="center">
          <Text
            fontSize={{ base: "sm", md: "s" }}
            mb={6}
            color="whiteAlpha.900"
          >
            An open-source patient management system integrating AI-powered
            medical transcription, clinical note generation, and an AI chatbot
            interface. Designed to run locally with privacy-first principles,
            using only free and open-source tools.
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            justify="center"
            mb={{ base: 8, md: 0 }}
          >
            <Button
              as={Link}
              href="https://github.com/bloodworks-io/phlox/releases/latest"
              isExternal
              size="lg"
              variant="primary"
              leftIcon={<FaDownload />}
            >
              Download {LATEST_VERSION}
            </Button>
            <Button
              as={Link}
              href="https://github.com/bloodworks-io/phlox/tree/main/docs"
              isExternal
              size="lg"
              variant="secondary"
              leftIcon={<FaBook />}
            >
              See The Docs
            </Button>
          </Stack>

          <Box
            maxWidth={{ base: "90%", md: "90%" }}
            mt={{ base: 8, md: 10 }}
            position="relative"
            display="flex"
            alignItems="flex-end"
            mx="auto"
            justifyContent="center"
          >
            <Box
              p={0}
              display="inline-block"
              borderRadius="sm"
              overflow="hidden"
              width="100%"
              height="auto"
            >
              <Image
                src={colorMode === "dark" ? halfScreenDark : halfScreenLight}
                alt="Phlox Application Screenshot"
                borderRadius="lg"
                width="100%"
                objectFit="contain"
                objectPosition="top"
                boxShadow="xl"
                borderBottom="0"
                borderTop="6px solid black"
                borderLeft="6px solid black"
                borderRight="6px solid black"
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
