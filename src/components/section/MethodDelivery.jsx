import { Box, Flex, Text, Heading, Image, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { methods } from "@/data/methodDelivery";
import { images } from "@/data/imageDelivery";

export default function MethodDelivery() {
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
      justifyContent="center"
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
          color={"customBg.500"}
          data-aos="fade-up"
        >
          PENYAMPAIAN MATERI
        </Heading>
        <Flex
          maxW="1700px"
          direction={{ base: "column", md: "column", lg: "row" }}
          align="center"
        >
          <Box
            mb={{ base: 2, md: 0 }}
            flex="1"
            mr={{ base: 0, md: 6 }}
            data-aos="fade-right"
            borderRadius={"2xl"}
          >
            <Image
              src={images[currentImageIndex]}
              alt="Hero Section"
              boxSize={{ base: "300px", md: "560px", lg: "720px" }}
              objectFit="contain"
            />
          </Box>

          <Box
            flex="1"
            textAlign="center"
            ml={{ base: 0, md: 0 }}
            mr={{ base: 0, md: 6 }}
            borderRadius="md"
            p={4}
            data-aos="fade-left"
          >
            <VStack spacing={10} align="center">
              {methods.map((method, index) => (
                <Box
                  fontWeight={"bold"}
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
