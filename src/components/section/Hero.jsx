import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  HStack,
  Flex,
} from "@chakra-ui/react";
import Style from "../../styles/Animation.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      bg="gray.100"
      h="65vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={4}
    >
      <Flex
        w="full"
        maxW="1200px"
        justifyContent="space-between"
        alignItems="center"
        px={6}
      >
        <Box textAlign="left" maxW="600px">
          <Heading as="h1" size="2xl" mb={4}>
            Transform Your Career with{" "}
            <Text as="span" color="green.400">
              Data Mastery !!!
            </Text>{" "}
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Join our immersive bootcamp designed for aspiring Data Analytics,
            Data Science, and Data Engineering experts. Gain the skills to
            thrive in today&apos;s data-driven world.
          </Text>

          <HStack spacing={4}>
            <Link href="#contact">
              <Button colorScheme="green" size="lg">
                Contact Us
              </Button>
            </Link>
            <Button variant="outline" colorScheme="green" size="lg">
              Lihat Jadwal & Biaya
            </Button>
          </HStack>
        </Box>

        <Box>
          <Image
            src="/assets/hero_section.jpg"
            alt="Hero Section"
            boxSize="470px"
            objectFit="cover"
            borderRadius="2xl"
            className={Style.heroImage}
          />
        </Box>
      </Flex>
    </Box>
  );
}
