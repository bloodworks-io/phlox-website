import React from "react";
import { Box, Flex, Circle, Text, Icon, HStack } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { shadows } from "../theme";

// TEMP (stand-in for the hero demo video — it's late).
// Showing a static image instead of <video>. To restore the demo video later:
//   1. drop public/videos/hero-demo.mp4 (1920x1080, ~30-60s) + public/images/hero-poster.webp
//   2. replace the <Box as="img"> below with the original <video> element
//      (autoPlay, muted, loop, playsInline, poster, onError fallback).
const IMAGE_SRC = `${process.env.PUBLIC_URL}/screenshot.webp`;

/**
 * Browser-chrome framed hero media. Currently renders a static screenshot
 * (see IMAGE_SRC) instead of the demo video.
 */
const HeroVideo = () => {
  return (
    <Box position="relative" w="100%" maxW="1100px" mx="auto">
      {/* Warm glow bleeding out from under the frame */}
      <Box
        position="absolute"
        inset="8% -4% -6% -4%"
        bg="radial-gradient(ellipse at center, rgba(255,140,66,0.22) 0%, rgba(138,173,244,0.10) 45%, transparent 70%)"
        filter="blur(48px)"
        borderRadius="full"
        zIndex={0}
        pointerEvents="none"
      />

      <Box
        position="relative"
        zIndex={1}
        borderRadius="xl"
        overflow="hidden"
        boxShadow={shadows.frameDark}
        border="1px solid"
        borderColor="whiteAlpha.100"
        bg="#181926"
      >
        {/* Browser chrome bar */}
        <Flex
          align="center"
          gap={3}
          px={4}
          py={2.5}
          bg="rgba(255,255,255,0.04)"
          borderBottom="1px solid"
          borderColor="whiteAlpha.100"
        >
          <HStack spacing={1.5}>
            <Circle size="11px" bg="#ed8796" />
            <Circle size="11px" bg="#eed49f" />
            <Circle size="11px" bg="#a6da95" />
          </HStack>
          <Flex
            flex="1"
            justify="center"
            opacity={0.85}
            display={{ base: "none", sm: "flex" }}
          >
            <Flex
              align="center"
              gap={2}
              bg="rgba(255,255,255,0.05)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="md"
              px={3}
              py={1}
              maxW="340px"
              w="100%"
              justify="center"
            >
              <Icon as={FaLock} boxSize={2.5} color="green.300" />
              <Text
                fontSize="xs"
                color="whiteAlpha.700"
                fontFamily="'Space Grotesk', sans-serif"
                letterSpacing="0.02em"
                isTruncated
              >
                localhost:5000
              </Text>
            </Flex>
          </Flex>
          {/* Spacer to balance the traffic lights */}
          <Box w="52px" display={{ base: "none", sm: "block" }} />
        </Flex>

        {/* Static image stand-in (temp) */}
        <Box
          as="img"
          src={IMAGE_SRC}
          alt="Phlox app demo"
          display="block"
          w="100%"
          sx={{ aspectRatio: "16 / 9" }}
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default HeroVideo;
