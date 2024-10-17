import { Box, Grid, Heading, Image } from "@chakra-ui/react";
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
        textColor="customBg.500"
        mx={4}
        mb={{ base: 4, md: 6 }}
        data-aos="zoom-in"
      >
        DAFTAR KLIEN MULTIMATICS
      </Heading>

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
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
            boxSize={{ base: "90px", sm: "110px", md: "130px" }} 
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
              maxHeight="100px" 
              maxWidth="120px"
              p={2}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ClientLogos;
