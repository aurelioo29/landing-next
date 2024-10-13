import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useJourneyStore } from "@/hooks/useJourneyStore";
import PopupDetail from "../modal/PopupDetail";

const JourneySteps = ({ data }) => {
  const { currentStep, setStep } = useJourneyStore();

  return (
    <Box color="white" p={{ base: 4, md: 6 }} mb={20} id="journey" mr={6}>
      <Flex align="center" mb={8}>
        <Divider borderColor="customYellow.500" borderWidth={"1.9px"} />
        <Heading
          textAlign="center"
          color="customYellow.500"
          mx={5}
          whiteSpace="nowrap"
          fontSize={{ base: "2xl", md: "4xl" }}
          data-aos="fade-up"
        >
          Program Journey
        </Heading>
        <Divider borderColor="customYellow.500" borderWidth={"1.9px"} />
      </Flex>

      <Text mb={8} fontSize="lg" textAlign="center">
        Mulai karirmu di bidang data sebagai Data Analyst atau Data Scientist
        dengan program training bootcamp selama 12-14 minggu dan dapatkan
        fasilitas koneksi kerja seumur hidup ke 1.000+ perusahaan hiring
        partner.
      </Text>

      <Flex
        position="relative"
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
        minHeight="350px"
      >
        <Divider
          orientation="horizontal"
          borderColor="customYellow.500"
          position="absolute"
          left={0}
          right={0}
          top="50%"
        />

        {data.map((step, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            minW="220px"
            maxW="220px"
            mx={4}
            position="relative"
            onClick={() => setStep(step)}
            cursor="pointer"
            data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
          >
            <Flex
              bg={index % 2 === 0 ? "customYellow.500" : "#eaeaea"}
              color="black"
              p={4}
              borderRadius="2xl"
              shadow="lg"
              align="center"
              direction="column"
              height="200px"
              transform={
                index % 2 === 0 ? "translateY(-30%)" : "translateY(30%)"
              }
            >
              <Image
                src={step.image}
                alt={step.title}
                boxSize="55px"
                objectFit="contain"
                mb={4}
              />

              <Box textAlign="center">
                <Heading fontSize="md" mb={4}>
                  {step.title}
                </Heading>
                <Text fontSize="sm" mb={8}>
                  {step.description}
                </Text>
                <Button
                  variant="outline"
                  colorScheme="black"
                  size="sm"
                  _hover={{ bg: "customBlue.500", color: "white" }}
                >
                  Read More...
                </Button>
              </Box>
            </Flex>
          </Flex>
        ))}
      </Flex>

      {currentStep && <PopupDetail step={currentStep} />}
    </Box>
  );
};

export default JourneySteps;
