import { Box, Container, Heading, Text, Button, Image, VStack } from "@chakra-ui/react";
import { FaRobot, FaTools, FaBrain } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>
            Rethinking the Internet for AI Agents
          </Heading>
          <Text fontSize="xl">Our tools allow your AI agent to interact with any website, as if it were a human.</Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbmNlcHR8ZW58MHx8fHwxNzEzMjg5OTg3fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="sm" borderRadius="lg" />

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Our Services
          </Heading>
          <VStack spacing={5}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
              <Heading size="md">
                <FaRobot /> AI Integration
              </Heading>
              <Text mt={4}>Integrate AI seamlessly into your existing platforms and enhance user interactions.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
              <Heading size="md">
                <FaTools /> Custom Tools
              </Heading>
              <Text mt={4}>Customized tools to empower your AI agents to perform complex tasks effortlessly.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
              <Heading size="md">
                <FaBrain /> Advanced Analytics
              </Heading>
              <Text mt={4}>Leverage advanced analytics to understand and optimize AI agent interactions.</Text>
            </Box>
          </VStack>
        </Box>

        <Button rightIcon={<FaRobot />} colorScheme="teal" size="lg">
          Get Started with AI
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
