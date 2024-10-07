import { VStack, Box, Button, Link, Text } from "@chakra-ui/react";
import { linksData } from "@/data/linkData";

export default function Sidebar() {
  return (
    <Box
      w="230px"
      bg="white"
      h={"320px"}
      p={4}
      border="1px solid #FFFF"
      boxShadow={"2xl"}
      borderRadius={"lg"}
      position="sticky"
      zIndex={1000}
    >
      <VStack align="flex-start" spacing={4}>
        &#125;
        {/* Iterasi Link Dinamis */}
        {linksData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            _hover={{ textDecoration: "none" }}
          >
            <Text>{link.label}</Text>
          </Link>
        ))}
        {/* Tombol Hubungi Kami */}
        <Button colorScheme="green" w="full" size="md">
          <Link href="#contact">Hubungi Kami</Link>
        </Button>
      </VStack>
    </Box>
  );
}
