import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { ClientData } from "@/data/clientData";

const ClientLogos = () => {
  return (
    <Box
      textAlign="center"
      my={10}
      backgroundColor={"#eaeaea"}
      mr={6}
      p={10}
      borderRadius={"2xl"}
      shadow={"2xl"}
    >
      <Flex align="center" justify="center" mb={2}>
        <Divider
          borderColor="customYellow.500"
          borderWidth="2.0px"
          width="30%"
        />

        {/* Mengurangi margin horizontal (mx) */}
        <Heading as="h1" fontSize="5xl" textColor="customYellow.500" mx={4}>
          LIST OF MULTIMATICS
        </Heading>

        <Divider
          borderColor="customYellow.500"
          borderWidth="2.0px"
          width="30%"
        />
      </Flex>

      <Text mb={5} fontSize="5xl" color="black" fontWeight={"semiBold"}>
        PROGRAM TRAINING CLIENTS
      </Text>

      <Grid
        templateColumns="repeat(7, 1fr)" // Menggunakan 7 kolom
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
            boxSize="135px"
            _hover={{ transform: "scale(1.1)", transition: "0.3s ease-in-out" }}
            transition="0.3s ease-in-out"
            data-aos="zoom-out-up"
          >
            <Image
              src={client.logo}
              alt={client.name}
              objectFit="contain"
              maxHeight="200px"
              maxWidth="150px"
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ClientLogos;
