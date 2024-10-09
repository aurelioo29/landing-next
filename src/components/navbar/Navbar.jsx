import {
  Box,
  Flex,
  Link,
  Input,
  Icon,
  Image,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav" bg="black" color="white" py={4} px={8}>
      <Flex
        maxW="1300px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >

        <Box>
          <Image
            src="/assets/multimatics_logo.png"
            width={150}
            height={50}
            alt="Multimatics Logo"
          />
        </Box>

        <Icon
          as={isOpen ? FaTimes : FaBars}
          color="white"
          display={["block", "none"]}
          boxSize={6}
          onClick={onToggle}
          cursor="pointer"
        />

        <Flex
          gap={6}
          alignItems="center"
          display={["none", "flex"]}
          flexWrap="wrap" 
        >
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            About
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            Academy
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            Consultancy
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            Campus Affiliate
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            Online Learning
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            Insight
          </Link>
          <Link href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
            Contact
          </Link>
        </Flex>

        <Collapse in={isOpen}>
          <Flex
            direction="column"
            alignItems="flex-start"
            display={["flex", "none"]}
            gap={2}
            mt={2}
            bg="black" 
            px={4} 
            borderRadius="md" 
          >
            <Link
              href="#"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              About
            </Link>
            <Link
              href="#"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              Academy
            </Link>
            <Link
              href="#"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              Consultancy
            </Link>
            <Link
              href="#"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              Campus Affiliate
            </Link>
            <Link
              href="#"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              Online Learning
            </Link>
            <Link
              href="#"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              Insight
            </Link>
            <Link
              href="#"
              fontSize="sm"
              _hover={{ textDecoration: "underline" }}
            >
              Contact
            </Link>
          </Flex>
        </Collapse>

        <Flex
          as="form"
          alignItems="center"
          bg="gray.700"
          p={2}
          borderRadius="md"
          flexShrink={0} 
          mt={{ base: 4, md: 0 }} 
          width={{ base: "100%", md: "auto" }}
        >
          <Icon as={FaSearch} color="white" mr={2} />
          <Input
            placeholder="Search Product"
            variant="unstyled"
            color="white"
            _placeholder={{ color: "gray.400" }}
            width={{ base: "100%", md: "150px" }}
          />
          <Box
            as="button"
            type="submit"
            bg="white"
            color="black"
            borderRadius="md"
            ml={2}
            px={2}
            py={1}
            _hover={{ bg: "gray.400" }}
          >
            →
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
