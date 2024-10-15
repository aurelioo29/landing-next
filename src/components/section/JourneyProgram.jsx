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
    <Box
      color="white"
      p={{ base: 4, md: 6 }}
      mb={20}
      id="journey"
      mr={{ md: 6 }}
    >
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
          PROGRAM JOURNEY
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
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        wrap={{ base: "wrap", md: "nowrap" }} // Responsif wrap di mobile
        direction={{ base: "column", md: "row" }} // Kolom di mobile, baris di desktop
        gap={{ base: 8, md: 0 }} // Jarak antar item di mobile
        minHeight="350px"
      >
        <Divider
          orientation={{ base: "vertical", md: "horizontal" }} // Vertikal di mobile
          borderColor="customYellow.500"
          position="absolute"
          left={{ base: "50%", md: 0 }}
          top={{ base: 0, md: "50%" }}
          height={{ base: "100%", md: "1px" }}
          width={{ base: "1px", md: "100%" }}
        />

        {data.map((step, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            minW="220px"
            maxW="220px"
            mx={{ base: 0, md: 4 }}
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
                index % 2 === 0
                  ? { base: "none", md: "translateY(-30%)" }
                  : { base: "none", md: "translateY(30%)" }
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
