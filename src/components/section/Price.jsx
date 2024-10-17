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
import Link from "next/link";
import { benefits } from "@/data/benefitData";

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
                HARGA PROGRAM DATA EXPERT
              </Text>
            </Box>

            <Box backgroundColor="yellow.200" p={4}>
              <Text fontSize="md" color="red" fontWeight="bold" mt={2}>
                Mulailah belajar dengan harga di bawah ini untuk pembayaran awal
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
                Tersedia partial payment, Income Share Agreement, serta Pay
                Later setelah kerja
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
                Anda akan mendapatkan diskon 5% jika Anda membayar penuh sebelum
                pelatihan dimulai!
              </Text>
              <Text fontSize="xl">
                Anda akan mendapatkan diskon 5% lagi jika kehadiran dan nilai
                Anda sangat baik!
              </Text>
              <Text fontSize="xl">
                Anda akan mendapatkan diskon 5% jika Anda mendapatkan pekerjaan
                melalui tim Multimatics kami!
              </Text>
            </VStack>

            <Box mt={6} textAlign="center">
              <Text color="red.500" fontWeight="bold" mb={4}>
                Pendaftaran ditutup pada tanggal 26 Oktober 2024
              </Text>
              <Link href={"#contact"}>
                <Button
                  colorScheme="blue"
                  size={{ base: "md", md: "lg" }}
                  fontSize={{ base: "md", md: "lg" }}
                  _hover={{ bg: "customBg.700" }}
                >
                  Kontak Kami
                </Button>
              </Link>
            </Box>

            {/* Benefit Section */}
            <Box mt={10} data-aos="fade-up">
              <Text fontSize="2xl" fontWeight="bold" mb={6}>
                MANFAAT BERGABUNG DENGAN KAMI
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

export default Price;
