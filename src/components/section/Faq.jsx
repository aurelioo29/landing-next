import {
  Box,
  Collapse,
  Button,
  Text,
  Heading,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useFAQStore from "@/hooks/useFaqStore";
import { faqs } from "@/data/faqData";

function FAQ() {
  const { activeIndex, toggleFAQ } = useFAQStore();
  const [showMore, setShowMore] = useState(false);
  const visibleFAQs = showMore ? faqs : faqs.slice(0, 3);

  return (
    <Box id="faq" p={10} bg="#eaeaea" mb="10" mr={6} borderRadius={"2xl"}>
      <Box mx="auto">
        <Heading
          as="h2"
          size="xl"
          mb={8}
          color="#222222"
          textAlign={{ base: "center", md: "center" }}
        >
          Frequently Asked Questions (FAQ)
        </Heading>

        <Box spacing={4}>
          {visibleFAQs.map((faq, index) => (
            <Box
              key={index}
              borderBottom="1px dashed"
              borderColor="gray.300"
              mb={2}
            >
              <Flex
                as="button"
                onClick={() => toggleFAQ(index)}
                width="100%"
                justify="space-between"
                align="center"
                py={4}
                bg="#eaeaea"
                _hover={{ bg: "#eaeaea" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "md", md: "lg" }}
                  textAlign={{ base: "center", md: "left" }}
                  flex="1"
                  mb={{ base: 2, md: 0 }}
                >
                  {faq.question}
                </Text>
                <Icon
                  as={activeIndex === index ? FaChevronUp : FaChevronDown}
                  boxSize={6}
                  color="customYellow.500"
                />
              </Flex>
              <Collapse
                in={activeIndex === index}
                animateOpacity
                startingHeight={0}
                transition="all 0.3s ease-in-out"
              >
                <Box
                  p={4}
                  textColor="gray.600"
                  fontSize={{ base: "sm", md: "md" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text>{faq.answer}</Text>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Box>

        {faqs.length > 3 && (
          <Box mt={6} textAlign="center">
            <Button
              onClick={() => setShowMore(!showMore)}
              colorScheme="blackAlpha"
              variant="link"
              size="lg"
              fontWeight="bold"
            >
              {showMore ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}{" "}
              <Icon as={showMore ? FaChevronUp : FaChevronDown} ml={2} />
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FAQ;
