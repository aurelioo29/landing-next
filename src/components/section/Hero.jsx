import { Box, Text, Button, VStack, Image, Flex } from "@chakra-ui/react";
import Style from "../../styles/Animation.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      position="relative"
      h={{ base: "auto", lg: "95vh" }}
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
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-around"
        alignItems="center"
        px={4}
        gap={{ base: 8, lg: 22 }}
      >
        {/* Konten Teks */}
        <Box
          textAlign={{ base: "center", lg: "left" }} 
          maxW={{ base: "100%", lg: "600px" }}
          mb={{ base: 6, lg: 0 }}
        >
          <Text as="h1" fontSize="4xl" mb={4} fontWeight="semibold">
            Ubah Karier Anda dengan Bootcamp Data Analyst, Data Scientist, serta
            Data Engineer Expert!
          </Text>
          <Text fontSize="lg" color="gray.500" mb={6}>
            Wujudkan impian Anda untuk menjadi Data Expert tanpa perlu khawatir
            tentang biaya. Belajar di sini bisa bayar setelah lulus sampai Anda
            mendapat pekerjaan!*
          </Text>
          <VStack
            spacing={4}
            justifyContent={{ base: "center", lg: "flex-start" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            mt={{ base: 4, lg: 20 }}
          >
            <Text>Masi ragu? Kami selalu ada untuk anda!</Text>
            <Link href="#contact">
              <Button
                _hover={{ bg: "customBg.500" }}
                color="white"
                backgroundColor="customBg.500"
                size="lg"
                width={{ base: "100%", lg: "auto" }}
              >
                Kontak Kami
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
            border="5px double #222222"
          />
        </Box>
      </Flex>
    </Box>
  );
}
