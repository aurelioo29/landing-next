import { Box, Flex, Text, Heading, Image, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function MethodDelivery() {
  const methods = [
    "Lectures and Tutorials: Comprehensive sessions covering theoretical concepts.",
    "Hands-on Labs: Practical sessions to implement the learned concepts.",
    "Projects: Real-world projects to apply data engineering techniques in practical scenarios.",
    "Quizzes and Exams: Periodic assessments to evaluate understanding and progress.",
    "Peer Discussions and Support: Interactive sessions for collaborative learning.",
  ];

  // Daftar URL gambar
  const images = [
    "/assets/hero_section.jpg",
    "/assets/analyst.png",
    "/assets/engineer.png",
    "/assets/scienst.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      backgroundColor={"#eaeaea"}
      display="flex"
      justifyContent="center" // Center content for better alignment
      alignItems="center"
      textAlign="center"
      id="method"
      borderRadius={"2xl"}
      p={10}
      mr={{ md: 6 }}
      mb={"20"}
      m={{ base: 4 }}
    >
      <Box>
        <Heading
          as="h2"
          size="2xl"
          mb={8}
          color={"customBlue.500"}
          data-aos="fade-up"
        >
          METHOD OF DELIVERY
        </Heading>
        <Flex
          maxW="1700px"
          direction={{ base: "column", md: "column", lg: "row" }} // Ubah md ke column untuk tampilan tablet
          align="center"
        >
          <Box
            pt={{ base: 4, md: 0 }}
            mb={{ base: 4, md: 0 }}
            flex="1"
            mr={{ base: 0, md: 6 }}
            data-aos="fade-right"
          >
            <Image
              src={images[currentImageIndex]}
              alt="Hero Section"
              boxSize="500px"
              objectFit="cover"
              borderRadius="2xl"
            />
          </Box>

          <Box
            flex="1"
            textAlign="center"
            ml={{ base: 0, md: 0 }} // Hapus margin di tablet untuk keselarasan
            mr={{ base: 0, md: 6 }}
            borderRadius="md"
            p={4}
            data-aos="fade-left"
          >
            <VStack spacing={4} align="center">
              {methods.map((method, index) => (
                <Box
                  key={index}
                  bg={index % 2 === 0 ? "customBlue.500" : "gray.100"}
                  color={index % 2 === 0 ? "white" : "black"}
                  p={4}
                  borderRadius="md"
                  boxShadow="md"
                  width="full"
                  data-aos="zoom-in"
                >
                  <Text fontSize="lg" textAlign="justify">
                    {method}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
