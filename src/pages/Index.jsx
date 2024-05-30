import { Container, Text, VStack, Heading, Box, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  // Sample posts data
  const posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">Join me on my journey as I share my thoughts, experiences, and stories.</Text>
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="lg" mt={4}>Add New Post</Button>
        {posts.map(post => (
          <Box key={post.id} p={4} borderWidth="1px" borderRadius="md" w="100%" mt={4}>
            <Heading as="h2" size="md">{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
            <Button as={RouterLink} to={`/delete-post/${post.id}`} colorScheme="red" size="sm" mt={4}>Delete</Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;