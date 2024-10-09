import { useEffect, useState } from "react";
import {
  Box,
  Link,
  Text,
  IconButton,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useSectionStore } from "@/hooks/sectionStore";
import { linksData } from "@/data/linkData";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      bg="white"
      h="fit-content"
      p={4}
      border="1px solid #FFFF"
      boxShadow="2xl"
      borderRadius="lg"
      position="sticky"
      top={0}
      zIndex={1000}
      w={{ base: "100%", md: "230px" }}
    >
      <HStack display={{ base: "flex", md: "none" }} justify="space-between">
        <Text fontWeight="bold" fontSize="xl">
          Our Menu
        </Text>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open Menu"
        />
      </HStack>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="flex-start">
              {linksData.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  _hover={{ textDecoration: "none" }}
                  onClick={onClose}
                >
                  <Text
                    fontWeight={activeSection === link.href ? "bold" : "normal"}
                    bg={
                      activeSection === link.href ? "green.400" : "transparent"
                    }
                    p={activeSection === link.href ? 1 : 0}
                    fontSize="md"
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <VStack
        align="flex-start"
        spacing={4}
        display={{ base: "none", md: "flex" }}
      >
        {linksData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            _hover={{ textDecoration: "none" }}
          >
            <Text
              fontWeight={activeSection === link.href ? "bold" : "normal"}
              bg={activeSection === link.href ? "green.200" : "transparent"}
              p={activeSection === link.href ? 1 : 0}
              fontSize={{ base: "sm", md: "md" }}
              borderRadius={"lg"}
            >
              {link.label}
            </Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
}
