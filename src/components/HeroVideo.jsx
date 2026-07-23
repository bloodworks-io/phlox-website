import React, { useState } from "react";
import { Box, Flex, Circle, Text, Icon, HStack } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import MediaPlaceholder from "./MediaPlaceholder";
import { shadows } from "../theme";

const VIDEO_SRC = `${process.env.PUBLIC_URL}/videos/hero-demo.mp4`;
const POSTER_SRC = `${process.env.PUBLIC_URL}/images/hero-poster.webp`;

/**
 * Browser-chrome framed hero demo video.
 *
 * Drop the real files in and this upgrades automatically — no code change:
 *   public/videos/hero-demo.mp4     1920×1080, ~30–60s, no audio needed
 *   public/images/hero-poster.webp  1920×1080 first-frame / dashboard shot
 *
 * Until then, a sized placeholder describes exactly what to record.
 */
const HeroVideo = () => {
  const [videoFailed, setVideoFailed] = useState(false);

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

        {/* Video / placeholder */}
        {videoFailed ? (
          <Box p={{ base: 3, md: 4 }}>
            <MediaPlaceholder
              dark
              ratio={16 / 9}
              label="Hero Demo Video"
              dimensions="1920 × 1080 · MP4 · ~30–60s"
              description="Screen recording of the web app at localhost:5000: hit record → speak → live transcript → generate note → review tasks → generate letter. Record fullscreen in dark mode with a 1920×1080 viewport, cropped to the page (no real browser chrome — the frame above provides it). No audio needed; zoom/pan edits welcome. Save as public/videos/hero-demo.mp4 with a first-frame poster at public/images/hero-poster.webp"
            />
          </Box>
        ) : (
          <Box
            as="video"
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            autoPlay
            muted
            loop
            playsInline
            display="block"
            w="100%"
            sx={{ aspectRatio: "16 / 9" }}
            objectFit="cover"
            onError={() => setVideoFailed(true)}
            aria-label="Phlox UI demo video"
          />
        )}
      </Box>
    </Box>
  );
};

export default HeroVideo;
