import React from "react";
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

/**
 * Consistent section header: small uppercase eyebrow, heading, optional subtext.
 */
const SectionHeading = ({ eyebrow, title, subtext, align = "center" }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <MotionBox
      textAlign={align}
      maxW="640px"
      mx={align === "center" ? "auto" : 0}
      mb={{ base: 10, md: 14 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <Text
          variant="eyebrow"
          color={isDark ? "dark.textTeriary" : "light.textTeriary"}
          mb={3}
        >
          {eyebrow}
        </Text>
      )}
      <Heading as="h2" variant="h2" mb={subtext ? 4 : 0}>
        {title}
      </Heading>
      {subtext && (
        <Text
          fontSize={["md", "lg"]}
          color={isDark ? "dark.textSecondary" : "light.textSecondary"}
        >
          {subtext}
        </Text>
      )}
    </MotionBox>
  );
};

export default SectionHeading;
