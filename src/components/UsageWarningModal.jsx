import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  VStack,
  Heading,
  useTheme,
  useColorMode,
} from "@chakra-ui/react";

const UsageWarningModal = ({ isOpen, onClose }) => {
  const [countdown, setCountdown] = useState(10);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const theme = useTheme();
  const { colorMode } = useColorMode();

  // Get theme colors based on current color mode
  const colors = colorMode === "light" ? theme.colors.light : theme.colors.dark;

  useEffect(() => {
    if (isOpen) {
      setCountdown(5); // Reset countdown when modal opens
      setIsButtonDisabled(true);
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            setIsButtonDisabled(false);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const handleAccept = () => {
    localStorage.setItem("phloxWarningAccepted", "true");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      closeOnEsc={false}
      isCentered
      size={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" }}
    >
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
      <ModalContent
        bg={colors.base}
        borderColor={colors.secondary}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="xl"
        mx={4}
      >
        <ModalHeader
          bg={colors.secondary}
          borderTopRadius="md"
          borderBottomWidth="1px"
          borderBottomColor={colors.secondary}
          py={4}
        >
          <Heading
            as="h3"
            size="lg"
            color={colors.textPrimary}
            fontFamily={theme.fonts.heading}
            textAlign="center"
          >
            ⚠️ Usage Warning
          </Heading>
        </ModalHeader>

        <ModalBody py={6} px={6}>
          <VStack spacing={4} align="stretch">
            <Text color={colors.textPrimary} fontSize="md" lineHeight="1.6">
              Phlox is an experimental project intended for educational and
              personal{" "}
              <Text as="strong" color={colors.textTeriary}>
                experimentation
              </Text>{" "}
              ONLY.
            </Text>

            <Text
              fontWeight="bold"
              color={colors.dangerButton}
              fontSize="md"
              lineHeight="1.6"
              bg={colorMode === "light" ? "red.50" : "red.900"}
              p={3}
              borderRadius="md"
              borderLeft="4px solid"
              borderLeftColor={colors.dangerButton}
            >
              AS PROVIDED, IT IS NOT A CERTIFIED MEDICAL DEVICE AND MUST NOT BE
              USED IN ACTUAL CLINICAL SETTINGS or FOR CLINICAL DECISION-MAKING.
            </Text>

            <Text color={colors.textSecondary} fontSize="md" lineHeight="1.6">
              AI outputs can be unreliable and inaccurate. Always verify
              information and use professional clinical judgment.
            </Text>

            <Text color={colors.textPrimary} fontSize="md" lineHeight="1.6">
              For full details on limitations and risks, please read the{" "}
              <Text as="strong" color={colors.textTeriary}>
                Usage Warning
              </Text>{" "}
              section carefully before proceeding.
            </Text>
          </VStack>
        </ModalBody>

        <ModalFooter
          bg={colors.secondary}
          borderBottomRadius="md"
          borderTopWidth="1px"
          borderTopColor={colors.secondary}
          justifyContent="center"
          py={4}
        >
          <Button
            variant="secondary"
            onClick={handleAccept}
            isDisabled={isButtonDisabled}
            size="lg"
            minW="120px"
            _disabled={{
              opacity: 0.6,
              cursor: "not-allowed",
            }}
          >
            {isButtonDisabled ? `Wait ${countdown}s` : "I Understand & Accept"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UsageWarningModal;
