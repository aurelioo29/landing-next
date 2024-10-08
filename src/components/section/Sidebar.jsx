import { VStack, Box, Button, Link, Text } from "@chakra-ui/react";
import { linksData } from "@/data/linkData";

export default function Sidebar() {
  return (
    <Box
      w="230px"
      bg="white"
      h="fit-content"
      p={4}
      border="1px solid #FFFF"
      boxShadow="2xl"
      borderRadius="lg"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <VStack align="flex-start" spacing={4}>
        {linksData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            _hover={{ textDecoration: "none" }}
          >
            <Text>{link.label}</Text>
          </Link>
        ))}
        <Button colorScheme="green" w="full" size="md">
          <Link href="#contact">Hubungi Kami</Link>
        </Button>
      </VStack>
    </Box>
  );
}
