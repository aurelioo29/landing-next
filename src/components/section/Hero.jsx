import { Box, Text, Button, VStack, Image, Flex } from "@chakra-ui/react";
import Style from "../../styles/Animation.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      position="relative"
      h={{ base: "auto", lg: "95vh" }} // Di desktop (lg) baru full height
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={4}
      py={{ base: 8, lg: 0 }}
      overflow="hidden"
    >
      {/* Background Blur Effect */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="#eaeaea"
        backdropFilter="blur(100px)"
        zIndex={-1}
      />

      <Flex
        w="full"
        maxW="1200px"
        direction={{ base: "column", lg: "row" }} // Tablet dan HP kolom, laptop baris
        justifyContent="space-around"
        alignItems="center"
        px={4}
        gap={{ base: 8, lg: 22 }} // Jarak antar elemen diatur
      >
        {/* Konten Teks */}
        <Box
          textAlign={{ base: "center", lg: "left" }} // Di laptop align kiri
          maxW={{ base: "100%", lg: "600px" }}
          mb={{ base: 6, lg: 0 }}
        >
          <Text as="h1" fontSize="4xl" mb={4} fontWeight="semibold">
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
            justifyContent={{ base: "center", lg: "flex-start" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            mt={{ base: 4, lg: 20 }}
          >
            <Text>Still in doubt? We are always here for you!</Text>
            <Link href="#contact">
              <Button
                _hover={{ bg: "customBlue.500" }}
                color="white"
                backgroundColor="customBlue.500"
                size="lg"
                width={{ base: "100%", lg: "auto" }} // Tombol full di HP dan auto di desktop
              >
                Contact Us
              </Button>
            </Link>
          </VStack>
        </Box>

        {/* Gambar Hero */}
        <Box flexShrink={0} mt={{ base: 4, lg: 0 }}>
          <Image
            src="/assets/hero_section.jpg"
            alt="Hero Section"
            boxSize={{ base: "100%", lg: "550px" }}
            objectFit="cover"
            borderRadius="2xl"
            className={Style.heroImage}
            border="5px double #1b1c51"
          />
        </Box>
      </Flex>
    </Box>
  );
}
