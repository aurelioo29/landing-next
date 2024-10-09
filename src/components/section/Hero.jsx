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
      h={{ base: "auto", md: "65vh" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={4}
      py={{ base: 8, md: 0 }}
    >
      <Flex
        w="full"
        maxW="1200px"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        px={6}
      >
        <Box
          textAlign={{ base: "center", md: "left" }} 
          maxW={{ base: "100%", md: "600px" }}
          mb={{ base: 6, md: 0 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Transform Your Career with{" "}
            <Text as="span" color="green.400">
              Data Mastery !!!
            </Text>
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Join our immersive bootcamp designed for aspiring Data Analytics,
            Data Science, and Data Engineering experts. Gain the skills to
            thrive in today&apos;s data-driven world.
          </Text>
          <VStack
            spacing={4}
            justifyContent={{ base: "center", md: "flex-start" }} 
            alignItems={{ base: "center", md: "flex-start" }}
            mt={{ base: 4, md: 0 }} 
          >
            <Link href="#contact">
              <Button
                colorScheme="green"
                size="lg"
                width={{ base: "100%", md: "auto" }}
              >
                Contact Us
              </Button>
            </Link>
            <Link href="#timeprice">
              <Button
                variant="outline"
                colorScheme="green"
                size="lg"
                width={{ base: "100%", md: "auto" }}
              >
                Lihat Jadwal & Biaya
              </Button>
            </Link>
          </VStack>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
        >
          <Image
            src="/assets/hero_section.jpg"
            alt="Hero Section"
            boxSize={{ base: "100%", md: "470px" }}
            objectFit="cover"
            borderRadius="2xl"
            className={Style.heroImage}
          />
        </Box>
      </Flex>
    </Box>
  );
}
