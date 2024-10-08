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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTabsStore } from "@/hooks/useTabsStore";
import {
  dataAnalystData,
  dataScientistData,
  dataEngineerData,
} from "@/data/materiData";

const CurriculumTabs = () => {
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
    <Box mx="auto" mb={20} id="kurikulum">
      <Heading as={"h1"} mb={5} textTransform={"uppercase"} color={"green.700"}>
        Our Kurikulum
      </Heading>
      <Text fontSize="sm" fontWeight="bold" mb={4}>
        Mengadopsi Kurikulum Teruji Industri: Mengikuti Update Terkini
      </Text>

      <Flex mt={5} mb={5} justify="space-between" align="center">
        <Box>
          <Button
            variant={mode === "Data Analyst" ? "solid" : "outline"}
            colorScheme="green"
            mx={2}
            onClick={() => setMode("Data Analyst")}
          >
            Data Analyst
          </Button>
          <Button
            variant={mode === "Data Scientist" ? "solid" : "outline"}
            colorScheme="green"
            mx={2}
            onClick={() => setMode("Data Scientist")}
          >
            Data Scientist
          </Button>
          <Button
            variant={mode === "Data Engineer" ? "solid" : "outline"}
            colorScheme="green"
            mx={2}
            onClick={() => setMode("Data Engineer")}
          >
            Data Engineer
          </Button>
        </Box>
        <Badge fontSize={"md"} p={1.5} borderRadius={"lg"} colorScheme="green">
          {totalLessons} Lessons
        </Badge>
      </Flex>

      {/* Tabs for different categories */}
      <Tabs
        index={activeTab}
        onChange={(index) => setActiveTab(index)}
        variant="enclosed"
      >
        <TabList>
          {dataToUse().map((tab, index) => (
            <Tab key={index} _selected={{ borderBottom: "5px solid black" }}>
              {tab.category}
            </Tab>
          ))}
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

export default CurriculumTabs;
