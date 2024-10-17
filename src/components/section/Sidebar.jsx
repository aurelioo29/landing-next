import { useEffect } from "react";
import {
  Box,
  Link,
  VStack,
  Icon,
  Tooltip,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
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
    <>
      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        top={4}
        left={4}
      >
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          aria-label="Open Menu"
          size="lg"
        />
      </Box>

      <Box
        h="35vh"
        p={2}
        position="sticky"
        top={0}
        zIndex={1000}
        w="60px"
        display={{ base: "none", md: "block" }}
        color={"white"}
      >
        <VStack align="flex-start" spacing={4}>
          {linksData.map((link, index) => (
            <Tooltip label={link.label} placement="right" hasArrow key={index}>
              <Link href={link.href} _hover={{ textDecoration: "none" }}>
                <Box display="flex" alignItems="center">
                  <Icon as={link.icon} boxSize={6} />{" "}
                </Box>
              </Link>
            </Tooltip>
          ))}
        </VStack>
      </Box>

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
                  <Box display="flex" alignItems="center">
                    <Icon as={link.icon} boxSize={6} />
                    <Box ml={2}>{link.label}</Box>
                  </Box>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
