import React, { useState, useEffect } from 'react';
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
  UnorderedList,
  ListItem,
  Heading // Box is not used in the new version
} from '@chakra-ui/react';

const UsageWarningModal = ({ isOpen, onClose }) => {
  const [countdown, setCountdown] = useState(10);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setCountdown(10); // Reset countdown when modal opens
      setIsButtonDisabled(true);
      const timer = setInterval(() => {
        setCountdown(prevCountdown => {
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
    localStorage.setItem('phloxWarningAccepted', 'true');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} closeOnEsc={false} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Usage Warning</ModalHeader>
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <Text>
              Phlox is an experimental project intended for educational and personal <Text as="strong">experimentation</Text> ONLY.
            </Text>
            <Text fontWeight="bold">
              AS PROVIDED, IT IS NOT A CERTIFIED MEDICAL DEVICE AND MUST NOT BE USED IN ACTUAL CLINICAL SETTINGS or FOR CLINICAL DECISION-MAKING.
            </Text>
            <Text>
              AI outputs can be unreliable and inaccurate. Always verify information and use professional clinical judgment.
            </Text>
            <Text>
              For full details on limitations and risks, please read the <Text as="strong">Usage Warning</Text> section carefully before proceeding.
            </Text>
            <Heading as="h3" size="sm">Key limitations:</Heading>
            <UnorderedList spacing={2}>
              <ListItem>
                <Text as="strong">Experimental Code:</Text> The software is under active development and may contain bugs or behave unexpectedly.
              </ListItem>
              <ListItem>
                <Text as="strong">AI Hallucinations:</Text> The AI can generate incorrect or misleading information. Outputs are not a substitute for professional medical advice.
              </ListItem>
              <ListItem>
                <Text as="strong">No User Authentication:</Text> The current version lacks user login/security features, making it unsuitable for sensitive data.
              </ListItem>
              <ListItem>
                <Text as="strong">Not HIPAA/GDPR Compliant:</Text> The system does not meet regulatory standards for handling patient data.
              </ListItem>
            </UnorderedList>
            <Text fontWeight="bold">
              Use at your own risk and only for non-clinical, educational purposes unless you have implemented robust security measures and undertaken thorough validation.
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Text mr={3}>
            {isButtonDisabled ? `Accept button unlocks in ${countdown}s` : "You can now accept."}
          </Text>
          <Button
            colorScheme="blue"
            onClick={handleAccept}
            isDisabled={isButtonDisabled}
          >
            Accept
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UsageWarningModal;
