import {
  Box,
  Flex,
  Heading,
  Divider,
  Button,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { programs } from "@/data/mainProgram";

const ProgramCards = () => {
  return (
    <Box mb={20} id="mainProgram" p={{ base: 8, md: 0 }} mr={{ md: 6 }}>
      <Flex align="center" mb={20} justifyContent="center"></Flex>

      {/* Program Cards */}
      <Flex
        justifyContent={"space-around"}
        direction={["column", "row"]}
        wrap="wrap"
        spacing={5}
      >
        {programs.map((program, index) => (
          <Flex
            key={index}
            bg={"#eaeaea"}
            p={5}
            borderRadius="xl"
            flex="1"
            maxW={{ base: "100%", sm: "300px" }}
            m={2}
            direction="column"
            align="center"
            textAlign="center"
            shadow="lg"
          >
            <Image
              src={program.image}
              alt={program.title}
              boxSize="80px"
              borderRadius="full"
              mb={4}
            />
            <Heading fontSize={{ base: "lg", md: "xl" }} mb={4}>
              {program.title}
            </Heading>
            <Text mb={4} fontSize={{ base: "sm", md: "md" }}>
              {program.description}
            </Text>
          </Flex>
        ))}
      </Flex>

      {/* Call to Action Button */}
      <Flex justify="center" mt={10}>
        <Link href="#kurikulum">
          <Button
            color={"white"}
            colorScheme="blue"
            size="lg"
            _hover={{ bg: "blue.500", color: "white" }}
            transition="all 0.3s"
          >
            Lihat Kurikulum
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default ProgramCards;
