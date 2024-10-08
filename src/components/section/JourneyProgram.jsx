import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { useJourneyStore } from "@/hooks/useJourneyStore";
import PopupDetail from "../modal/PopupDetail";

const JourneySteps = ({ data }) => {
  const {
    currentStep,
    setStep,
    stepsPerPage,
    currentPage,
    nextPage,
    resetPage,
  } = useJourneyStore();

  // Mengambil data sesuai dengan halaman
  const visibleSteps = data.slice(0, stepsPerPage * currentPage);

  return (
    <Box bg="gray.50" p={10} mb={20} id="journey">
      <Heading color="green.400" mb={8}>
        Our Journey Program
      </Heading>
      <Text mb={12} fontSize="lg">
        Mulai karirmu di bidang data sebagai Data Analyst atau Data Scientist
        dengan program training bootcamp selama 12-14 minggu dan dapatkan
        fasilitas koneksi kerja seumur hidup ke 1.000+ perusahaan hiring
        partner.
      </Text>

      <Flex direction={["column", "row"]} wrap="wrap">
        {visibleSteps.map((step, index) => (
          <Flex
            key={index}
            bg={index % 2 === 0 ? "green.100" : "white"}
            color="black"
            p={5}
            borderRadius="md"
            flex="1"
            maxW="300px"
            m={2}
            direction="column"
            align="center"
            onClick={() => setStep(step)}
            cursor="pointer"
            textAlign={"center"}
            shadow={"lg"}
          >
            <Image src={step.image} alt={step.title} boxSize="50px" mb={4} />
            <Text fontWeight="bold">{step.title}</Text>
          </Flex>
        ))}
      </Flex>

      {visibleSteps.length < data.length && (
        <Flex justify="center" mt={5}>
          <Button onClick={nextPage}>Lihat Selanjutnya</Button>
        </Flex>
      )}

      {currentStep && <PopupDetail step={currentStep} />}
    </Box>
  );
};

export default JourneySteps;
