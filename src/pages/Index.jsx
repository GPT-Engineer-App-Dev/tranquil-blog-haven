import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">Join me on my journey as I share my thoughts, experiences, and stories.</Text>
        <Button colorScheme="teal" size="lg" mt={4}>Read My Blog</Button>
      </VStack>
    </Container>
  );
};

export default Index;