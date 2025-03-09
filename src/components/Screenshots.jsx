import React from "react";
import { Image, useColorMode } from "@chakra-ui/react";

const Screenshots = ({ lightSrc, darkSrc, alt, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === "dark" ? darkSrc : lightSrc}
      alt={alt}
      {...props}
    />
  );
};

export default Screenshots;
