import React, { useState } from "react";
import { Box, Flex, Circle, Text, Icon, HStack } from "@chakra-ui/react";
import { FaLock, FaPlay, FaRegClock } from "react-icons/fa";
import { shadows } from "../theme";

// The hero shows the app screenshot with a play-button overlay; clicking it
// swaps in the promo video (with sound, started by the user's click).
const IMAGE_SRC = `${process.env.PUBLIC_URL}/screenshot.webp`;
const VIDEO_SRC = `${process.env.PUBLIC_URL}/videos/phlox-promo.mp4`;

/**
 * Browser-chrome framed hero media: screenshot poster + play button,
 * replaced by the promo video on click.
 */
const HeroVideo = () => {
  const [playing, setPlaying] = useState(false);
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

        {/* Poster with play button, or the promo video once started */}
        {playing ? (
          <Box
            as="video"
            src={VIDEO_SRC}
            controls
            autoPlay
            playsInline
            poster={IMAGE_SRC}
            display="block"
            w="100%"
            sx={{ aspectRatio: "16 / 9" }}
            bg="#181926"
          />
        ) : (
          <Box
            position="relative"
            role="group"
            cursor="pointer"
            onClick={() => setPlaying(true)}
            title="Play the Phlox promo (46s, with sound)"
          >
            <Box
              as="img"
              src={IMAGE_SRC}
              alt="Phlox app demo"
              display="block"
              w="100%"
              sx={{ aspectRatio: "16 / 9" }}
              objectFit="cover"
            />
            {/* Play button */}
            <Flex
              position="absolute"
              inset={0}
              align="center"
              justify="center"
              bg="rgba(24,25,38,0.25)"
              transition="background 0.25s ease"
              _groupHover={{ bg: "rgba(24,25,38,0.45)" }}
            >
              <Flex
                align="center"
                justify="center"
                w={{ base: "72px", md: "92px" }}
                h={{ base: "72px", md: "92px" }}
                borderRadius="full"
                bg="linear-gradient(135deg, #f5a97f 0%, #ff8c42 100%)"
                boxShadow="0 12px 44px rgba(255,140,66,0.45)"
                transition="transform 0.25s ease"
                _groupHover={{ transform: "scale(1.08)" }}
              >
                <Icon as={FaPlay} color="#181926" boxSize={{ base: 6, md: 8 }} ml={1} />
              </Flex>
              {/* Duration pill */}
              <Flex
                position="absolute"
                bottom={{ base: 3, md: 5 }}
                right={{ base: 3, md: 5 }}
                align="center"
                gap={2}
                px={3}
                py={1.5}
                borderRadius="full"
                bg="rgba(24,25,38,0.75)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(6px)"
              >
                <Icon as={FaRegClock} boxSize={3} color="whiteAlpha.700" />
                <Text fontSize="xs" color="whiteAlpha.800" fontFamily="'Space Grotesk', sans-serif">
                  0:47
                </Text>
              </Flex>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HeroVideo;
