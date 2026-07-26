import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Link,
  Stack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  FaDownload,
  FaBook,
  FaLock,
  FaCodeBranch,
  FaTag,
  FaChevronDown,
} from "react-icons/fa";
import HeroVideo from "./HeroVideo";
import { aurora, textures, gradients } from "../theme";
import { LATEST_VERSION } from "../version";
import { docsHref, docsIsExternal } from "../docsLink";

const words = ["Scribe.", "Organizer.", "Assistant.", "Knowledge Base."];
const TYPING_SPEED = 90;
const DELETING_SPEED = 45;
const DELAY_BEFORE_DELETE = 2200;

const useTypewriter = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        TYPING_SPEED
      );
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), DELAY_BEFORE_DELETE);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), DELETING_SPEED);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return text;
};

// Slow-drifting aurora blob
const AuroraBlob = ({ blob, animation, ...props }) => (
  <Box
    position="absolute"
    borderRadius="full"
    filter="blur(90px)"
    bg={blob}
    pointerEvents="none"
    sx={{ animation }}
    {...props}
  />
);

const Hero = () => {
  const typedText = useTypewriter();

  return (
    <Flex
      direction="column"
      align="center"
      pos="relative"
      overflow="hidden"
      bg="dark.deep"
      px={{ base: 5, md: 10 }}
      pt={{ base: 28, md: 36 }}
      pb={{ base: 16, md: 20 }}
    >
      {/* Aurora background */}
      <AuroraBlob
        blob={aurora.orange}
        animation="auroraDrift1 26s ease-in-out infinite"
        w={{ base: "120vw", md: "60vw" }}
        h={{ base: "120vw", md: "60vw" }}
        top="-22%"
        left="-12%"
      />
      <AuroraBlob
        blob={aurora.blue}
        animation="auroraDrift2 32s ease-in-out infinite"
        w={{ base: "100vw", md: "52vw" }}
        h={{ base: "100vw", md: "52vw" }}
        top="-14%"
        right="-14%"
      />
      <AuroraBlob
        blob={aurora.teal}
        animation="auroraDrift3 38s ease-in-out infinite"
        w={{ base: "90vw", md: "46vw" }}
        h={{ base: "90vw", md: "46vw" }}
        bottom="-30%"
        left="28%"
        opacity={0.8}
      />

      {/* Dot-grid texture */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={textures.dotGridDark}
        backgroundSize="32px 32px"
        opacity={0.7}
        pointerEvents="none"
        sx={{
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      {/* Content */}
      <Flex
        direction="column"
        align="center"
        position="relative"
        zIndex={1}
        w="100%"
        maxW="1200px"
      >
        {/* Announcement pill */}
        <Button
          as={Link}
          href="https://github.com/bloodworks-io/phlox/releases/latest"
          isExternal
          size="sm"
          variant="ghostDark"
          borderRadius="full"
          fontWeight="medium"
          mb={8}
          px={4}
          height="32px"
          _hover={{ textDecoration: "none", borderColor: "whiteAlpha.400" }}
          leftIcon={<Icon as={FaTag} color="#f5a97f" boxSize={3} />}
          rightIcon={<Box as="span">→</Box>}
        >
          {LATEST_VERSION} is now available
        </Button>

        {/* Headline */}
        <Heading
          as="h1"
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
          fontWeight="bold"
          letterSpacing="-0.03em"
          lineHeight="1.08"
          color="white"
          textAlign="center"
          mb={6}
        >
          Your Local AI
          <br />
          <Box
            as="span"
            bgGradient={gradients.accentText}
            bgClip="text"
            whiteSpace="nowrap"
          >
            {typedText}
            <Box
              as="span"
              color="#f5a97f"
              fontWeight="light"
              sx={{ animation: "caretBlink 1.1s step-end infinite" }}
            >
              |
            </Box>
          </Box>
        </Heading>

        {/* Subcopy */}
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="whiteAlpha.800"
          textAlign="center"
          maxW="620px"
          lineHeight="1.7"
          mb={10}
        >
          Free, open-source patient management with AI transcription, clinical
          note generation, and a built-in assistant — running entirely on your
          machine. Nothing leaves your computer.
        </Text>

        {/* CTAs */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          justify="center"
          mb={6}
        >
          <Button
            as={Link}
            href="https://github.com/bloodworks-io/phlox/releases/latest"
            isExternal
            size="lg"
            variant="cta"
            leftIcon={<FaDownload />}
            _hover={{ textDecoration: "none" }}
          >
            Download {LATEST_VERSION}
          </Button>
          <Button
            as={Link}
            href={docsHref}
            isExternal={docsIsExternal}
            size="lg"
            variant="ghostDark"
            leftIcon={<FaBook />}
            _hover={{ textDecoration: "none" }}
          >
            See the Docs
          </Button>
        </Stack>

        {/* Trust row + disclaimer */}
        <HStack
          spacing={{ base: 3, md: 5 }}
          flexWrap="wrap"
          justify="center"
          color="whiteAlpha.600"
          fontSize="sm"
          mb={{ base: 12, md: 16 }}
        >
          <HStack spacing={1.5}>
            <Icon as={FaLock} boxSize={3} />
            <Text>100% local</Text>
          </HStack>
          <HStack spacing={1.5}>
            <Icon as={FaCodeBranch} boxSize={3} />
            <Text>MIT licensed</Text>
          </HStack>
          <Text
            as="span"
            px={3}
            py={1}
            borderRadius="full"
            border="1px solid"
            borderColor="whiteAlpha.200"
            color="whiteAlpha.700"
            fontSize="xs"
          >
            ⚠️ Experimental software — feedback welcome
          </Text>
        </HStack>

        {/* Demo video */}
        <HeroVideo />

        {/* Scroll cue */}
        <Icon
          as={FaChevronDown}
          color="whiteAlpha.500"
          mt={{ base: 10, md: 12 }}
          boxSize={5}
          sx={{ animation: "floatY 2.4s ease-in-out infinite" }}
          aria-hidden
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
