import { Box, Flex, Text, Heading, Image, VStack } from "@chakra-ui/react";

export default function MethodDelivery() {
  const methods = [
    "Lectures and Tutorials: Comprehensive sessions covering theoretical concepts.",
    "Hands-on Labs: Practical sessions to implement the learned concepts.",
    "Projects: Real-world projects to apply data engineering techniques in practical scenarios.",
    "Quizzes and Exams: Periodic assessments to evaluate understanding and progress.",
    "Peer Discussions and Support: Interactive sessions for collaborative learning.",
  ];

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
      mr={6}
    >
      <Box>
        <Heading as="h2" size="lg" mb={8}>
          Method of Delivery
        </Heading>
        <Flex
          w="full"
          maxW="1200px"
          px={6}
          direction={{ base: "column", md: "row" }}
          align="center"
          justifyContent={"space-between"}
        >
          <Box
            pt={{ base: 4, md: 0 }}
            mb={{ base: 4, md: 0 }}
            flex="1"
            mr={{ base: 0, md: 6 }}
          >
            <Image
              src="/assets/hero_section.jpg"
              alt="Hero Section"
              boxSize="500px"
              objectFit="cover"
              borderRadius="2xl"
            />
          </Box>

          <Box
            flex="1"
            textAlign="center"
            ml={{ base: 0, md: 6 }}
            mr={{ base: 0, md: 6 }}
            borderRadius="md" // Menambahkan border radius jika diinginkan
            p={4} // Tambahkan padding jika diinginkan
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
