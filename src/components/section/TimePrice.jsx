import { Box, Button, Center, Grid, Heading, Text } from "@chakra-ui/react";

export default function TimePrice() {
  return (
    <Box id="timeprice" mb="20">
      <Heading as="h1" size="xl" mb={4} color="teal.600">
        Time & Price
      </Heading>
      <Text fontSize="lg" color="gray.700" mb={10}>
        Temukan jadwal kelas yang tersedia sesuai dengan metode belajar yang
        diinginkan!
      </Text>
      <Box
        maxW="auto"
        mx="auto"
        margin={10}
        textAlign="center"
        boxShadow={"lg"}
      >
        <Box
          p={10}
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="xl"
          border="1px solid"
          borderColor="gray.200"
        >
          <Box
            backgroundColor={"green.400"}
            padding={3}
            textAlign={"center"}
            borderTopRadius={"lg"}
          >
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4} px={4}>
              <Text fontSize="md" color="black" textAlign="center">
                Intake October 2024
              </Text>
              <Text fontSize="md" color="black" textAlign="center">
                28 October 2024 - 25 February 2025
              </Text>
              <Text fontSize="md" color="black" textAlign="center">
                Mon-Thu, 19:00 - 22:00
              </Text>
            </Grid>
          </Box>

          <Box
            backgroundColor="yellow.50"
            p={6}
            borderBottomRadius="lg"
            textAlign="center"
            border="1px solid"
            borderColor="yellow.200"
          >
            <Text fontSize="lg" color="orange.600" fontWeight="bold">
              Special Promo
            </Text>
            <Text
              fontSize="3xl"
              textDecoration="line-through"
              color="gray.400"
              fontWeight="semibold"
            >
              Rp24.975.000*
            </Text>
            <Text fontSize="4xl" color="green.600" fontWeight="bold" mt={2}>
              Rp15.000.000*
            </Text>
            <Text fontSize="sm" color="orange.600" fontWeight="bold" mt={2}>
              Kuota Promo Hanya Tersisa 3 Lagi!
            </Text>
            <Text fontSize="sm" color="gray.500" mt={4}>
              Tersedia pembayaran cicilan hingga 12x mulai dari Rp1
              jutaan*/bulan
            </Text>
          </Box>

          <Box mt={6} textAlign="center">
            <Text color="red.500" fontWeight="bold" mb={4}>
              Pendaftaran ditutup pada 23 October 2024
            </Text>
            <Button colorScheme="teal" size="lg" px={8}>
              Dapatkan Harga Promo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
