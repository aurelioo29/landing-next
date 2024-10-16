import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";

const timelineData = {
  "Data Science Expert": [
    {
      date: "04 November 2024 - 08 November 2024",
      event: "Self Learning Online",
    },
    { date: "09 November 2024", event: "First Meeting Offline" },
    {
      date: "11 November 2024 - 15 November 2024",
      event: "Self Learning Online",
    },
    { date: "16 November 2024", event: "Second Meeting Offline" },
    {
      date: "18 November 2024 - 22 November 2024",
      event: "Self Learning Online",
    },
    { date: "23 November 2024", event: "Third Meeting Offline" },
    {
      date: "25 November 2024 - 29 November 2024",
      event: "Self Learning Online",
    },
    { date: "30 November 2024", event: "Fourth Meeting Offline" },
    {
      date: "02 December 2024 - 06 December 2024",
      event: "Self Learning Online",
    },
    { date: "07 December 2024", event: "Fifth Meeting Offline" },
    {
      date: "09 December 2024 - 13 December 2024",
      event: "Self Learning Online",
    },
    { date: "14 December 2024", event: "Sixth Meeting Offline" },
    {
      date: "16 December 2024 & 17 December 2024",
      event: "Capstone Project ",
    },
  ],
  "Data Analyst Expert": [
    {
      date: "04 November 2024 - 08 November 2024",
      event: "Self Learning Online",
    },
    { date: "09 November 2024", event: "First Meeting Offline" },
    {
      date: "11 November 2024 - 15 November 2024",
      event: "Self Learning Online",
    },
    { date: "16 November 2024", event: "Second Meeting Offline" },
    {
      date: "18 November 2024 - 22 November 2024",
      event: "Self Learning Online",
    },
    { date: "23 November 2024", event: "Third Meeting Offline" },
    {
      date: "25 November 2024 - 29 November 2024",
      event: "Self Learning Online",
    },
    { date: "30 November 2024", event: "Fourth Meeting Offline" },
    {
      date: "02 December 2024 - 06 December 2024",
      event: "Self Learning Online",
    },
    { date: "07 December 2024", event: "Fifth Meeting Offline" },
    {
      date: "09 December 2024 - 13 December 2024",
      event: "Self Learning Online",
    },
    { date: "14 December 2024", event: "Sixth Meeting Offline" },
    {
      date: "16 December 2024 & 17 December 2024",
      event: "Capstone Project ",
    },
  ],
  "Data Engineer Expert": [
    {
      date: "04 November 2024 - 08 November 2024",
      event: "Self Learning Online",
    },
    { date: "09 November 2024", event: "First Meeting Offline" },
    {
      date: "11 November 2024 - 15 November 2024",
      event: "Self Learning Online",
    },
    { date: "16 November 2024", event: "Second Meeting Offline" },
    {
      date: "18 November 2024 - 22 November 2024",
      event: "Self Learning Online",
    },
    { date: "23 November 2024", event: "Third Meeting Offline" },
    {
      date: "25 November 2024 - 29 November 2024",
      event: "Self Learning Online",
    },
    { date: "30 November 2024", event: "Fourth Meeting Offline" },
    {
      date: "02 December 2024 - 06 December 2024",
      event: "Self Learning Online",
    },
    { date: "07 December 2024", event: "Fifth Meeting Offline" },
    {
      date: "09 December 2024 - 13 December 2024",
      event: "Self Learning Online",
    },
    { date: "14 December 2024", event: "Sixth Meeting Offline" },
    {
      date: "16 December 2024 & 17 December 2024",
      event: "Capstone Project ",
    },
  ],
};

export default function Timeline() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Data Science Expert"
  );

  return (
    <Box id="timeline" mr={{ md: 6 }} mb={10} p={{ base: 4, md: 6 }}>
      <Flex align="center" mb={8}>
        <Divider borderColor="white" borderWidth={"1.9px"} data-aos="fade-up" />
        <Heading
          textAlign="center"
          color="white"
          mx={5}
          whiteSpace="nowrap"
          fontSize={{ base: "2xl", md: "4xl" }}
          data-aos="fade-up"
        >
          TIMELINE
        </Heading>
        <Divider borderColor="white" borderWidth={"1.9px"} data-aos="fade-up" />
      </Flex>

      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="white"
        mb={6}
        textAlign="center"
        data-aos="fade-up"
      >
        Explore the class schedule and find the one that suits you best!
      </Text>

      {/* <Flex justify="center" mb={8} gap={4} wrap="wrap" data-aos="fade-up">
        {[
          "Data Science Expert",
          "Data Analyst Expert",
          "Data Engineer Expert",
        ].map((category) => (
          <Button
            key={category}
            bg={'blue.500'}
            color="black"
            border="1px solid"
            borderColor={"blue.500"}
            onClick={() => setSelectedCategory(category)}
            _hover={'blue.500'}
            fontSize={{ base: "sm", md: "md" }}
          >
            {category}
          </Button>
        ))}
      </Flex> */}

      <TableContainer
        maxWidth={{ md: "900px" }}
        mx="auto"
        borderRadius="md"
        p={3}
        bg="#eaeaea"
        boxShadow="lg"
        mb={10}
        overflowX="auto"
        data-aos="zoom-in"
      >
        <Table variant="simple" size="md">
          <Thead bg="customBg.500" data-aos="fade-down">
            <Tr>
              <Th color="white" textAlign="center">
                Tanggal
              </Th>
              <Th color="white" textAlign="center">
                Acara
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {timelineData[selectedCategory].map((item, index) => (
              <Tr key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Td
                  textAlign="center"
                  bgColor={index % 2 === 1 ? "customBlue.500" : "#fff"}
                  fontWeight={index % 2 === 1 ? "bold" : "normal"}
                >
                  {item.date}
                </Td>
                <Td
                  textAlign="center"
                  bgColor={index % 2 === 1 ? "customBlue.500" : "#fff"}
                  fontWeight={index % 2 === 1 ? "bold" : "normal"}
                >
                  {item.event}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
