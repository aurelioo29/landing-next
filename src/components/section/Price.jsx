import {
  Box,
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Icon,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import {
  HiDocumentText,
  HiChatAlt2,
  HiBriefcase,
  HiAcademicCap,
} from "react-icons/hi";

const Price = () => {
  return (
    <Box mb={20} data-aos="fade-up">
      <Flex justifyContent="center">
        <Box
          maxW={{ base: "95%", md: "auto" }}
          m={{ base: 4 }}
          textAlign="center"
          boxShadow="lg"
        >
          <Box
            p={{ base: 3, md: 10 }}
            backgroundColor="#eaeaea"
            borderRadius="lg"
            boxShadow="xl"
            border="1px solid"
            borderColor="gray.200"
          >
            <Box
              backgroundColor="customBg.500"
              padding={3}
              borderTopRadius="lg"
            >
              <Text fontSize="2xl" color="white" fontWeight="bold">
                DATA EXPERT PROGRAM
              </Text>
            </Box>

            <Box backgroundColor="yellow.200" p={4}>
              <Text fontSize="md" color="red" fontWeight="bold" mt={2}>
                Start learning at the prices below for down payment
              </Text>
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                color="black"
                fontWeight="bold"
                mt={2}
              >
                Rp 2.000.000 ,-
              </Text>
              <Text fontSize="md" color="red" fontWeight="bold" mt={2}>
                Available partial payment, Income Share Agreement, and Pay Later
              </Text>
            </Box>

            <VStack
              borderBottomRadius={"lg"}
              color={"white"}
              p={4}
              backgroundColor="customBg.500"
              divider={
                <StackDivider borderColor="gray.400" borderWidth={"5px"} />
              }
              spacing={4}
              align="stretch"
            >
              <Text fontSize="xl">
                You&apos;ll get a 5% discount if you pay the full payment before
                the training starts!
              </Text>
              <Text fontSize="xl">
                You&apos;ll get another 5% discount if your attendance and
                grades are excellent!
              </Text>
              <Text fontSize="xl">
                You&apos;ll get a 5% discount if you secure a job through our
                Multimatics team!
              </Text>
            </VStack>

            <Box mt={6} textAlign="center">
              <Text color="red.500" fontWeight="bold" mb={4}>
                Registration closes on 26 October 2024
              </Text>
              <Button
                colorScheme="blue"
                size={{ base: "md", md: "lg" }}
                fontSize={{ base: "md", md: "lg" }}
                _hover={{ bg: "customBg.700" }}
              >
                Contact US
              </Button>
            </Box>

            {/* Benefit Section */}
            <Box mt={10} data-aos="fade-up">
              <Text fontSize="2xl" fontWeight="bold" mb={6} >
                OUR BENEFIT JOIN WITH US
              </Text>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                gap={6}
              >
                {benefits.map((benefit, index) => (
                  <GridItem
                    key={index}
                    bg="customBlue.500"
                    borderRadius="md"
                    p={6}
                    textAlign="center"
                    color="white"
                    data-aos="zoom-in"
                  >
                    <Icon as={benefit.icon} boxSize={10} />
                    <Text fontWeight="medium" mt={2}>
                      {benefit.text}
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const benefits = [
  { icon: HiBriefcase, text: "Relevant Data Training Curriculum" },
  { icon: HiDocumentText, text: "Easy to Get Job" },
  { icon: HiChatAlt2, text: "Career Support" },
  { icon: HiAcademicCap, text: "Free Access Platform Course Learning" },
];

export default Price;
