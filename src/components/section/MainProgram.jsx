import {
  Box,
  Flex,
  Heading,
  Divider,
  Button,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const ProgramCards = () => {
  const programs = [
    {
      title: "Data Analyst",
      image: "/assets/analyst.png",
      description:
        "Pelajari cara menganalisis dan menginterpretasi data untuk menghasilkan insight yang dapat digunakan dalam pengambilan keputusan bisnis. Program ini cocok untuk kamu yang ingin berkarir di dunia data tanpa harus memiliki latar belakang coding yang mendalam.",
    },
    {
      title: "Data Scientist",
      image: "/assets/scienst.png",
      description:
        "Menjadi Data Scientist memungkinkan kamu untuk menguasai ilmu data, statistik, dan machine learning untuk memprediksi dan membuat model dari data yang kompleks. Program ini ideal untuk kamu yang ingin berkarir di bidang yang menggabungkan ilmu data dan teknologi.",
    },
    {
      title: "Data Engineer",
      image: "/assets/engineer.png",
      description:
        "Fokus pada pembangunan infrastruktur data. Program ini akan membekali kamu dengan kemampuan untuk mengelola, mengolah, dan menyalurkan data melalui pipeline yang handal dan scalable, cocok untuk kamu yang tertarik di bidang arsitektur dan manajemen data.",
    },
  ];

  // Dynamic background colors
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverColor = useColorModeValue("green.300", "green.500");

  return (
    <Box mb={20} id="mainProgram" p={{ base: 8, md: 0 }} mr={6}>
      {/* Title Text */}
      <Flex align="center" mb={8} justifyContent="center">
        <Divider borderColor="customYellow.500" borderWidth={"1.9px"} />
        <Heading
          textAlign="center"
          color="customYellow.500"
          mx={5}
          whiteSpace="nowrap"
          fontSize={{ base: "2xl", md: "4xl" }}
          data-aos="fade-up"
        >
          Our Program
        </Heading>
        <Divider borderColor="customYellow.500" borderWidth={"1.9px"} />
      </Flex>

      {/* Program Cards */}
      <Flex
        justifyContent={"space-around"}
        direction={["column", "row"]}
        wrap="wrap"
        spacing={5}
      >
        {programs.map((program, index) => (
          <Flex
            key={index}
            bg={bgColor}
            p={5}
            borderRadius="xl"
            flex="1"
            maxW={{ base: "100%", sm: "300px" }}
            m={2}
            direction="column"
            align="center"
            textAlign="center"
            shadow="lg"
          >
            <Image
              src={program.image}
              alt={program.title}
              boxSize="80px"
              borderRadius="full"
              mb={4}
            />
            <Heading fontSize={{ base: "lg", md: "xl" }} mb={4}>
              {program.title}
            </Heading>
            <Text mb={4} fontSize={{ base: "sm", md: "md" }}>
              {program.description}
            </Text>
          </Flex>
        ))}
      </Flex>

      {/* Call to Action Button */}
      <Flex justify="center" mt={10}>
        <Link href="#kurikulum">
          <Button
            colorScheme="yellow"
            size="lg"
            _hover={{ bg: "yellow.400", color: "white" }}
            transition="all 0.3s"
          >
            Let&apos;s See Our Program
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default ProgramCards;
