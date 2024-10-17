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
import { timelineData } from "@/data/timelineData";

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
          JADWAL PELAKSANAAN
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
        Jelajahi jadwal kelas dan temukan yang paling sesuai untuk Anda!
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
