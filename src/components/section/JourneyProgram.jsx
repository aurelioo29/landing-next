import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useJourneyStore } from "@/hooks/useJourneyStore";
import PopupDetail from "../modal/PopupDetail";

const JourneySteps = ({ data }) => {
  const { currentStep, setStep } = useJourneyStore();

  return (
    <Box bg="gray.50" p={{ base: 4, md: 10 }} mb={20} id="journey">
      <Heading color="green.400" mb={6} textAlign="center">
        Our Journey Program
      </Heading>
      <Text mb={8} fontSize="lg" textAlign="center">
        Mulai karirmu di bidang data sebagai Data Analyst atau Data Scientist
        dengan program training bootcamp selama 12-14 minggu dan dapatkan
        fasilitas koneksi kerja seumur hidup ke 1.000+ perusahaan hiring
        partner.
      </Text>

      <Flex
        direction={["column", "row"]}
        wrap="wrap"
        justify="center"
        align="center"
        maxW="1200px"
        mx="auto"
      >
        {data.map((step, index) => (
          <Flex
            key={index}
            bg={index % 2 === 0 ? "green.200" : "white"}
            color="black"
            p={5}
            borderRadius="md"
            flex="1"
            maxW={{ base: "90%", sm: "300px" }}
            minH="200px"
            m={2}
            direction="column"
            align="center"
            onClick={() => setStep(step)}
            cursor="pointer"
            textAlign="center"
            shadow="lg"
          >
            <Image src={step.image} alt={step.title} boxSize="50px" mb={4} />
            <Text fontWeight="bold">{step.title}</Text>
          </Flex>
        ))}
      </Flex>

      {currentStep && <PopupDetail step={currentStep} />}
    </Box>
  );
};

export default JourneySteps;
