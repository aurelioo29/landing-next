import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Image,
} from "@chakra-ui/react";
import { useJourneyStore } from "@/hooks/useJourneyStore";

const PopupDetail = ({ step }) => {
  const { setStep } = useJourneyStore();

  return (
    <Modal
      isOpen={step !== null}
      onClose={() => setStep(null)}
      size="lg"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{step.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box textAlign="center" mb={4}>
            <Image src={step.image} alt={step.title} boxSize="100px" mb={4} />
            <Text>{step.detail}</Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PopupDetail;
