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
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={4}
      id="method"
      mb="20"
    >
      <Flex
        w="full"
        maxW="1200px"
        px={6}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Box
          pt={{ base: 4, md: 0 }}
          mb={{ base: 4, md: 0 }}
          textAlign="center"
        >
          <Image
            src="/assets/hero_section.jpg"
            alt="Hero Section"
            boxSize="470px"
            objectFit="cover"
            borderRadius="2xl"
          />
        </Box>

        <Box flex="1" textAlign="left" ml={{ base: 0, md: 6 }}>
          <VStack spacing={4} align="start">
            <Heading as="h2" size="lg" mb={4}>
              Method of Delivery
            </Heading>
            {methods.map((method, index) => (
              <Box
                key={index}
                p={4}
                bg="white"
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
  );
}
