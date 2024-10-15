import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import Style from "../../styles/Animation.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      position="relative"
      h={{ base: "auto", md: "95vh" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={4}
      py={{ base: 8, md: 0 }}
      overflow="hidden" // Important to avoid content overflow
    >
      {/* Background Blur Effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="#eaeaea" // Semi-transparent orange
        backdropFilter="blur(100px)" // Blur effect applied
        zIndex={-1} // Ensure it stays behind other content
      />

      <Flex
        w="full"
        maxW="1200px"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        px={10}
      >
        <Box
          textAlign={{ base: "center", md: "left" }}
          maxW={{ base: "100%", md: "600px" }}
          mb={{ base: 6, md: 0 }}
        >
          <Text as="h1" fontSize="4xl" mb={4} fontWeight={"semibold"}>
            Transform Your Career with Data Analyst, Data Scientist, and Data
            Engineer Bootcamp!
          </Text>
          <Text fontSize="lg" color="gray.500" mb={6}>
            Realize your dream of becoming a Data Expert without worrying about
            the cost. Study at the Data Expert Bootcamp and pay after graduation
            until you get a job!*
          </Text>
          <VStack
            spacing={4}
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={{ base: "center", md: "flex-start" }}
            mt={{ base: 4, md: 20 }}
          >
            <Text>Still in doubt? We are always here for you!</Text>
            <Link href="#contact">
              <Button
                _hover={{ bg: "customBlue.500" }}
                color={"white"}
                backgroundColor={"customBlue.500"}
                size="lg"
                width={{ base: "100%", md: "auto" }}
              >
                Contact Us
              </Button>
            </Link>
            {/* <Link href="#timeline">
              <Button
                variant="outline"
                colorScheme="green"
                size="lg"
                width={{ base: "100%", md: "auto" }}
              >
                Lihat Jadwal & Biaya
              </Button>
            </Link> */}
          </VStack>
        </Box>

        <Box flexShrink={0} mt={{ base: 4, md: 0 }}>
          <Image
            src="/assets/hero_section.jpg"
            alt="Hero Section"
            boxSize={{ base: "100%", md: "550px" }}
            objectFit="cover"
            borderTopRadius="2xl"
            borderBottomLeftRadius="2xl"
            borderBottomRightRadius={"100px"}
            className={Style.heroImage}
            border="5px double #1b1c51"
          />
        </Box>
      </Flex>
    </Box>
  );
}
