import { Box, Grid, Heading, Image, Text, Flex } from "@chakra-ui/react";
import { ClientData } from "@/data/clientData";

const ClientLogos = () => {
  return (
    <Box
      id="client"
      textAlign="center"
      my={10}
      backgroundColor="#eaeaea"
      mx="auto"
      p={{ base: 6, md: 10 }}
      m={{ base: 4, md: 0 }}
      maxW={{ base: "1200px", md: "99%" }}
      borderRadius="2xl"
      shadow="2xl"
      mb={50}
      mr={{ md: 6 }}
    >
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "5xl" }}
        textColor="customBlue.500"
        mx={4}
        mb={{ base: 4, md: 6 }}
        data-aos="zoom-in"
      >
        LIST OF MULTIMATICS
      </Heading>

      <Text
        mb={8}
        fontSize={{ base: "lg", md: "2xl" }}
        color="black"
        fontWeight="semibold"
        data-aos="zoom-out-up"
      >
        PROGRAM TRAINING CLIENTS
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)", // 2 kolom untuk mobile
          sm: "repeat(3, 1fr)", // 3 kolom untuk tablet kecil
          md: "repeat(5, 1fr)", // 5 kolom untuk tablet besar
          lg: "repeat(7, 1fr)", // 7 kolom untuk desktop
        }}
        gap={6}
        justifyItems="center"
        alignItems="center"
      >
        {ClientData.map((client, index) => (
          <Box
            key={index}
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize={{ base: "95px", md: "135px" }}
            _hover={{
              transform: "scale(1.1)",
              transition: "0.3s ease-in-out",
            }}
            transition="0.3s ease-in-out"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
          >
            <Image
              src={client.logo}
              alt={client.name}
              objectFit="contain"
              maxHeight="150px"
              maxWidth="120px"
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ClientLogos;
