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
      h="65vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={4}
      mb={10}
      id="method"
    >
      <Flex
        w="full"
        maxW="1200px"
        justifyContent="space-between"
        alignItems="center"
        px={6}
        direction={["column", "row"]} // Stack on small screens and row on larger screens
      >
        <Box pt={14}>
          <Image
            src="/assets/hero_section.jpg"
            alt="Hero Section"
            boxSize="470px"
            objectFit="cover"
            borderRadius="2xl"
            className="heroImage"
          />
        </Box>

        <Box flex="1" textAlign="left" ml={[0, 6]}>
          <VStack spacing={4} align="start">
            {" "}
            {/* Align items to start */}
            <Heading as="h2" size="lg" textAlign="left" mb={4}>
              {" "}
              {/* Heading positioned on the left */}
              Method of Delivery
            </Heading>
            {methods.map((method, index) => (
              <Box
                key={index}
                p={4}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                width="full" // Ensure it takes the full width of the container
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
