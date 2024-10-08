import { Box, Flex, Text, Link, Stack, Icon, Image } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <Box bg="black" color="white" py={8}>
      <Box maxW="container.xl" mx="auto" px={6}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          textAlign={{ base: "center", md: "left" }}
          mb={6}
        >
          <Flex direction="column" mb={{ base: 8, md: 0 }}>
            <Image
              src="/assets/multimatics_logo.png"
              alt="Company Logo"
              width={150}
              height={50}
            />
            <Text mb={2}>PT. Lifelong Learning (Multimatics)</Text>
            <Text fontSize="sm">
              Address: AXA Tower 37th Floor
              <br />
              Jln. Prof. Dr. Satrio Kav. 18, Setiabudi, Kuningan South Jakarta
              <br />
              12940 Indonesia
            </Text>
            <Flex justify="center" mt={4} spacing={4}>
              <Link
                href="https://id.linkedin.com/in/multimaticsid"
                target="_blank"
                aria-label="LinkedIn"
                _hover={{ color: "gray.400" }}
              >
                <Icon as={FaLinkedin} />
              </Link>
              <Link
                href="https://www.instagram.com/multimatics/"
                target="_blank"
                aria-label="Instagram"
                _hover={{ color: "gray.400" }}
              >
                <Icon as={FaInstagram} />
              </Link>
              <Link
                href="https://www.youtube.com/user/multimaticsID"
                target="_blank"
                aria-label="YouTube"
                _hover={{ color: "gray.400" }}
              >
                <Icon as={FaYoutube} />
              </Link>
              <Link
                href="https://www.facebook.com/multimatics/"
                target="_blank"
                aria-label="Facebook"
                _hover={{ color: "gray.400" }}
              >
                <Icon as={FaFacebookF} />
              </Link>
            </Flex>
          </Flex>

          {/* Contact Section */}
          <Stack spacing={2} mb={{ base: 8, md: 0 }}>
            <Text fontWeight="bold" mb={4}>
              CONTACT US
            </Text>
            <Text mb={2}>Email: info@multimatics.co.id</Text>
            <Text mb={2}>Phone: +6221 300 56 123</Text>
            <Text>Fax: +6221 300 56 124</Text>
          </Stack>

          {/* Downloads & Others */}
          <Stack spacing={2}>
            <Text fontWeight="bold" mb={4}>
              Links
            </Text>
            <Link to="/" _hover={{ textDecoration: "underline" }}>
              Home
            </Link>
            <Link to="/#program" _hover={{ textDecoration: "underline" }}>
              Programs
            </Link>
            <Link to="/#faq" _hover={{ textDecoration: "underline" }}>
              FAQ
            </Link>
            <Link to="/#contact" _hover={{ textDecoration: "underline" }}>
              Our Contact
            </Link>
          </Stack>
        </Flex>

        {/* Copyright Section */}
        <Text textAlign="center" mt={6} fontSize="sm">
          &copy; {new Date().getFullYear()} Multimatics. All rights reserved. |{" "}
          <Link href="#" _hover={{ textDecoration: "underline" }}>
            Sitemap
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
