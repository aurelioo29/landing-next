import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Flex,
  Collapse,
  Icon,
  Button,
  Badge,
  Heading,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTabsStore } from "@/hooks/useTabsStore";
import {
  dataAnalystData,
  dataScientistData,
  dataEngineerData,
} from "@/data/materiData";

const Curriculum = () => {
  const { activeTab, setActiveTab, mode, setMode } = useTabsStore();
  const [activeModuleIndex, setActiveModuleIndex] = useState(null);

  const dataToUse = () => {
    switch (mode) {
      case "Data Analyst":
        return dataAnalystData;
      case "Data Scientist":
        return dataScientistData;
      case "Data Engineer":
        return dataEngineerData;
      default:
        return dataAnalystData;
    }
  };

  const toggleModule = (index) => {
    setActiveModuleIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const totalLessons = dataToUse().reduce((acc, tab) => {
    return acc + tab.modules.length;
  }, 0);

  return (
    <Box mx="auto" mb={20} id="kurikulum" p={4}>
      <Heading
        as={"h1"}
        mb={5}
        textTransform={"uppercase"}
        color={"green.400"}
        textAlign={{ base: "center", md: "left" }}
      >
        Our Kurikulum
      </Heading>
      <Text
        fontSize="sm"
        fontWeight="bold"
        mb={4}
        textAlign={{ base: "center", md: "left" }}
      >
        Mengadopsi Kurikulum Teruji Industri: Mengikuti Update Terkini
      </Text>

      <Flex
        direction={["column", "row"]}
        align="center"
        justify="space-between"
        flexWrap="wrap"
        mb={5}
      >
        <Box display="flex" flexWrap="wrap" justifyContent="center" mb={[4, 0]}>
          {["Data Analyst", "Data Scientist", "Data Engineer"].map((label) => (
            <Button
              key={label}
              variant={mode === label ? "solid" : "outline"}
              colorScheme="green"
              mx={1}
              my={1}
              onClick={() => setMode(label)}
            >
              {label}
            </Button>
          ))}
        </Box>
        <Badge
          fontSize={"md"}
          p={2}
          borderRadius={"lg"}
          colorScheme="green"
          mt={[4, 0]}
          mx={["auto", 0]}
        >
          {totalLessons} Lessons
        </Badge>
      </Flex>

      <Flex justify="center" mb={4}>
        <Select
          onChange={(e) => setActiveTab(e.target.selectedIndex)}
          placeholder="Pilih Kategori"
          variant="outline"
          mb={4}
          width={{ base: "90%", md: "200px" }}
          display={{ base: "block", md: "none" }} // Hanya tampil di mobile
        >
          {dataToUse().map((tab, index) => (
            <option key={index} value={index}>
              {tab.category}
            </option>
          ))}
        </Select>
      </Flex>

      <Tabs
        index={activeTab}
        onChange={(index) => setActiveTab(index)}
        variant="enclosed"
        isLazy
        lazyBehavior="keepMounted"
      >
        <TabList>
          <Flex display={["none", "flex"]} justify="space-between">
            {dataToUse().map((tab, index) => (
              <Tab key={index} _selected={{ borderBottom: "5px solid black" }}>
                {tab.category}
              </Tab>
            ))}
          </Flex>
        </TabList>

        <TabPanels>
          {dataToUse().map((tab, index) => (
            <TabPanel key={index}>
              <Box
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                p={4}
                boxShadow={"2xl"}
                my={4}
              >
                {tab.modules.map((module, idx) => (
                  <Box key={idx} mb={4}>
                    <Flex
                      justify="space-between"
                      align="center"
                      py={2}
                      px={4}
                      borderBottom="1px solid"
                      borderColor="gray.300"
                      cursor="pointer"
                      onClick={() => toggleModule(idx)}
                      _hover={{ bg: "gray.100" }}
                    >
                      <Text fontWeight="bold">{module.title}</Text>
                      <Icon
                        as={
                          activeModuleIndex === idx
                            ? FaChevronUp
                            : FaChevronDown
                        }
                        boxSize={5}
                        color="gray.500"
                      />
                    </Flex>

                    <Collapse in={activeModuleIndex === idx} animateOpacity>
                      <Box
                        p={4}
                        color="gray.700"
                        mt="4"
                        bg="gray.50"
                        rounded="xl"
                        shadow="2xl"
                      >
                        <Text fontWeight="bold">Description:</Text>
                        <Text>{module.description}</Text>
                        <Text fontWeight="bold" mt={2}>
                          Details:
                        </Text>
                        <ul>
                          {module.details.map((detail, dIdx) => (
                            <li key={dIdx}>{detail}</li>
                          ))}
                        </ul>
                      </Box>
                    </Collapse>
                  </Box>
                ))}
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Curriculum;
