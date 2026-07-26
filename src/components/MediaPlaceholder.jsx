import React from "react";
import { Flex, Icon, Text, Badge } from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";

/**
 * Sized placeholder for an asset that doesn't exist yet.
 * Renders a dashed, intentionally-styled box describing exactly what
 * should be captured and at what dimensions. Swap out for the real
 * asset when it's ready.
 *
 * Props:
 *  - label:       short title, e.g. "SCREENSHOT: Transcription view"
 *  - dimensions:  e.g. "1200 × 750"
 *  - description: what the asset should contain
 *  - ratio:       aspect ratio (width / height), default 16 / 10
 *  - dark:        force dark-surface styling (for the dark hero)
 */
const MediaPlaceholder = ({
  label,
  dimensions,
  description,
  ratio = 16 / 10,
  dark = false,
  ...props
}) => {
  const borderColor = dark ? "whiteAlpha.350" : "blackAlpha.300";
  const fg = dark ? "whiteAlpha.700" : "gray.500";
  const fgStrong = dark ? "whiteAlpha.900" : "gray.600";
  const surface = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
      w="100%"
      sx={{ aspectRatio: String(ratio) }}
      bg={surface}
      border="1.5px dashed"
      borderColor={borderColor}
      borderRadius="lg"
      px={6}
      py={4}
      gap={2}
      {...props}
    >
      <Icon as={FaImage} fontSize="2xl" color={fg} />
      <Text
        fontSize="xs"
        fontWeight="bold"
        letterSpacing="0.16em"
        textTransform="uppercase"
        color={fgStrong}
      >
        {label}
      </Text>
      <Badge
        variant="subtle"
        colorScheme="orange"
        fontSize="0.65rem"
        borderRadius="full"
        px={2}
      >
        {dimensions}
      </Badge>
      {description && (
        <Text fontSize="xs" color={fg} maxW="420px" lineHeight="1.5">
          {description}
        </Text>
      )}
    </Flex>
  );
};

export default MediaPlaceholder;
