import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Grid,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box as="section" bg="gray.50" py={10} px={6} id="contact">
      <Flex
        justify="center"
        maxW="1200px"
        mx="auto"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          flex="1"
          textAlign="left"
          mb={{ base: 6, md: 0 }}
          mr={{ base: 0, md: 10 }}
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="blue.900"
          >
            Become a Certified Professional with Us!
          </Text>
          <Text mt={4} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
            Let us help you achieve your career goals. Register now and unlock
            your full potential.
          </Text>
        </Box>

        <Box
          flex="1"
          bg="white"
          p={6}
          rounded="md"
          boxShadow="md"
          w={{ base: "100%", md: "auto" }}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="Ex: John" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Ex: john@example.com"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input id="phone" placeholder="Ex: 0895379555408" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="company">Company</FormLabel>
              <Input id="company" placeholder="Ex: XL Axiata" />
            </FormControl>
          </Grid>

          <FormControl mt={4}>
            <FormLabel htmlFor="optional">Optional</FormLabel>
            <Textarea id="optional" placeholder="Optional" />
          </FormControl>

          <Button
            mt={6}
            colorScheme="blue"
            type="submit"
            width="full"
            size={{ base: "md", md: "lg" }}
          >
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
