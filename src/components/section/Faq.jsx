import {
  Box,
  Collapse,
  Button,
  Text,
  Heading,
  Flex,
  Icon,
  Divider,
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
    <Box
      id="faq"
      p={{ base: 6, md: 10 }}
      mb={10}
      mx="auto"
      maxW="900px"
      borderRadius="2xl"
      data-aos="fade-up"
    >
      <Flex align="center" justify="center" mb={8} data-aos="zoom-in">
        <Divider borderColor="white" borderWidth="2px" w="30%" />
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }}
          textColor="white"
          mx={4}
          data-aos="fade-right"
          textAlign="center"
        >
          Frequently Asked Questions
        </Heading>
        <Divider borderColor="white" borderWidth="2px" w="30%" />
      </Flex>

      <Box>
        {visibleFAQs.map((faq, index) => (
          <Box
            key={index}
            borderBottom="2px dashed"
            borderColor="white"
            mb={4}
            data-aos="fade-up"
          >
            <Flex
              as="button"
              onClick={() => toggleFAQ(index)}
              width="100%"
              justify="space-between"
              align="center"
              bg="#eaeaea"
              _hover={{ bg: "customBlue.500" }}
              flexDirection={{ base: "column", md: "row" }}
              p={{ base: 3, md: 4 }}
            >
              <Text
                fontWeight="bold"
                fontSize={{ base: "md", md: "lg" }}
                textAlign={{ base: "center", md: "left" }}
                flex="1"
                mb={{ base: 2, md: 0 }}
                data-aos="fade-left"
              >
                {faq.question}
              </Text>
              <Icon
                as={activeIndex === index ? FaChevronUp : FaChevronDown}
                boxSize={{ base: 5, md: 6 }}
                color="customGray.500"
                data-aos="flip-up"
              />
            </Flex>
            <Collapse
              in={activeIndex === index}
              animateOpacity
              startingHeight={0}
              transition="all 0.3s ease-in-out"
            >
              <Box
                p={{ base: 3, md: 4 }}
                textColor="white"
                fontSize={{ base: "sm", md: "md" }}
                textAlign={{ base: "center", md: "left" }}
                data-aos="fade-up"
              >
                <Text>{faq.answer}</Text>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>

      {faqs.length > 3 && (
        <Box mt={6} textAlign="center" data-aos="zoom-in">
          <Button
            onClick={() => setShowMore(!showMore)}
            color="white"
            variant="link"
            size="lg"
            fontWeight="bold"
          >
            {showMore ? "Show Less" : "Show More"}
            <Icon as={showMore ? FaChevronUp : FaChevronDown} ml={2} />
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default FAQ;
