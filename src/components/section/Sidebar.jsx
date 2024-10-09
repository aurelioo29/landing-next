import { useEffect } from "react";
import { VStack, Box, Button, Link, Text } from "@chakra-ui/react";
import { useSectionStore } from "@/hooks/sectionStore";
import { linksData } from "@/data/linkData";

export default function Sidebar() {
  const activeSection = useSectionStore((state) => state.activeSection);
  const setActiveSection = useSectionStore((state) => state.setActiveSection);

  useEffect(() => {
    const handleScroll = () => {
      linksData.forEach((link) => {
        const section = document.querySelector(link.href);
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]);

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
            <Text
              fontWeight={activeSection === link.href ? "bold" : "normal"}
              bg={activeSection === link.href ? "green.100" : "transparent"}
              p={activeSection === link.href ? 1 : 0}
            >
              {link.label}
            </Text>
          </Link>
        ))}
        <Button colorScheme="green" w="full" size="md">
          <Link href="#contact">Hubungi Kami</Link>
        </Button>
      </VStack>
    </Box>
  );
}
