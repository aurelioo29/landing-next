import { Box, Flex, Link, Input, Button, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <Box as="nav" bg="black" color="white" py={4} px={8}>
      <Flex
        maxW="1300px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Box>
          <Image
            src="/assets/multimatics_logo.png"
            width={150}
            height={50}
            alt="Multimatics Logo"
          />
        </Box>

        {/* Menu Links */}
        <Flex gap={6} alignItems="center">
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

        {/* Search Box */}
        <Flex
          as="form"
          alignItems="center"
          bg="gray.700"
          p={2}
          borderRadius="md"
        >
          <Icon as={FaSearch} color="white" mr={2} />
          <Input
            placeholder="Search Product"
            variant="unstyled"
            color="white"
            _placeholder={{ color: "gray.400" }}
            width="150px"
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
